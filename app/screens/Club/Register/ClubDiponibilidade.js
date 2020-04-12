import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addDisponibilidade } from '../../../store/clubRegister/actions'
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import update from "immutability-helper";
import { setAuthUser } from "../../../service/AuthService";
import { Form, Button, Item, Input, Header, Content, Container, Icon } from 'native-base';
import HttpService from '../../../service/HttpService'
import * as clubActions from '../../../store/club/actions'
import * as permissionService from "../../../service/PermissionService";
import * as notificationsActions from "../../../store/notifications/actions";

import { AeroText } from '../../../components/StyledText';
import { HeaderTennis } from '../../../components/Header'
import { TitleTennis } from '../../../components/Title'

class ClubDisponibilidade extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quadras: '',
            aluguel_price: '',
            mensal_price: '',
            profile: 'CLUB'
        }
    }

    handleChangeValue = name => value =>
        this.setState(
        update(this.state, {
            [name]: { $set: value }
        })
    )
    addDados = () => {
        const {data} = this.props;
        const dado = Object.assign({...this.state}, data)
        console.log(dado);
        
        HttpService
          .insert('registerClub', dado)
          .then((data) => {
              Alert.alert('Novo Cadastro', 'Seu cadastro foi realizado com sucesso.');
              console.log(data);
  
              this.props.dispatch(clubActions.loadCamps());
              this.props.dispatch(
                notificationsActions.fetchNotifications(data.user.id)
              );

              permissionService.syncDeviceIdentifier(data.user.id);
  
              setAuthUser(data).then(() => this.props.navigation.navigate('SignedInClub'));
          });
    }

    render() {
        console.log(this.props.data)
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled keyboardVerticalOffset={0}>
                <HeaderTennis />
                <TitleTennis placeholder="Quase tudo pronto..." style={{ fontSize: 25 }} />
                <View style={styles.caixa} >
                    <AeroText style={{ fontSize: 18, fontWeight: 'normal', alignItems: 'center', color: '#f75400' }}>
                        Por último, nos informe as
                        </AeroText>
                    <AeroText style={{ fontSize: 18, fontWeight: 'normal', alignItems: 'center', color: '#f75400' }}>
                        mensalidades e preços
                        </AeroText>
                </View>
                <Content style={styles.content}>
                    <Form style={{ paddingTop: 40 }}>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                            <Input
                                placeholder='Nº de Quadras'
                                style={styles.Input}
                                onChangeText={this.handleChangeValue(
                                    "quadras"
                                  ).bind(this)}
                                value={this.state.num_quadras}
                            />
                            <Icon name='tennisball' style={{ color: '#F75400' }} />
                        </Item>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                            <Input
                                placeholder='Preço do Aluguel'
                                style={styles.Input}
                                onChangeText={this.handleChangeValue(
                                    "aluguel_price"
                                  ).bind(this)}
                                value={this.state.aluguel}
                            />
                            <Icon name='logo-usd' style={{ color: '#F75400' }} />
                        </Item>

                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                            <Input
                                placeholder='Preço da Mensalidade'
                                style={styles.Input}
                                onChangeText={this.handleChangeValue(
                                    "mensal_price"
                                  ).bind(this)}
                                value={this.state.mensalidade}
                            />
                            <Icon name='logo-usd' style={{ color: '#F75400' }} />
                        </Item>
                        <Button 
                            onPress={this.addDados.bind(this)}
                            block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', marginTop: 20, elevation: 5 }}>
                            <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Finalizar </AeroText></Button>
                    </Form>
                </Content>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.clubRegister
    }
}

export default connect(mapStateToProps, null)(ClubDisponibilidade)


ClubDisponibilidade.navigationOptions = {
    headerShown: false
}


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
        paddingTop: 0,
        padding: 50,
        paddingBottom: 230
    },
    Input: {
        fontSize: 15,
        fontFamily: 'Aero'
    },
    caixa: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
});
