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
import * as teacherActions from '../../../store/teacher/actions'

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
            selected1: '',
            selected2: '',
            isModalVisible: false,
            isEditable: false,
            credentials: {
                email: '',
                password: ""
            },
            user: {},
            display: "disabled",
            blocked: 'grey',
            dataEhora: 'Selecione',
            isVisible: false,
        }
    }

    onValueChange1(value) {
        this.setState({
            selected1: value
        });
    }

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    handlePicker = (date) => {
        this.setState({
            isVisible: false,
            dataEhora: moment(date).format('MMMM Do YYYY, h:mm a'),
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
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-start" }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ paddingTop: 5 }}>
                            <IconSVG name='Back' height='25' width='25' fill='white' />
                        </TouchableOpacity>
                        <AeroText style={{ fontSize: 22, color: 'white' }}>   Novo Jogo</AeroText>

                    </View>
                </ImageBackground>

                <Content padder style={styles.content} >
                    <Form style={{ height: 600, justifyContent: 'space-between' }}>
                        <AeroText style={styles.titulo}>Escolha o clube e adversário</AeroText>
                        <Form>

                            <AeroText style={styles.subTitulo}>Clube</AeroText>
                            <Item picker>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={{ flex: 1, height: 50 }}
                                    selectedValue={this.state.selected1}
                                    onValueChange={this.onValueChange1.bind(this)}
                                >
                                    <Picker.Item label="Geral" value="geral" />
                                    <Picker.Item label="club1" value="key1" />
                                    <Picker.Item label="club2" value="key2" />
                                </Picker>
                                <Divider style={{ backgroundColor: '#ddd', height: 1 }} />
                            </Item>
                        </Form>
                        <Form>

                            <AeroText style={styles.subTitulo}>Desafiante</AeroText>
                            <Item picker>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={{ flex: 1, height: 50 }}
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="Ricardo" value="key0" />
                                    <Picker.Item label="José" value="key1" />
                                    <Picker.Item label="Jean" value="key3" />
                                </Picker>
                                <Divider style={{ backgroundColor: '#ddd', height: 1 }} />
                            </Item>
                        </Form>

                        <AeroText style={styles.titulo}>Informe o dia do jogo</AeroText>
                        <Form>
                            <AeroText style={styles.subTitulo}>Data e Hora</AeroText>
                            <Item picker>

                                <Button transparent
                                    style={{ fontFamily: 'Aero', borderBottomWidth: 0.2, borderBottomColor: '#ddd', height: 45, justifyContent: 'center' }}
                                    onPress={this.showPicker}
                                >
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                                        <AeroText style={{ paddingLeft: 5, fontSize: 16, color: '#666' }}  >{this.state.dataEhora}</AeroText>

                                        <View style={{ paddingHorizontal: 5 }}>
                                        </View>
                                        <IconSVG name='Date' width='20' height='20' fill='#000' />
                                    </View>
                                </Button>
                            </Item>
                        </Form>
                        <Button block style={{ backgroundColor: '#F75400', marginTop: 30 }}>
                            <AeroText style={{ fontSize: 20, color: 'white' }}>Finalizar</AeroText>
                        </Button>
                    </Form>


                </Content>

                <DateTimePickerModal
                    mode="datetime"
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                />
            </KeyboardAvoidingView>
        )
    }
}

export default NewJogo
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
