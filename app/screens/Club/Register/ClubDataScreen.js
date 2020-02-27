import React, { Component } from 'react';
import { Connect, connect } from 'react-redux'
import { addDados } from '../../store/actions/club'
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { Form, Button, Item, Input, Header, Content, Container, Icon } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { HeaderTennis } from '../../../components/Header'
import { TitleTennis } from '../../../components/Title'
import { bindActionCreators } from 'redux';
import { render } from 'react-dom';

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
        this.props.onAddDados({...this.state})
    }
    render() {
        const { navigate } = this.props.navigation;
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
                                onChangeText={(cep) => this.setState({ cep })}
                                value={this.state.cep}
                            />
                            <Icon name='locate' style={{ color: '#F75400' }} />
                        </Item>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                            <Input
                                placeholder='Nome'
                                style={styles.Input}
                                onChangeText={(nome) => this.setState({ nome })}
                                value={this.state.nome}
                            />
                            <Icon name='person' style={{ color: '#F75400' }} />
                        </Item>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                            <Input
                                placeholder='Telefone'
                                style={styles.Input}
                                onChangeText={(telefone) => this.setState({ telefone })}
                                value={this.state.telefone}
                            />
                            <Icon name='call' style={{ color: '#F75400' }} />
                        </Item>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                            <Input
                                placeholder='Email'
                                style={styles.Input}
                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}
                            />
                            <Icon name='mail' style={{ color: '#F75400' }} />
                        </Item>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                            <Input
                                secureTextEntry={true}
                                placeholder='Senha'
                                style={styles.Input}
                                onChangeText={(senha) => this.setState({ senha })}
                                value={this.state.senha}
                            />
                            <Icon name='key' style={{ color: '#F75400' }} />
                        </Item>
                        <Button onPress={() => navigate('clubeDispo')}
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

const mapDispatchToProps = (dispatch) => {
    return {
        onAddDados: club => dispatch(addDados(club))
    }
}

export default connect(null, mapDispatchToProps)(ClubDataScreen)

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
