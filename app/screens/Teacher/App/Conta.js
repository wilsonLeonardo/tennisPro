import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
} from 'react-native';
import { Button, Container, Icon, Picker } from 'native-base';
import { Input, Divider } from 'react-native-elements';

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'

class Conta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: {
                pessoal: false,
                clube: false,
            },
            language: {
                itemValue: '',
                itemIndex: ''
            }
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", width:'100%' }}>
                        <Icon
                            name='arrowleft'
                            type='AntDesign'
                            style={{ paddingRight: 20, color: 'white' }}
                        >
                            <AeroText style={{ fontSize: 22, color: 'white' }}>  Conta</AeroText>
                        </Icon>
                        <Button style={styles.button} >
                            <IconSVG name="Edit" height="15" width="15" fill="#F75400" />
                            <AeroText style={{ color: '#F75400', marginLeft:5 }} >Editar</AeroText>
                        </Button>
                    </View>
                    <View style={{ alignSelf: "center", width: 130, height: 130, borderRadius: 200, backgroundColor: 'white', borderWidth: 2, borderColor: '#ddd' }} />
                </ImageBackground>

                <View style={styles.content}>
                    <View style={{ flex: 1, justifyContent: "space-around" }}>
                        <Input placeholder='Nome' rightIcon={<IconSVG name="AccountForm" height="20" width="20" fill="#ddd" />} />

                        <Input placeholder='Data de Nascimento' rightIcon={<IconSVG name="Date" height="20" width="20" fill="#ddd" />} />

                        <Input placeholder='Email' rightIcon={<IconSVG name="Mail" height="20" width="20" fill="#ddd" />} />

                        <Input placeholder='Senha' rightIcon={<IconSVG name="Key" height="20" width="20" fill="#ddd" />} />

                        <View style={{ height: 40, paddingHorizontal: 10 }}>
                            <Picker
                                selectedValue={this.state.language}
                                style={{ flex: 1, height: 50 }}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ language: itemValue })
                                }
                            >
                                <Picker.Item label="Português (Brasil)" value="portugues" />
                                <Picker.Item label="Inglês" value="ingles" />
                                <Picker.Item label="Espanhol" value="espanhol" />
                            </Picker>
                            <Divider style={{ backgroundColor: '#000' }} />
                        </View>
                    </View>

                    
                </View>
            </Container>
        )
    }
}

export default Conta

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
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
    }

});
