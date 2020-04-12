import React, { Component } from 'react';
import { Connect, connect } from 'react-redux'
import * as clubAction from '../../../store/clubRegister/actions'
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import update from "immutability-helper";
import { Form, Button, Item, Input, Header, Content, Container, Icon } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { HeaderTennis } from '../../../components/Header'
import { TitleTennis } from '../../../components/Title'
import { bindActionCreators } from 'redux';
import { render } from 'react-dom';
import IconSVG from '../../../components/Icon/IconSVG';

class ClubDataScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cep: '',
            nome: '',
            telefone: '',
            email: '',
            senha: ''
        }
    }

    addDados = () => {
        this.props.dispatch(clubAction.addDados({...this.state}))
        this.props.navigation.navigate('clubeDispo')
    }
    handleChangeValue = name => value =>
        this.setState(
        update(this.state, {
            [name]: { $set: value }
        })
    );
    render() {

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled keyboardVerticalOffset={0}>
                <HeaderTennis />
                <TitleTennis placeholder="Preencha seus dados" Icon="Check" />
                <Content style={styles.content}>
                    <Form>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                            <Input
                                placeholder='Cep'
                                style={styles.Input}
                                onChangeText={this.handleChangeValue(
                                    "cep"
                                  ).bind(this)}
                                value={this.state.cep}
                            />
                            <View style={{ paddingHorizontal: 5 }}>
                                <IconSVG name='Location' width='25' height='25' fill='#F75400' />
                            </View>
                        </Item>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                            <Input
                                placeholder='Nome'
                                style={styles.Input}
                                onChangeText={this.handleChangeValue(
                                    "nome"
                                  ).bind(this)}
                                value={this.state.nome}
                            />
                            <View style={{ paddingHorizontal: 5 }}>
                                <IconSVG name='AccountForm' width='25' height='25' fill='#F75400' />
                            </View>
                        </Item>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                            <Input
                                placeholder='Telefone'
                                style={styles.Input}
                                onChangeText={this.handleChangeValue(
                                    "telefone"
                                  ).bind(this)}
                                value={this.state.telefone}
                            />
                            <View style={{ paddingHorizontal: 5 }}>
                                <IconSVG name='Phone' width='25' height='25' fill='#F75400' />
                            </View>
                        </Item>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                            <Input
                                placeholder='Email'
                                style={styles.Input}
                                onChangeText={this.handleChangeValue(
                                    "email"
                                  ).bind(this)}
                                value={this.state.email}
                                autoCapitalize='none'
                            />
                            <View style={{ paddingHorizontal: 5 }}>
                                <IconSVG name='Mail' width='25' height='25' fill='#F75400' />
                            </View>
                        </Item>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                            <Input
                                secureTextEntry={true}
                                placeholder='Senha'
                                style={styles.Input}
                                onChangeText={this.handleChangeValue(
                                    "senha"
                                  ).bind(this)}
                                value={this.state.senha}
                            />
                            <View style={{ paddingHorizontal: 5 }}>
                                <IconSVG name='Key' width='25' height='25' fill='#F75400' />
                            </View>
                        </Item>
                        <Button onPress={this.addDados.bind(this)}
                            block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', marginTop: 15, elevation: 5 }}>
                            <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}>
                                Próximo
                            </AeroText>
                        </Button>
                    </Form>
                </Content>
            </KeyboardAvoidingView>
        );
    }
}

ClubDataScreen.navigationOptions = {
    headerShown: false
}


export default connect(()=>({}))(ClubDataScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff"
    },
    item: {
        elevation: 2,
        borderRadius: 10
    },
    content: {
        paddingTop: 30,
        padding: 50,
        paddingBottom: 250
    },
    Input: {
        fontSize: 15,
        fontFamily: 'Aero'
    }
});
