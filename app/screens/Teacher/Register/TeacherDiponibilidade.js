import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addDisponibilidade } from '../../../store/teacherRegister/actions'
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableHighlight
} from 'react-native';
import { Form, Button, Item, Input, Header, Content, Container, Icon } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { HeaderTennis } from '../../../components/Header'
import { TitleTennis } from '../../../components/Title'

class TeacherDisponibilidade extends Component {
    constructor(props) {
        super(props)
        this.state = {
            diasDaSemana: {
                seg: false, ter: false, qua: false, qui: false, sex: false, sab: false, dom: false
            },
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
                        disponibilidade e preço
                </AeroText>
                </View>
                <Content style={styles.content}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: "space-around", paddingTop: 40 }}>
                        <TouchableHighlight style={this.state.seg ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                            onPress={this.state.seg ? () => this.setState({ seg: false }) : () => this.setState({ seg: true })}
                            value={this.state.seg}>
                            <AeroText style={this.state.seg ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Seg</AeroText>
                        </TouchableHighlight>
                        <TouchableHighlight style={this.state.ter ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                            onPress={this.state.ter ? () => this.setState({ ter: false }) : () => this.setState({ ter: true })}
                            value={this.state.ter}>
                            <AeroText style={this.state.ter ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Ter</AeroText>
                        </TouchableHighlight>
                        <TouchableHighlight style={this.state.qua ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                            onPress={this.state.qua ? () => this.setState({ qua: false }) : () => this.setState({ qua: true })}
                            value={this.state.qua}>
                            <AeroText style={this.state.qua ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana}  >Qua</AeroText>
                        </TouchableHighlight>
                        <TouchableHighlight style={this.state.qui ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                            onPress={this.state.qui ? () => this.setState({ qui: false }) : () => this.setState({ qui: true })}
                            value={this.state.qui}>
                            <AeroText style={this.state.qui ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Qui</AeroText>
                        </TouchableHighlight>
                        <TouchableHighlight style={this.state.sex ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                            onPress={this.state.sex ? () => this.setState({ sex: false }) : () => this.setState({ sex: true })}
                            value={this.state.sex}>
                            <AeroText style={this.state.sex ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Sex</AeroText>
                        </TouchableHighlight>
                        <TouchableHighlight style={this.state.sab ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                            onPress={this.state.sab ? () => this.setState({ sab: false }) : () => this.setState({ sab: true })}
                            value={this.state.sab}>
                            <AeroText style={this.state.sab ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Sab</AeroText>
                        </TouchableHighlight>
                        <TouchableHighlight style={this.state.dom ? styles.bottomDiasDaSemanaPress : styles.bottomDiasDaSemana}
                            onPress={this.state.dom ? () => this.setState({ dom: false }) : () => this.setState({ dom: true })}
                            value={this.state.dom}>
                            <AeroText style={this.state.dom ? styles.fontDiasDaSemanaPress : styles.fontDiasDaSemana} >Dom</AeroText>
                        </TouchableHighlight>
                    </View>

                    <Form style={{ flexDirection: 'row', paddingTop: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1 }]}>
                            <Input
                                style={styles.Input}
                                placeholder='Entrada'
                                onChangeText={(entrada) => this.setState({ entrada })}
                                value={this.state.entrada}
                            />
                        </Item>
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
                    </Form>
                    <Form style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1 }]}>
                            <Input
                                style={styles.Input}
                                placeholder='Preço mínimo'
                                onChangeText={(p_min) => this.setState({ p_min })}
                                value={this.state.p_min}
                            />
                        </Item>
                        <View style={{ justifyContent: "center", height: 40, width: 35 }}>
                            <AeroText > até</AeroText>
                        </View>
                        <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1 }]}>
                            <Input
                                style={styles.Input}
                                placeholder='Preço máximo'
                                onChangeText={(p_max) => this.setState({ p_max })}
                                value={this.state.p_max}
                            />
                        </Item>
                    </Form>
                    <Form style={{ paddingTop: 20 }}>
                        <Button block
                            style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', marginTop: 20, elevation: 5 }}
                            onPress={() => console.warn([this.state.seg, this.state.ter, this.state.qua, this.state.qui, this.state.sex, this.state.sab, this.state.dom])}
                        >
                            <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Finalizar </AeroText>
                        </Button>
                    </Form>
                </Content>
            </KeyboardAvoidingView>
        );
    }
}

TeacherDisponibilidade.navigationOptions = {
    headerShown: false
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddDispo: teacher => dispatch(addDisponibilidade(teacher))
    }
}
const mapStateToProps = state => ({
    data: state.teacherRegister.data
});

export default connect(mapStateToProps, mapDispatchToProps)(TeacherDisponibilidade)

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
