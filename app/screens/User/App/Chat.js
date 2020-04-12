import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    ActivityIndicator,
    Keyboard
} from 'react-native';
import 'moment/locale/pt-br';
import HttpService from '../../../service/HttpService'
import update from 'immutability-helper'
import FirebaseService from '../../../service/FirebaseService'
import { getUser } from "../../../service/AuthService";
import moment from 'moment'
import InputMessage from "./components/InputMessage";
import * as messagesActions from '../../../store/messages/actions'
import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'
import {connect} from 'react-redux'

class Chat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: null,
            title: '...',
            content: ''
        };

        this._keyboardDidShow = this._keyboardDidShow.bind(this);
        this._keyboardDidHide = this._keyboardDidHide.bind(this);
    }

    componentDidMount(){
        const { id, title } = this.props.navigation.state.params;

        HttpService
            .patch('messages/{id}/update-status', { id });

        
        getUser().then(user => {
            this.setState({ userId: user.id, key: id, title},
                () => FirebaseService.getDataList(
                    'messages/'.concat(this.state.key),
                    messages => this.setState({ messages })
                )
            );
        });
        
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }
    _keyboardDidShow = (event) => this.setState({ keyboardHeight: event.endCoordinates.height });

    _keyboardDidHide = (event) => this.setState({ keyboardHeight: 0 });

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    onSend = (message) => {
        message.userId = this.state.userId;

        this.setState(update(this.state, {
            messages: { $push: [message] }
        }), () => {
            HttpService.insert('messages/{id}', { content: message.content }, { id: this.state.key });

        });
    };
    goBack = () => {
        this.props.dispatch(messagesActions.fetchMessages());
        this.props.navigation.navigate('Mensagens');
    };

    render() {
        const {title, avatar} = this.props.navigation.state.params;
        console.log(avatar);
        const { userId, messages } = this.state;

        const Message = ({ message, containerStyle, position }) => (
            <View style={{paddingHorizontal: 30, paddingBottom: 20, flexDirection: 'row', }}>
                 { position === 'LEFT' && <IconSVG name="AccountForm" height="20" width="20" fill="#8c8c8c" /> }

                <View style={[styles.message, containerStyle]}>
                    <AeroText style={[styles.messageText, {color: position === 'RIGHT' ? 'black' : 'white' }]}>{message.content}</AeroText>
                    <AeroText style={[styles.messageTime, {color: position === 'RIGHT' ? 'black' : 'white' }]}>{moment(message.time).fromNow()}</AeroText>
                </View>

                {position === 'RIGHT' &&  <IconSVG name="AccountForm" height="20" width="20" fill="#ebebeb" /> }
            </View>
        );
        const ListView = () => (
            <ScrollView
                ref={ ( ref ) => this.scrollView = ref }
                onContentSizeChange={() => this.scrollView.scrollToEnd({animated: false})}
            >
                <View style={{height:30, width: 100}}></View>
                {
                    messages.map((item) => {
                       return (
                           <Message
                               key={item.time}
                               message={item}
                               containerStyle={item.userId === userId ? styles.sentMessageContainer : styles.receiptMessageContainer}
                               position={item.userId === userId ? 'RIGHT' : 'LEFT'}
                           />
                       )
                        
                    } )
                }
            </ScrollView>
        );

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled style={styles.container}>
                <ImageBackground source={require('../../../assets/images/headerChat.png')} style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: "center", width: '100%' }}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <IconSVG name="Back" width="20" height="20" fill="#F75400"/>
                        </TouchableOpacity>
                        <View style={{alignItems:'center', justifyContent:'center', left:"5%", flexDirection:'row'}}>
                            <View style={{ width: 70, height: 70, borderRadius: 80, backgroundColor: '#F75400', borderWidth: 2, borderColor: '#ddd' }}>
                            {avatar
                                && (<Image source={{uri: avatar}} resizeMode="cover" style={styles.avatar}/>)}
                            </View>
                            <View style={{ paddingHorizontal: 10 }}>
                                <AeroText style={{ fontSize: 18 }}>{title}</AeroText>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                {!messages && 
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
                    <ActivityIndicator size="large" color="#676767" />
                </View>}
                {messages && messages.length == 0 && <ScrollView/>}
                {messages && messages.length > 0 && <ListView/>}
                <InputMessage keyboardHeight={this.state.keyboardHeight} onSend={this.onSend.bind(this)}/>
            </KeyboardAvoidingView>
        )
    }
}

export default connect(() => ({}))(Chat) 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        padding: 30,
    },
    header: {
        alignItems: 'flex-start',
        height: 200,
        justifyContent: 'space-between',
        paddingTop: 40,
        padding: 10,
    },
    avatar:{
        width: "100%",
        height: "100%",
        backgroundColor: '#ffff',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 0.9,
        borderRadius: 50,
        borderRadius: 250,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    messageText: {
        fontSize: 15,
        lineHeight: 25,
        marginBottom: 10,
    },
    receiptMessageContainer: {
        marginLeft: 10,
        backgroundColor: '#8c8c8c',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderTopRightRadius: 20,
        elevation:10
    },
    sentMessageContainer: {
        marginRight: 10,
        backgroundColor: '#ebebeb',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderTopLeftRadius: 20,
    },
    messageTime: {
        fontSize: 12,
        opacity: 0.9,
    },
    
});
