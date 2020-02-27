import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Footer } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import { ChatIcon } from '../../../components/Icon/Icon';

class Jogos extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                        <Icon
                            name='arrowleft'
                            type='AntDesign'
                            style={{ color: 'white' }}
                        >
                            <AeroText style={{ fontSize: 22, color: 'white' }}>  Jogos</AeroText>
                        </Icon>
                        <Button style={styles.button} >
                            <Icon
                                name='settings'
                                type='Octicons'
                                style={{ color: '#F75400' }}
                            />
                        </Button>
                    </View>
                </ImageBackground>
                <ScrollView>
                    <View style={styles.content}>

                        <Button style={styles.buttonList}>
                            <View style={{ borderRadius: 100, backgroundColor: 'red', height: 50, width: 50, marginLeft: -20 }} />
                            <AeroText style={{ padding: 10 }}>Nome</AeroText>

                            <AeroText style={{ padding: 10, fontSize: 20, color: '#F75400' }}>VS</AeroText>

                            <AeroText style={{ padding: 10 }}>Nome</AeroText>
                            <View style={{ borderRadius: 100, backgroundColor: 'gray', height: 50, width: 50, marginRight: -20 }} />
                            <View style={{ alignItems: "flex-end", marginRight: -25 }}>

                                <View style={{ position: "absolute", width: 40, height: 40, borderRadius: 50, backgroundColor: 'orange', justifyContent: "center", alignItems: "center" }}>
                                    <ChatIcon />
                                </View>
                            </View>
                        </Button>

                    </View>
                </ScrollView>
            </Container>
        )
    }
}


export default Jogos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    content: {
        paddingTop: -20,
        padding: 20,
        paddingHorizontal: 40,
    },
    header: {
        flexDirection: 'row',
        height: 200,
        justifyContent: 'space-between',
        paddingTop: 40,
        padding: 20
    },
    button: {
        justifyContent: "center",
        backgroundColor: "#ffff",
        width: 55,
        borderRadius: 100,
    },
    textButton: {
        color: '#F75400'
    },
    buttonList: {
        flex: 1,
        justifyContent: "space-between",
        marginVertical: 20,
        flexDirection: "row",
        height: 70,
        backgroundColor: "#ffff",
        borderWidth: 2,
        borderRightWidth: 4,
        borderRadius: 50,
        borderColor: '#ddd',
        borderBottomWidth: 4,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 9,
    },
});
