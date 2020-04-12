import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    Alert
} from 'react-native';
import Modal from "react-native-modal";
import update from 'immutability-helper'
import HttpService from '../../../service/HttpService'
import { Form, Button, Item, Header, Container, Content, Icon, Footer, Picker, Input } from 'native-base';
import { Divider } from 'react-native-elements';
import * as clubActions from '../../../store/club/actions'

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'
import { connect } from 'react-redux'




class NewCampeonatos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:{
                niveis: [],
                name:'',
                endereco:'',
                niveis:'',
                valor_premio:'',
                taxa_inscricao:''
            },
            isModalVisible: false,
            selected: 'Especial Pro'
        }
    }
    onValueChange(value) {
        this.setState({selected: value })
      }
    handleNivel = value => {
        let niveis = [...this.state.data.niveis]

        if(niveis.indexOf(value) != -1) Alert.alert('Erro', 'Nivel já inserido')
        else {
            niveis.push(value),
            this.setState(
                update(this.state, {data:{niveis: {$set: niveis}}, isModalVisible:{$set: false}, selected: {$set: value }})
            )
        }
    }

    insertCamp = () => {
        const {data} = this.state;

        HttpService
            .insert('camp', {...data})
            .then(
                () => this.props.dispatch(clubActions.loadCamps()),
                Alert.alert('Campeonato', 'Campeonato criado com sucesso!')
            ).finally(() => this.props.navigation.goBack())
    }

    removeNivel = value => {
        let niveis = [...this.state.data.niveis]    
        niveis.splice([niveis.indexOf(value)], 1)
        this.setState(
            update(this.state, {
                data: {
                    niveis: { $set: niveis }
                }
            })
        );
    }
    handleChangeValue = name => value =>
        this.setState(
            update(this.state, {
                data: {
                    [name]: { $set: value }
                }
            })
        );

    render() {
        const deviceWidth = Dimensions.get("window").width;
        const deviceHeight = Dimensions.get("window").height
        const {niveis} = this.state.data;
        return (
            <Container>
                <KeyboardAvoidingView
                    style={styles.container} behavior="padding" enabled>
                    <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                        <View style={{ width: '100%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ paddingTop: 5 }}>
                                    <IconSVG name='Back' height='25' width='25' fill='white' />
                                </TouchableOpacity>
                                <AeroText style={{ fontSize: 22, color: 'white' }}>   Novo Campeonato</AeroText>
                            </View>
                        </View>
                    </ImageBackground>

                    <Content padder>

                        <Form>

                            <Item picker >
                                <Input placeholder='Endereço completo' style={{fontFamily:'Aero'}} 
                                    onChangeText={this.handleChangeValue(
                                        "endereco"
                                    ).bind(this)}
                                />
                            </Item>

                            <Item picker style={{ marginVertical: 20, marginBottom: 20 }}>
                                <Input placeholder='Nome do campeonato' style={{fontFamily:'Aero'}} 
                                    onChangeText={this.handleChangeValue(
                                        "name"
                                    ).bind(this)}
                                />
                            </Item>

                            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginVertical: 10 }}>
                                <AeroText style={{ color: '#F75400', fontSize: 18, marginBottom: 10 }}>Níveis</AeroText>
                                <TouchableOpacity onPress={() => this.setState({isModalVisible: true})}>
                                    <View style={{ backgroundColor: "#F75400", borderRadius: 30, height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <IconSVG name="Add" height="15" width="15" fill="#fff"/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {niveis.length == 0 ? 
                                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 10 }}>
                                    <AeroText style={{ color: "#808080" }}>Adicione os niveis do campeonato</AeroText>
                                </View> :
                        
                                niveis.map(nivel => {
                                    return(
                                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 10 }}>
                                            <AeroText style={{ color: "#808080" }}>{nivel}</AeroText>
                                            <TouchableOpacity onPress={() => this.removeNivel(nivel)}>
                                                <View style={{ borderRadius: 30, height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
                                                    <IconSVG name="Remove" height="15" width="15" fill="#000" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                            })}
                            

                            <View style={{ marginVertical: 20 }}>
                                <AeroText style={{ color: '#F75400', fontSize: 18, marginBottom: 10 }}>Prêmio</AeroText>
                                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 10 }}>
                                    <AeroText style={{ color: "#808080" }}>Valor do prêmio:</AeroText>
                                    <Item regular style={styles.item}>
                                        <Input placeholder='R$' 
                                            onChangeText={this.handleChangeValue(
                                                "valor_premio"
                                            ).bind(this)}
                                        />
                                    </Item>
                                </View>
                            </View>

                            <Item picker style={{ marginTop: 20 }}>
                                <Input placeholder='Taxa de inscrição' style={{ fontFamily: 'Aero' }} 
                                    onChangeText={this.handleChangeValue(
                                        "taxa_inscricao"
                                    ).bind(this)}
                                />
                            </Item>
                            <Button block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', marginTop: 40, elevation: 5 }}
                                onPress={this.insertCamp.bind(this)}
                            ><AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Finalizar </AeroText></Button>
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
                            <AeroText style={{ color: '#F75400', fontSize: 18 }}>Escolha os niveis</AeroText>

                            <Item picker>
                                <Picker
                                    note
                                    mode="dropdown"
                                    selectedValue={this.state.selected}
                                    style={{ flex: 1, height: 50 }}
                                    style={{color:'black'}}
                                    onValueChange={this.onValueChange.bind(this)}

                                >
                                    <Picker.Item label="Especial Pro" value={'Especial Pro'} />
                                    <Picker.Item label="Especial" value={'Especial'} />
                                    <Picker.Item label="Inter A" value={'Inter A'} />
                                    <Picker.Item label="Inter B" value={'Inter B'} />
                                    <Picker.Item label="Inter C" value={'Inter C'} />
                                    <Picker.Item label="Principiante" value={'Principiante'} />
                                    <Picker.Item label="Iniciante" value={'Iniciante'} />
                                </Picker>
                                <Divider style={{ backgroundColor: '#ddd', height: 1 }} />
                            </Item>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Button style={{ backgroundColor: '#ddd', width: 120, justifyContent: 'center', borderRadius: 10 }} 
                                    onPress={() =>this.setState({
                                        isModalVisible: !this.state.isModalVisible, selected:'Especial Pro'})} >
                                    <AeroText style={{ color: 'gray' }} >Cancelar</AeroText>
                                </Button>
                                <Button style={{ backgroundColor: '#F75400', width: 120, justifyContent: 'center', borderRadius: 10 }} 
                                    onPress={() => this.handleNivel(this.state.selected)}
                                >
                                    <AeroText style={{ color: 'white' }} >Confirmar</AeroText>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </Container>
        )
    }
}

export default connect(() => ({}))(NewCampeonatos) 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
        padding: 30,
    },
    header: {
        alignItems: 'flex-start',
        height: 200,
        justifyContent: 'space-between',
        paddingTop: 40,
        padding: 10,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        width: 90,
        height: 30,
        borderWidth: 2,
        borderRightWidth: 4,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 4,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 9,
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
