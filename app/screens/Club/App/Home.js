import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { Button, Container, Icon, Picker, Fab } from 'native-base';
import { Input, Divider } from 'react-native-elements';

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: {
                pessoal: false,
                clube: false,
            },
            language: {
                itemValue: '',
                itemIndex: ''
            }
        }
    }

    render() {
        return (
            <Container>
                <View style={styles.header}>
                    <TouchableOpacity
                    >
                        <IconSVG name='Menu' height='22' width='22' fill='#F75400' />
                    </TouchableOpacity>
                    <ImageBackground
                        source={require('../../../assets/images/Conta.png')} style={styles.imgUser}
                    />
                </View>
                <View style={styles.content}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', width: '100%' }}>
                        <AeroText style={{ fontSize: 20, color: '#F75400' }}>Campeonatos</AeroText>
                        <Button style={styles.button} >
                            <IconSVG name="Add" height="15" width="15" fill="white" />
                            <AeroText style={{ color: 'white', marginLeft: 5 }} >Criar</AeroText>
                        </Button>
                    </View>
                    <View style={styles.buttomCampeonatos}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{}}>
                                <AeroText style={styles.nameCampeonato}>Nome do Campeonato</AeroText>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                                <View style={styles.andamento}>
                                   
                                    <AeroText style={styles.andamentoTxt}>Andamento</AeroText>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-around", width: 200 }}>
                            <IconSVG name='Star' width='10' height='10' fill='#F75400' />
                            <AeroText style={{ fontSize: 8, color: '#808080' }}>Especial Pro</AeroText>
                            <IconSVG name='Maps' width='10' height='10' fill='#F75400' />
                            <AeroText style={{ fontSize: 8, color: '#808080' }}>Avenida Raimundo</AeroText>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', width: '100%' }}>
                        <AeroText style={{ fontSize: 20, color: '#F75400' }}>Concluídos</AeroText>
                    </View>
                    <View style={styles.buttomCampeonatos}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{}}>
                                <AeroText style={styles.nameCampeonato}>Nome do Campeonato</AeroText>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                                <View style={styles.inscrito}>
                                    <View style={{ paddingRight: 5, justifyContent: "center", alignItems: 'center' }}>
                                        <IconSVG name='Done' width='10' height='10' fill='white' />
                                    </View>
                                    <AeroText style={styles.inscritoTxt}>Inscritos</AeroText>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-around", width: 200 }}>
                            <IconSVG name='Star' width='10' height='10' fill='#F75400' />
                            <AeroText style={{ fontSize: 8, color: '#808080' }}>Especial Pro</AeroText>
                            <IconSVG name='Maps' width='10' height='10' fill='#F75400' />
                            <AeroText style={{ fontSize: 8, color: '#808080' }}>Avenida Raimundo</AeroText>
                        </View>
                    </View>
                </View>

            </Container >

        )
    }
}

Home.navigationOptions = {
    headerShown: false
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    content: {
        padding: 30,
        justifyContent: 'space-around',
        flex:1
    },
    header: {
        flexDirection: 'row',
        height: 120,
        justifyContent: 'space-between',
        paddingTop: 40,
        padding: 20
    },
    imgUser: {
        width: 70,
        height: 70,
    },
    button: {
        alignSelf: 'flex-end',
        justifyContent: "center",
        marginRight: 20,
        backgroundColor: "#F75400",
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
    buttomCampeonatos: {
        justifyContent: "space-around",
        paddingHorizontal: 10,
        height: 110,
        backgroundColor: "#ffff",
        borderWidth: 2,
        borderRightWidth: 4,
        borderRadius: 20,
        borderColor: '#ddd',
        borderBottomWidth: 4,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 9,
    },
    inscrito: {
        flexDirection: 'row',
        backgroundColor: 'green',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: 17
    },
    inscritoTxt: {
        color: 'white',
        fontSize: 10,
    },
    andamento:{
        flexDirection: 'row',
        backgroundColor: 'black',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: 17
    },
    andamentoTxt: {
        color: 'white',
        fontSize: 10,
    },
    nameCampeonato: {
        fontSize: 13,
        color: '#808080'
    },
});

