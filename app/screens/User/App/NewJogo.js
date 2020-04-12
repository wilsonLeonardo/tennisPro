import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    Alert,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';
import { Button, Content, Item, Input, Icon, Picker, Form } from 'native-base';
import { Divider } from 'react-native-elements';
import { connect } from 'react-redux'
import update from "immutability-helper";
import * as gamesAction from '../../../store/games/actions'

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'
import Modal from "react-native-modal";
import HttpService from '../../../service/HttpService'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

class NewJogo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: {
                pessoal: false,
                clube: false,
            },
            selected1: '...',
            selected2: 'key0',
            isModalVisible: false,
            isEditable: false,
            credentials: {
                email: '',
                password: ""
            },
            display: "disabled",
            blocked: 'grey',
            data: null,
            hora: null,
            isVisible: false,
        }
    }
    async componentDidMount(){
        await HttpService
            .find('users')
            .then(user => this.setState({user, selected1: user[0].id}))
    }

    onValueChange1(value) {
        this.setState({
            selected1: value
        });
    }
    insertGame = () => {
        const {selected1, data, hora} = this.state;

        if(selected1 != '...')
            HttpService
                .insert('game', {
                    foreign_id: selected1,
                    dia: data,
                    hora: hora
                }).then((data) =>{
                    console.log(data),
                    this.props.dispatch(gamesAction.loadPendingGame()),
                    Alert.alert('Novo Jogo!', 
                    'Solicitação enviada com sucesso, aguarde a confirmação do adversario!')
                }).catch(data => console.log(data))
    }

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    handlePicker = (date) => {
        this.setState({
            isVisible: false,
            data: moment(date).format('DD-MM-YYYY'),
            hora: moment(date).format('H:mm')
        })
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
    render() {
        const {data, hora, user, selected1} = this.state;
        console.log(selected1);
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-start" }}>
                        <TouchableOpacity onPress={() => this.props.navigation.pop()} style={{ paddingTop: 5 }}>
                            <IconSVG name='Back' height='25' width='25' fill='white' />
                        </TouchableOpacity>
                        <AeroText style={{ fontSize: 22, color: 'white' }}>   Novo Jogo</AeroText>

                    </View>
                </ImageBackground>

                <Content padder style={styles.content} >
                    <View style={{ height: 500, justifyContent: 'space-between' }}>
                        <AeroText style={styles.titulo}>Escolha o {/*clube e*/} adversário</AeroText>

                            {/* <AeroText style={styles.subTitulo}>Clube</AeroText>
                            <Item picker>
                                <Picker
                                    note
                                    style={{ flex: 1 }}
                                    style={{color:'black'}}
                                    selectedValue={this.state.selected1}
                                    onValueChange={this.onValueChange1.bind(this)}
                                    mode="dropdown"
                                >
                                    <Picker.Item label="Geral" value={'geral'} />
                                    <Picker.Item label="club1" value="key1" />
                                    <Picker.Item label="club2" value="key2" />
                                </Picker>
                                <Divider style={{ backgroundColor: '#ddd', height: 1 }} />
                            </Item> */}
                            <AeroText style={styles.subTitulo}>Desafiante</AeroText>
                            <Item picker>
                                <Picker
                                    note
                                    style={{ flex: 1, color:'black' }}
                                    selectedValue={this.state.selected1}
                                    style={{color:'black'}}
                                    onValueChange={this.onValueChange2.bind(this)}
                                    mode="dropdown"
                                >
                                    {/* <Picker.Item label='Selecine' value='selecione'/> */}
                                 {
                                        user ? user.map(item =>{
                                            return(
                                                <Picker.Item label={item.name} value={item.id} key={item.id} />
                                            )
                                        }) :  <Picker.Item label={'Selecine'} value={'selecione'} />
                                    } 
                                </Picker>
                                <Divider style={{ backgroundColor: '#ddd', height: 1 }} />
                            </Item>

                        <AeroText style={styles.titulo}>Informe o dia do jogo</AeroText>
                        <Form>
                            <AeroText style={styles.subTitulo}>Data e Hora</AeroText>
                            <Item picker>

                                <Button transparent
                                    style={{ fontFamily: 'Aero', borderBottomWidth: 0.2, borderBottomColor: '#ddd', height: 45, justifyContent: 'center' }}
                                    onPress={this.showPicker}
                                >
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                                        <AeroText style={{ paddingLeft: 5, fontSize: 16, color: '#666' }}  >{!data ? 'Selecione' : `${data} ${hora}`}</AeroText>

                                        <View style={{ paddingHorizontal: 5 }}>
                                        </View>
                                        <IconSVG name='Date' width='20' height='20' fill='#000' />
                                    </View>
                                </Button>
                            </Item>
                        </Form>
                        <Button block style={{ backgroundColor: '#F75400', marginTop: 30 }} onPress={this.insertGame.bind(this)}>
                            <AeroText style={{ fontSize: 20, color: 'white' }}>Finalizar</AeroText>
                        </Button>
                    </View>


                </Content>

                <DateTimePickerModal
                    mode="datetime"
                    locale={'pt_BR'}
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                />
            </KeyboardAvoidingView>
        )
    }
}

export default connect(() => ({}))(NewJogo)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1
    },
    header: {
        alignItems: 'flex-start',
        height: 200,
        justifyContent: 'space-between',
        paddingTop: 40,
        padding: 10,
    },
    titulo: {
        fontSize: 20,
        color: '#666'
    },
    subTitulo: {
        fontSize: 15,
        color: '#F75400'
    }

});
