import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Dimensions,
    Platform,
    Alert,
    Image,
    ActivityIndicator,
    Keyboard
} from 'react-native';
import _ from 'lodash';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { Form, Button, Item, Header, Container, Content, Icon, Footer, Picker, Input } from 'native-base';
import { Divider } from 'react-native-elements';
import Modal from "react-native-modal";
import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import update from 'immutability-helper'
import HttpService from '../../../service/HttpService'
import * as userActions from '../../../store/user/actions'
import {connect} from 'react-redux'

class Conta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: {
                pessoal: false,
                clube: false,
            },
            selected: 'Nenhum',
            nascimento: 'Data de Nascimento',
            seg: false,
            ter: false,
            qua: false,
            qui: false,
            sex: false,
            sab: false,
            dom: false,
            entrada: 'Entrada',
            saida: 'Saída',
            isModalVisible: false,
            isModalVisible2: false,
            isVisible: false,
            isVisible2: false,
            isVisible3: false,
            isEditable:false,
            editar: 'Editar',
            iconEditar: 'Edit',
            corIcons: '#ddd',
            credentials: {
                email: '',
                password: ""
            },
            me: {},
            display: "disabled",
            blocked: 'grey',
            clubs:{},
            myClubs:{},
            images: [
                {id: 1, number: '01'}
            ],
            image: null,

        }
    }
    componentDidMount() {
        if (!this.props.me) return null
        this.setState({ me: this.props.me,image:this.props.avatarUri, clubs: this.props.clubs, myClubs:this.props.myClubs, credentials: { email: this.props.me.email },  });
    }

    toggleModal = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible,
            editar: 'Salvar',
            iconEditar: 'Done',
            corIcons: '#000'
        });
    };

    handlePicker = (date) => {
        this.setState(update(this.state, {
            me: {
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
    handlePicker2 = (time) => {
        this.setState({
            isVisible2: false,
            entrada: moment(time).format('HH:mm')

        })
    }
    handleClub = () => {
        HttpService
            .insert(
                'users/{id}/club', 
                {}, 
                { id: this.state.selected }
            ).then(response => {
                this.setState({isModalVisible2:false, myClubs: response.club })
            }
            ).catch(error => Alert.alert('Erro', error.response.data.error))
            .finally(() => this.props.dispatch(userActions.loadClubs()))
    }
    hidePicker2 = () => {
        this.setState({
            isVisible2: false,
        })
    }

    showPicker2 = () => {
        this.setState({
            isVisible2: true
        })
    }

    handlePicker3 = (time) => {
        this.setState({
            isVisible3: false,
            saida: moment(time).format('HH:mm')

        })
    }
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

    handlePassword = name => value =>
    this.setState(
        update(this.state, {
            credentials: {
                [name]: { $set: value }
            }
        })
    );
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
                .finally(() => this.setState({ loading: false} ));
        }
    };
    handleSave = () => HttpService
        .update('meAccount', {}, this.state.me)
        .then(() => {
            Alert.alert('Meus dados', 'Seus dados foram alterados com sucesso.', [
                { text: 'OK' }
            ]);
            this.props.dispatch(userActions.loadAccount());
            this.setState({ isEditable: false, disabled: "false", blocked: 'grey' })
        }).catch(error => console.log(error, this.state.me));

    handleChangeValue = name => value =>
        this.setState(
            update(this.state, {
                me: {
                    [name]: { $set: value }
                }
            })
        );

    hidePicker3 = () => {
        this.setState({
            isVisible3: false,
        })
    }

    showPicker3 = () => {
        this.setState({
            isVisible3: true
        })
    }
    onValueChange(value) {
        this.setState({
          selected: value
        });
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
                this.props.dispatch(userActions.loadingUser(true));

                HttpService.uploadImage(result)
                    .then(() => {
                        this.props.dispatch(userActions.loadMe())
                    })
                    .catch((data) => console.log(data),() => this.props.dispatch(userActions.loadingUser(false)))
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
        const {image,me} = this.state;
        const {clubs} = this.props;
        const {myClubs, loading, avatarUri} = this.props;
        

        const {isEditable, blocked, credentials} = this.state;
        if(image && avatarUri && image != avatarUri)
            this.setState({image: avatarUri})

        return (
            <Container >
                <KeyboardAvoidingView
                    style={styles.container} behavior="padding" enabled
                >
                    <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '100%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ paddingTop: 5 }}>
                                    <IconSVG name='Back' height='25' width='25' fill='white' />
                                </TouchableOpacity>
                                <AeroText style={{ fontSize: 22, color: 'white' }}> Conta</AeroText>
                            </View>
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
                    
                    <Content padder style={styles.content}>

                        <Form style={{ height: 800, justifyContent: 'space-between' }}>
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
                        <Item picker >
                            <Input editable={isEditable} placeholder='Telefone' value={me.telefone}
                                style={{ color: blocked, fontFamily: 'Aero' }}
                                onChangeText={this.handleChangeValue(
                                    "telefone"
                                ).bind(this)}
                            />
                            <IconSVG name="Phone" height="20" width="20" fill="#ddd" />
                        </Item>

                            {/* <Item picker>
                                <Picker
                                    note
                                    //mode="dropdown"
                                    selectedValue={this.state.selected}
                                    style={{ flex: 1, height: 50 }}
                                    style={{color:'black'}}
                                    onValueChange={this.onValueChange.bind(this)}

                                >
                                    <Picker.Item label="Português (Brasil)" value="portugues" />
                                    <Picker.Item label="Inglês" value="ingles" />
                                    <Picker.Item label="Espanhol" value="espanhol" />
                                </Picker>
                                <Divider style={{ backgroundColor: '#ddd', height: 1 }} />
                            </Item> */}
                            <View style={{ paddingBottom: 200 }}>

                                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                    <AeroText style={{ color: '#F75400', fontSize: 18 }}>Clubes</AeroText>
                                    <View style={[styles.bottonAdd, {backgroundColor: isEditable ? '#F75400' : '#ddd'}]}>
                                        <TouchableOpacity onPress={ isEditable ? () => this.setState({isModalVisible2:true}) : null} >
                                            <IconSVG name="Add" height="15" width="15" fill='#fff'/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {me.clubs && me.clubs.length == 0 ? 
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 10 }}>                                      
                                            <AeroText style={{ color: "#808080" }}>Você ainda não possue clube</AeroText>
                                    </View>  
                                : myClubs && myClubs.map(club => {
                                    return(
                                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 10 }}>
                                            <AeroText style={{ color: "#808080" }}>{club.club.name}</AeroText>
                                            {/* <View style={{ borderRadius: 30, height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
                                                <IconSVG name="Remove" height="15" width="15" fill="#ddd" />
                                            </View> */}
                                        </View>
                                    )
                                })
                                }
                            </View>

                            {/* <View>
                                <AeroText style={{ color: '#F75400', fontSize: 18 }}>Disponibilidade</AeroText>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: "space-around", paddingTop: 40 }}>
                                    <TouchableOpacity style={this.state.seg ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                                        onPress={this.state.seg ? () => this.setState({ seg: false }) : () => this.setState({ seg: true })}
                                        value={this.state.seg}>
                                        <AeroText style={this.state.seg ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Seg</AeroText>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={this.state.ter ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                                        onPress={this.state.ter ? () => this.setState({ ter: false }) : () => this.setState({ ter: true })}
                                        value={this.state.ter}>
                                        <AeroText style={this.state.ter ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Ter</AeroText>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={this.state.qua ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                                        onPress={this.state.qua ? () => this.setState({ qua: false }) : () => this.setState({ qua: true })}
                                        value={this.state.qua}>
                                        <AeroText style={this.state.qua ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana}  >Qua</AeroText>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={this.state.qui ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                                        onPress={this.state.qui ? () => this.setState({ qui: false }) : () => this.setState({ qui: true })}
                                        value={this.state.qui}>
                                        <AeroText style={this.state.qui ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Qui</AeroText>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={this.state.sex ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                                        onPress={this.state.sex ? () => this.setState({ sex: false }) : () => this.setState({ sex: true })}
                                        value={this.state.sex}>
                                        <AeroText style={this.state.sex ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Sex</AeroText>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={this.state.sab ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                                        onPress={this.state.sab ? () => this.setState({ sab: false }) : () => this.setState({ sab: true })}
                                        value={this.state.sab}>
                                        <AeroText style={this.state.sab ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Sab</AeroText>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={this.state.dom ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                                        onPress={this.state.dom ? () => this.setState({ dom: false }) : () => this.setState({ dom: true })}
                                        value={this.state.dom}>
                                        <AeroText style={this.state.dom ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Dom</AeroText>
                                    </TouchableOpacity>
                                </View>
                                {/* <Form style={{ flexDirection: 'row', paddingTop: 40, justifyContent: 'center', alignItems: 'center' }}>
                                 <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1 }]}>
                            <Input
                                style={styles.Input}
                                placeholder='Entrada'
                                onChangeText={(entrada) => this.setState({ entrada })}
                                value={this.state.entrada}
                            />
                        </Item>
                                    <TouchableOpacity style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1, height: 50, justifyContent: 'center' }]} onPress={this.showPicker2} >
                                        <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center' }}>

                                            <AeroText style={{}}>
                                                {this.state.entrada}
                                            </AeroText>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ justifyContent: "center", height: 40, width: 35 }}>
                                        <AeroText style={{}}> até</AeroText>
                                    </View>
                                    <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1 }]}>
                            <Input
                                style={styles.Input}
                                placeholder='Saída'
                                onChangeText={(saida) => this.setState({ saida })}
                                value={this.state.saida}
                            />
                        </Item> 
                                    <TouchableOpacity style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1, height: 50, justifyContent: 'center' }]} onPress={this.showPicker3} >
                                        <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center' }}>

                                            <AeroText style={{}}>
                                                {this.state.saida}
                                            </AeroText>
                                        </View>
                                    </TouchableOpacity>
                                </Form>

                            </View> */}
                        </Form>
                    </Content>
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
                <Modal
                    isVisible={this.state.isModalVisible2}
                    onBackdropPress={() => this.setState({ isModalVisible2: false })}
                    animationInTiming={300}
                    animationIn="slideInLeft"
                    animationOut="slideOutRight"
                    coverScreen={true}
                    deviceWidth={deviceWidth}
                    deviceHeight={deviceHeight}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 250, width: '95%', backgroundColor: 'white', padding: 20, justifyContent: 'space-around', borderRadius: 10 }}>
                            <AeroText style={{ color: '#F75400', fontSize: 18 }}>Escolha seu clube</AeroText>

                            <Item picker>
                                <Picker
                                    note
                                    //mode="dropdown"
                                    selectedValue={this.state.selected}
                                    style={{ flex: 1, height: 50 }}
                                    style={{color:'black'}}
                                    onValueChange={this.onValueChange.bind(this)}

                                >
                                    <Picker.Item label="Nenhum" value={'Nenhum'} />
                                    { clubs ? clubs.map(club =>{ 
                                        return (
                                            <Picker.Item label={club.name} value={club.id} />
                                        )
                                    }): null}
                                </Picker>
                                <Divider style={{ backgroundColor: '#ddd', height: 1 }} />
                            </Item>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Button style={{ backgroundColor: '#ddd', width: 120, justifyContent: 'center', borderRadius: 10 }} 
                                    onPress={() =>this.setState({
                                        isModalVisible2: !this.state.isModalVisible2, selected:'Nenhum'})} >
                                    <AeroText style={{ color: 'gray' }} >Cancelar</AeroText>
                                </Button>
                                <Button style={{ backgroundColor: '#F75400', width: 120, justifyContent: 'center', borderRadius: 10 }} 
                                    onPress={this.state.selected != 'Nenhum' ? this.handleClub.bind(this) : () => this.setState({
                                        isModalVisible2: !this.state.isModalVisible2, selected:'Nenhum'})}
                                >
                                    <AeroText style={{ color: 'white' }} >Confirmar</AeroText>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
                <DateTimePickerModal
                    mode="date"
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                />
                <DateTimePickerModal
                    mode="time"
                    isVisible={this.state.isVisible2}
                    onConfirm={this.handlePicker2}
                    onCancel={this.hidePicker2}
                />
                <DateTimePickerModal
                    mode="time"
                    isVisible={this.state.isVisible3}
                    onConfirm={this.handlePicker3}
                    onCancel={this.hidePicker3}
                />
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    me: state.user.meAccount,
    clubs: state.user.clubs,
    loading: state.user.loading,
    myClubs: state.user.myClubs,
    avatarUri: state.user.me.avatarUri ? state.user.me.avatarUri : null
});
export default connect(mapStateToProps, null)(Conta)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1
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
