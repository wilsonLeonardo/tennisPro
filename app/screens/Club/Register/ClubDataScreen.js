import React, { Component } from 'react';
import { Connect, connect } from 'react-redux'
import { addDados } from '../../../store/clubRegister/actions'
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
        this.props.onAddDados({ ...this.state })
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
                            <View style={{ paddingHorizontal: 5 }}>
                                <IconSVG name='Location' width='25' height='25' fill='#F75400' />
                            </View>
                        </Item>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                            <Input
                                placeholder='Nome'
                                style={styles.Input}
                                onChangeText={(nome) => this.setState({ nome })}
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
                                onChangeText={(telefone) => this.setState({ telefone })}
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
                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}
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
                                onChangeText={(senha) => this.setState({ senha })}
                                value={this.state.senha}
                            />
                            <View style={{ paddingHorizontal: 5 }}>
                                <IconSVG name='Key' width='25' height='25' fill='#F75400' />
                            </View>
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
