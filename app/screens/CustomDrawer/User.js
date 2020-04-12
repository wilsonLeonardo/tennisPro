import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    Button,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import { AeroText } from '../../components/StyledText'
import { ScrollView } from 'react-native-gesture-handler'
import IconSVG from '../../components/Icon/IconSVG'
import {logout, getUser} from '../../service/AuthService'
import HttpService from '../../service/HttpService'
import {connect} from 'react-redux'
import * as userActions from '../../store/user/actions'
import * as teacherActions from '../../store/teacher/actions'
import * as gamesAction from  '../../store/games/actions'
import * as messagesAction from  '../../store/messages/actions'
import { NavigationActions, StackActions } from 'react-navigation';

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'SignedOut' })],
});

class CustomDrawer extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {}
        }
    }
    SignOut(){
        Alert.alert('Sair', 'Tem certeza que deseja sair?',[
            {text: 'Sim', onPress: () => {
                logout().then(() =>
                this.props.dispatch(
                    userActions.clear(),
                    teacherActions.clear(),
                    gamesAction.clear(),
                    messagesAction.clear()
                ),
                this.props.navigation.dispatch(resetAction)        
               )
            }},
            {text: 'Cancelar', style:'cancel'},
        ])
    }
    Avatar = () => {
        const { avatarUri, loading } = this.props;
       // console.log(avatarUri);

        const Avatar = () => (
            <Image
                resizeMode="cover"
                source={{uri: avatarUri}}
                style={styles.imgUser}
            />
        );

        if (loading) {
            return (
                <View
                style={styles.image}
                >
                    <ActivityIndicator color="black" />
                </View>
            )
        }

        return (
            <View style={styles.image}>
                {avatarUri ? <Avatar/> : null}
            </View>
        );
    }

    render(){
        const{loading, me} = this.props;
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/images/HeaderMenu.png')}
                    style={styles.imageBack}
                >
                    <this.Avatar/>
                    {!loading ?
                        <View style={{ flex: 1 }}>
                            <AeroText style={styles.name}>{me.Username}</AeroText>
                            <AeroText style={styles.email}>{me.Email}</AeroText>
                        </View>
                        : null
                    }
                </ImageBackground>
                <ScrollView>
                    <DrawerNavigatorItems {...this.props} />
                </ScrollView>
    
                <TouchableOpacity style={{ padding: 25 }} onPress={this.SignOut.bind(this)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IconSVG name='Leave' width='20' height='20' fill='#F75400' />
                        <AeroText style={{ color: '#F75400', fontSize: 20, paddingHorizontal: 10 }}>Sair</AeroText>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const mapStateToProps = state => ({
    me: state.user.me,
    loading: state.user.loading,
    avatarUri:  state.user.me.avatarUri ? state.user.me.avatarUri : null
})

export default connect(mapStateToProps,null)(CustomDrawer)


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 40,
        marginBottom: 25
    },
    imageBack: {
        flexDirection: 'row',
        resizeMode: 'contain',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 15,
        color: 'white',
    },
    email: {
        fontSize: 12,
        color: 'white',
    },
    image: {
        width: 60,
        height: 60,
        backgroundColor: '#ffff',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 0.9,
        borderRadius: 50,
        elevation: 5,
        overflow: 'hidden',
        margin:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgUser: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
});