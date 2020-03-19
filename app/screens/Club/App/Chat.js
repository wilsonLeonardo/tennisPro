import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableHighlight,
    Text
} from 'react-native';
import { Form, Button, Item, Header, Container, Content, Icon, Footer, Picker, Input } from 'native-base';
import { Divider } from 'react-native-elements';

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'

class Chat extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={require('../../../assets/images/headerChat.png')} style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: "center", width: '100%' }}>
                        <View style={{ width: 70, height: 70, borderRadius: 80, backgroundColor: '#F75400', borderWidth: 2, borderColor: '#ddd' }} />
                        <View style={{ paddingHorizontal: 10 }}>
                            <AeroText style={{ fontSize: 18 }}>Maria de Carvalho Lima</AeroText>
                            <Text style={{ fontStyle: 'italic' }}>Online</Text>
                        </View>
                    </View>
                </ImageBackground>
                <ScrollView style={{}}>

                </ScrollView>
                <View style={{ padding: 20 }}>
                        <Item regular style={{ borderWidth: 2, borderColor: '#ddd', borderRadius: 25, paddingHorizontal:10 }} >
                            <Input placeholder='Digite uma mensagem' />
                            <IconSVG name="Send" height="20" width="20" fill="#F75400" />
                        </Item>
                </View>
            </Container>
        )
    }
}

export default Chat

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
    button: {
        alignSelf: 'flex-end',
        justifyContent: "center",
        marginRight: 20,
        backgroundColor: "#ffff",
        width: 100,
        borderRadius: 100,
    },
    textButton: {
        fontSize: 18,
        color: '#607d8b'
    },
    textButtonPress: {
        fontSize: 18,
        color: 'white'
    },
    buttonList: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginVertical: 10,
        width: 60,
        height: 40,
        backgroundColor: "#EBF0EE",
        borderWidth: 2,
        borderRightWidth: 4,
        borderRadius: 25,
        borderColor: '#ddd',
        borderBottomWidth: 4,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 9,
    },
    buttonListPress: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginVertical: 10,
        width: 60,
        height: 40,
        backgroundColor: "#F75400",
        borderWidth: 2,
        borderRightWidth: 4,
        borderRadius: 25,
        borderColor: '#ddd',
        borderBottomWidth: 4,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 9,
    },
    bottonAdd: {
        backgroundColor: "#ddd",
        borderRadius: 30,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottonAddPress: {
        backgroundColor: "#F75400",
        borderRadius: 30,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        backgroundColor: 'red',
        flexDirection: 'row',
        backgroundColor: "#ffff",
        height: 50,
        width: 300,
        elevation: 2,
        borderRadius: 10
    },
    iconSeach: {
        margin: 10
    },
    Input: {
        fontSize: 17,
        fontFamily: 'Aero',
    },
    bottom: {
        flex: 1,
        padding: 30,
        alignItems: "flex-start"
    },
    bottomDiasDaSemana: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        backgroundColor: '#f7f7f7'
    },
    bottomDiasDaSemanaPress: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        backgroundColor: '#F75400'
    },
    fontDiasDaSemana: {
        fontSize: 10,
        fontFamily: 'Aero'
    },
    fontDiasDaSemanaPress: {
        fontSize: 10,
        fontFamily: 'Aero',
        color: 'white'
    },

});
