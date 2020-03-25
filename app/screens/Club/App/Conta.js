import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    Alert,
    KeyboardAvoidingView
} from 'react-native';
import { Button, Content, Form, Item, Input, Icon, Picker } from 'native-base';
import { Divider } from 'react-native-elements';
import { connect } from 'react-redux'
import update from "immutability-helper";

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'
import Modal from "react-native-modal";
import HttpService from '../../../service/HttpService'

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
            },
            isModalVisible: false,
            isEditable: false,
            credentials: {
                email: '',
                password: ""
            },
            user: {},
            display: "disabled",
            blocked: 'grey'
        }
    }
    async componentDidMount() {
        await HttpService
            .find('club')
            .then(user => this.setState({ user: user, credentials: { email: user.email } }))
    }
    handleLogin = () => {
        if (!this.state.credentials.password) {
            Alert.alert('Editar', 'Insira sua senha')
        } else {
            HttpService.login(this.state.credentials)
                .then(() => this.passwordEnter())
                .catch(err => {
                    console.log(err);
                    return Alert.alert(
                        "Editar",
                        err.response.data.error === "Unauthorized"
                            ? "Senha incorreta"
                            : err.response.data.error
                    );
                })
                .finally(() => this.setState({ loading: false }));
        }
    };
    handlePassword = name => value =>
        this.setState(
            update(this.state, {
                credentials: {
                    [name]: { $set: value }
                },
                user: {
                    [name]: { $set: value }
                }
            })
        );
    handleChangeValue = name => value =>
        this.setState(
            update(this.state, {
                user: {
                    [name]: { $set: value }
                }
            })
        );

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    passwordEnter = () => {
        this.setState({ isModalVisible: false, isEditable: true, display: "false", blocked: 'black', credentials: { password: '' } });
    };
    handleSave = () => HttpService
        .update('club', {}, this.state.user)
        .then(() => {
            console.log(this.state.user)
            Alert.alert('Meus dados', 'Seus dados foram alterados com sucesso.', [
                { text: 'OK' }
            ]);
            this.setState({ isEditable: false, disabled: "false", blocked: 'grey' })
        }).catch(error => console.log(error));


    render() {
        const deviceWidth = Dimensions.get("window").width;
        const deviceHeight = Dimensions.get("window").height
        const { isEditable, credentials, user, blocked } = this.state;


        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '100%' }}>
                        <Icon
                            name='arrowleft'
                            type='AntDesign'
                            style={{ paddingRight: 20, color: 'white' }}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <AeroText style={{ fontSize: 22, color: 'white' }}>  Conta</AeroText>
                        </Icon>
                        <Button style={[styles.button, { display: blocked == 'grey' ? 'flex' : 'none' }]} onPress={this.toggleModal} >
                            <IconSVG name="Edit" height="15" width="15" fill="#F75400" />
                            <AeroText style={{ color: '#F75400', marginLeft: 5 }} >Editar</AeroText>
                        </Button>
                        <Button style={[styles.button, { display: blocked == 'grey' ? 'none' : 'flex' }]} onPress={this.handleSave.bind(this)} >
                            <IconSVG name="Done" height="23" width="18" fill="#F75400" />
                            <AeroText style={{ color: '#F75400', marginLeft: 5, marginBottom: 3 }} >Salvar</AeroText>
                        </Button>
                    </View>
                    <View style={{ alignSelf: "center", width: 130, height: 130, borderRadius: 200, backgroundColor: 'white', borderWidth: 2, borderColor: '#ddd' }} />
                </ImageBackground>
                <Content padder>
                    <Form style={{height:600, justifyContent:'space-between'}} >
                        <Item picker>
                            <Input editable={isEditable} placeholder='Nome' value={user.name}
                                style={{ color: blocked, fontFamily: 'Aero' }}
                                onChangeText={this.handleChangeValue(
                                    "name"
                                ).bind(this)}
                            />
                            <IconSVG name="Account" height="20" width="20" fill="#ddd"

                            />
                        </Item>
                        <Item picker >
                            <Input editable={isEditable} placeholder='Nº de Quadras' value={user.quadras}
                                style={{ color: blocked, fontFamily: 'Aero' }}
                                onChangeText={this.handleChangeValue(
                                    "quadras"
                                ).bind(this)}
                            />
                            <IconSVG name="Boll" height="20" width="20" fill="#ddd"

                            />
                        </Item>
                        <Item picker>
                            <Input editable={isEditable} placeholder='Preço do Aluguel' value={user.aluguel_price}
                                style={{ color: blocked, fontFamily: 'Aero' }}
                                onChangeText={this.handleChangeValue(
                                    "aluguel_price"
                                ).bind(this)}
                            />
                            <IconSVG name="Money" height="20" width="20" fill="#ddd"

                            />
                        </Item>
                        <Item picker>
                            <Input editable={isEditable} placeholder='Preço da Mensalidade' value={user.mensal_price}
                                style={{ color: blocked, fontFamily: 'Aero' }}
                                onChangeText={this.handleChangeValue(
                                    "mensal_price"
                                ).bind(this)}
                            />
                            <IconSVG name="Money" height="20" width="20" fill="#ddff"

                            />
                        </Item>
                        <Item picker>
                            <Input editable={isEditable} placeholder='CEP' value={user.cep}
                                style={{ color: blocked, fontFamily: 'Aero' }}
                                onChangeText={this.handleChangeValue(
                                    "cep"
                                ).bind(this)}
                            />
                            <IconSVG name="Location" height="20" width="20" fill="#ddd" />
                        </Item>

                        {/* <Item >
                                <Input editable={isEditable} placeholder='Preço' value={user.preço}
                                style={{color:blocked}}
                                onChangeText={this.handleChangeValue(
                                    "preço"
                                ).bind(this)}
                                />
                                <IconSVG name="Money" height="20" width="20" fill="#ddd" />
                            </Item> */}

                        <Item picker >
                            <Input editable={isEditable} placeholder='Telefone' value={user.telefone}
                                style={{ color: blocked, fontFamily: 'Aero' }}
                                onChangeText={this.handleChangeValue(
                                    "telefone"
                                ).bind(this)}
                            />
                            <IconSVG name="Phone" height="20" width="20" fill="#ddd" />
                        </Item>
                        {/* <View style={{ height: 40, paddingHorizontal: 10 }}>
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
                            </View> */}


                    </Form>
                </Content>
                <Modal
                    isVisible={this.state.isModalVisible}
                    animationInTiming={300}
                    animationIn="slideInLeft"
                    animationOut="slideOutRight"
                    coverScreen={false}
                    deviceWidth={deviceWidth}
                    deviceHeight={deviceHeight}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: '40%', width: '95%', backgroundColor: 'white', padding: 20, justifyContent: 'space-around', borderRadius: 10 }}>
                            <AeroText style={{ color: '#F75400', fontSize: 18 }}>Insira a sua senha</AeroText>

                            <Item style={{ backgroundColor: '#ddd', borderRadius: 10, paddingHorizontal: 10 }} >
                                <Input placeholder='Senha' secureTextEntry={true}
                                    value={credentials.password}
                                    onChangeText={this.handlePassword(
                                        "password"
                                    ).bind(this)}
                                />
                                <IconSVG name="Key" height="20" width="20" fill="#F75400" />
                            </Item>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Button style={{ backgroundColor: '#ddd', width: 120, justifyContent: 'center', borderRadius: 10 }} onPress={this.toggleModal} >
                                    <AeroText style={{ color: 'gray' }} >Cancelar</AeroText>
                                </Button>
                                <Button style={{ backgroundColor: '#F75400', width: 120, justifyContent: 'center', borderRadius: 10 }} onPress={this.handleLogin.bind(this)} >
                                    <AeroText style={{ color: 'white' }} >Confirmar</AeroText>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </KeyboardAvoidingView>
        )
    }
}
const mapStateToProps = state => ({
    me: state.meTeacher,
});
export default connect(mapStateToProps, null)(Conta)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
        padding: 20,
        paddingLeft: 0
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
