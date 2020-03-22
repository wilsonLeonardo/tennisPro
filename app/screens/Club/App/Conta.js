import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Button, Container, Item, Input, Icon, Picker } from 'native-base';
import { Divider } from 'react-native-elements';

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'
import Modal from "react-native-modal";

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
                itemIndex: '',
                isModalVisible: false
            }
        }
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        const deviceWidth = Dimensions.get("window").width;
        const deviceHeight = Dimensions.get("window").height
        return (
            <Container style={styles.container}>
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ paddingTop: 5 }}>
                                <IconSVG name='Back' height='25' width='25' fill='white' />
                            </TouchableOpacity>
                            <AeroText style={{ fontSize: 22, color: 'white' }}>   Conta</AeroText>
                        </View>
                        <Button style={styles.button} onPress={this.toggleModal} >
                            <IconSVG name="Edit" height="15" width="15" fill="#F75400" />
                            <AeroText style={{ color: '#F75400', marginLeft: 5 }} >Editar</AeroText>
                        </Button>
                    </View>
                    <View style={{ alignSelf: "center", width: 130, height: 130, borderRadius: 200, backgroundColor: 'white', borderWidth: 2, borderColor: '#ddd' }} />
                </ImageBackground>

                <KeyboardAvoidingView
                    style={styles.content}
                    behavior={Platform.select({
                        ios: 'padding',
                        android: 'padding',
                    })}
                >
                    <View style={{ flex: 1, justifyContent: "space-around" }}>
                        <Item >
                            <Input placeholder='Nome' />
                            <IconSVG name="AccountForm" height="20" width="20" fill="#ddd" />
                        </Item>

                        <Item >
                            <Input placeholder='Data de Nascimento' />
                            <IconSVG name="Date" height="20" width="20" fill="#ddd" />
                        </Item>

                        <Item >
                            <Input placeholder='Email' />
                            <IconSVG name="Mail" height="20" width="20" fill="#ddd" />
                        </Item>

                        <Item >
                            <Input placeholder='Senha' secureTextEntry={true} />
                            <IconSVG name="Key" height="20" width="20" fill="#ddd" />
                        </Item>
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


                </KeyboardAvoidingView>
                <Modal
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={() => this.setState({ isModalVisible: false })}
                    animationInTiming={300}
                    animationIn="slideInLeft"
                    animationOut="slideOutRight"
                    coverScreen={true}
                    deviceWidth={deviceWidth}
                    deviceHeight={deviceHeight}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 250, width: '95%', backgroundColor: 'white', padding: 20, justifyContent: 'space-around', borderRadius: 10 }}>
                            <AeroText style={{ color: '#F75400', fontSize: 18 }}>Insira a sua senha</AeroText>

                            <Item style={{ backgroundColor: '#ddd', borderRadius: 10, paddingHorizontal: 10 }} >
                                <Input placeholder='Senha' secureTextEntry={true} />
                                <IconSVG name="Key" height="20" width="20" fill="#F75400" />
                            </Item>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Button style={{ backgroundColor: '#ddd', width: 120, justifyContent: 'center', borderRadius: 10 }} onPress={this.toggleModal} >
                                    <AeroText style={{ color: 'gray' }} >Cancelar</AeroText>
                                </Button>
                                <Button style={{ backgroundColor: '#F75400', width: 120, justifyContent: 'center', borderRadius: 10 }} onPress={this.toggleModal} >
                                    <AeroText style={{ color: 'white' }} >Confirmar</AeroText>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
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
