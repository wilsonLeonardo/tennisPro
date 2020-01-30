import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addDisponibilidade } from '../../store/actions/user'
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

class UserDisponibilidade extends Component {

    constructor(props) {
        super(props)
        this.state = {
            entrada: '',
            saida: '',
            p_min: '',
            p_max: ''
        }
    }
    onAddDispo = () => {
        this.props.addDisponibilidade({ ...this.state })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled keyboardVerticalOffset={0}>
                <HeaderTennis />
                <TitleTennis placeholder="Quase tudo pronto..." style={{ fontSize: 25 }} />
                <View style={styles.caixa} >
                    <AeroText style={{ fontSize: 18, fontWeight: 'normal', alignItems: 'center', color: '#f75400' }}>
                        Por último, nos informe sua
                </AeroText>
                    <AeroText style={{ fontSize: 18, fontWeight: 'normal', alignItems: 'center', color: '#f75400' }}>
                        disponibilidade
                </AeroText>
                </View>
                <Content style={styles.content}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: "space-around", paddingTop: 40 }}>

                        <Button style={styles.bottomDiasDaSemana}>
                            <AeroText style={styles.fontDiasDaSemana} >Seg</AeroText>
                        </Button>
                        <Button style={styles.bottomDiasDaSemana}>
                            <AeroText style={styles.fontDiasDaSemana} >Ter</AeroText>
                        </Button>
                        <Button style={styles.bottomDiasDaSemana}>
                            <AeroText style={styles.fontDiasDaSemana} >Qua</AeroText>
                        </Button>
                        <Button style={styles.bottomDiasDaSemana}>
                            <AeroText style={styles.fontDiasDaSemana} >Qui</AeroText>
                        </Button>
                        <Button style={styles.bottomDiasDaSemana}>
                            <AeroText style={styles.fontDiasDaSemana} >Sex</AeroText>
                        </Button>
                        <Button style={styles.bottomDiasDaSemana}>
                            <AeroText style={styles.fontDiasDaSemana} >Sab</AeroText>
                        </Button>
                        <Button style={styles.bottomDiasDaSemana}>
                            <AeroText style={styles.fontDiasDaSemana} >Dom</AeroText>
                        </Button>

                    </View>
                    <Form style={{ flexDirection: 'row', paddingTop: 40 }}>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1 }]}>
                            <Input
                                style={styles.Input}
                                placeholder='Entrada'
                                onChangeText={(entrada) => this.setState({ entrada })}
                                value={this.state.entrada}
                            />
                        </Item>
                        <View style={{ justifyContent: "center", height: 40, width: 35 }}>
                            <AeroText> até</AeroText>
                        </View>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1 }]}>
                            <Input
                                style={styles.Input}
                                placeholder='Saída'
                                onChangeText={(saida)=>this.setState({saida})}
                                value={this.state.saida}
                            />
                        </Item>
                    </Form>
                    <Form style={{ paddingTop: 20 }}>
                        <Button block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', marginTop: 20, elevation: 5 }}>
                            <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Finalizar </AeroText>
                        </Button>
                    </Form>
                </Content>
            </KeyboardAvoidingView>
        );
    }
}

UserDisponibilidade.navigationOptions = {
    headerShown: false
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddDispo: user => dispatch(addDisponibilidade(user))
    }
}

export default connect(null, mapDispatchToProps)(UserDisponibilidade)


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
    bottomDiasDaSemana: {
        borderRadius: 10,
        justifyContent: 'center',
        width: 30,
        height: 30,
        backgroundColor: '#f7f7f7'
    },
    fontDiasDaSemana: {
        fontSize: 10,
        fontFamily: 'Aero'

    },
});
