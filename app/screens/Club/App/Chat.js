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
});
