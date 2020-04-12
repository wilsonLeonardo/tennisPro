import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    Alert,
    KeyboardAvoidingView,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    Keyboard
} from 'react-native';
import { Button, Content, Item, Input, Icon, Form } from 'native-base';
import { Divider } from 'react-native-elements';
import { connect } from 'react-redux'
import update from "immutability-helper";
import * as teacherActions from '../../../store/teacher/actions'
import _ from 'lodash';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'
import Modal from "react-native-modal";
import HttpService from '../../../service/HttpService'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'


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
            me: {},
            display: "disabled",
            blocked: 'grey',
            nascimento: 'Data de Nascimento',
            isVisible: false,
            images: [
                {id: 1, number: '01'}
            ],
            image: null,

        }
    }
    componentDidMount() {
        if (!this.props.me.meTeacher) return null
        this.setState({ me: this.props.me.meTeacher, image:this.props.me.meTeacher.avatarUri, credentials: { email: this.props.me.meTeacher.email } });
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
                }
            })
        );
    handleChangeValue = name => value =>
        this.setState(
            update(this.state, {
                me: {
                    [name]: { $set: value }
                }
            })
        );

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    passwordEnter = () => {
        this.setState({ isModalVisible: false, isEditable: true, display: "false", blocked: 'black'});
        this.setState(
            update(this.state, {
                credentials: {
                    password: { $set: '' }
                }
            })
        );
    };
    handleSave = () => HttpService
        .update('meTeacher', {}, this.state.me)
        .then(() => {
            console.log(this.state.meTeacher)
            Alert.alert('Meus dados', 'Seus dados foram alterados com sucesso.', [
                { text: 'OK' }
            ]);
            this.props.dispatch(teacherActions.loadMeTeacher());
            this.setState({ isEditable: false, disabled: "false", blocked: 'grey' })
        }).catch(error => console.log(error, this.state.meTeacher));

    handlePicker = (date) => {
        this.setState(update(this.state, {
            meTeacher: {
                nascimento: { $set: moment(date).format('DD/MM/YYYY')}
            },
            isVisible: {$set:false}
        }))
    }

    hidePicker = () => {
        this.setState({
            isVisible: false,
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }
    _hasPermission = async () => {
        const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
        const libraryPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        return cameraPermission.status === 'granted' && libraryPermission.status === 'granted';
    };

    _pickImage = async () => {
        Keyboard.dismiss();

        if (this._hasPermission()) {

            let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
               aspect: [4, 4],
           });

            if (!result.cancelled) {
                this.props.dispatch(teacherActions.loadingUser(true));

                HttpService.uploadImage(result)
                    .then(() => {
                        this.props.dispatch(teacherActions.loadMeTeacher())
                    })
                    .catch(() => this.props.dispatch(teacherActions.loadingUser(false)))
            }
        }
    };
    Avatar = () => {
        const { avatarUri, loading } = this.props;

        const Avatar = () => (
            <Image
                resizeMode="cover"
                source={{uri: avatarUri}}
                style={styles.avatar}
            />
        );

        if (loading) {
            return (
                <View
                style={{ alignSelf: "center", width: 130, height: 130, borderRadius: 250, backgroundColor: 'white', borderWidth: 2, borderColor: '#ddd' }}
                >
                    <ActivityIndicator color="black" />
                </View>
            )
        }

        return (
            <TouchableOpacity
            style={{ alignSelf: "center", width: 130, height: 130, borderRadius: 250, backgroundColor: 'white', borderWidth: 2, borderColor: '#ddd' }} 
            onPress={this._pickImage}>
                {avatarUri ? <Avatar/> : null}
            </TouchableOpacity>
        );
    }
    render() {
        const deviceWidth = Dimensions.get("window").width;
        const deviceHeight = Dimensions.get("window").height
        const { isEditable, credentials, blocked, image, me } = this.state;
        const {meTeacher, loading} = this.props.me;
       // const {avatarUri} = this.props;

        if(!meTeacher) null
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
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
                    <this.Avatar/>
                </ImageBackground>

                <Content padder>
                    <Form style={{justifyContent:'space-between', height:500}}>
                        <Item picker >
                            <Input editable={isEditable} placeholder='Nome' value={me.username}
                                style={{ color: blocked, fontFamily: 'Aero' }}
                                onChangeText={this.handleChangeValue(
                                    "username"
                                ).bind(this)}
                            />
                            <IconSVG name="AccountForm" height="20" width="20" fill="#ddd" />
                        </Item>

                        <Item picker>

                            <Button transparent
                                style={{fontFamily: 'Aero', borderBottomWidth: 0.2, borderBottomColor: '#ddd', height: 45, justifyContent: 'center' }}
                                value={me.nascimento}
                                onPress={isEditable ? this.showPicker : null}
                            >
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
                                    <AeroText style={{ paddingLeft: 5, fontSize:16, color: blocked }}  >{me.nascimento}</AeroText>

                                    <View style={{ paddingHorizontal: 5 }}>
                                    </View>
                                    <IconSVG name='Date' width='20' height='20' fill='#ddd' />
                                </View>
                            </Button>
                        </Item>

                        <Item picker>
                            <Input editable={isEditable} placeholder='Preço' value={me.preço}
                                style={{ color: blocked, fontFamily: 'Aero' }}
                                onChangeText={this.handleChangeValue(
                                    "preço"
                                ).bind(this)}
                            />
                            <IconSVG name="Money" height="20" width="20" fill="#ddd" />
                        </Item>

                        <Item picker >
                            <Input editable={isEditable} placeholder='Telefone' value={me.telefone}
                                style={{ color: blocked, fontFamily: 'Aero' }}
                                onChangeText={this.handleChangeValue(
                                    "telefone"
                                ).bind(this)}
                            />
                            <IconSVG name="Phone" height="20" width="20" fill="#ddd" />
                        </Item>
                        {/* <Button block disabled={!isEditable} style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', 
                        marginTop: 20, elevation: 5, display}}
                        onPress={this.handleSave.bind(this)}
                        >
                            <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Alterar </AeroText></Button> */}
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
                <DateTimePickerModal
                    mode="date"
                    locale='pt_BR'
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                />
            </KeyboardAvoidingView>
        )
    }
}
function mapStateToProps(state) {
    return{
        me: state.meTeacher,
        loading:state.meTeacher.loading,
        avatarUri: state.meTeacher.meTeacher.avatarUri ? state.meTeacher.meTeacher.avatarUri : null
    }
}
export default connect(mapStateToProps, null)(Conta)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
        padding: 20,
        paddingBottom: 0,
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
