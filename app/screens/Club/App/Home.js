import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    ActivityIndicator,
    Alert
} from 'react-native';
import { Button, Container, Item, Input,Icon, Picker, Fab } from 'native-base';
import Modal from "react-native-modal";
import { connect } from 'react-redux'
import * as clubActions from '../../../store/club/actions'
import HttpService from "../../../service/HttpService";

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'
import {setCompletedIntro, isCompletedIntro} from '../../../util/IntroUtil'

class HomeClub extends Component {
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
            },
            isModalVisible: false
        }
    }
    
    componentDidMount(){
        isCompletedIntro().then(isCompleted => 
            !isCompleted ? this.setState({isModalVisible: true}) : null)

        this.props.dispatch(clubActions.loadCamps());
    }

    toggleModal = () => {
        setCompletedIntro(true).then(() => this.setState({ isModalVisible: false }));
    };
    makeDone = (id) => {
        Alert.alert('Campeonato', 'Você deseja encerrar esse campeonato?!',[
            {text: 'Sim', onPress: () => {
                HttpService
                    .patch(
                        'camp/{id}/done',
                        { id }
                    ).then(
                        () => this.props.dispatch(clubActions.loadCamps()),
                        Alert.alert(
                            "Campeonato",
                            "Campeonato encerrado!"
                        ),
                        
                    )
            }},
            {text: 'Cancelar', style:'cancel'},
        ])
    }

    render() {
        const deviceWidth = Dimensions.get("window").width;
        const deviceHeight = Dimensions.get("window").height
        const {progress, loading, done} = this.props;
        console.log(done);

        return (
            <Container>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.openDrawer()
                        }
                    >
                        <IconSVG name='Menu' height='22' width='22' fill='#F75400' />
                    </TouchableOpacity>
                    <ImageBackground
                        source={require('../../../assets/images/Conta.png')} style={styles.imgUser}
                    />
                </View>
                <ScrollView style={{ flex: 1 }}>

                    <View style={styles.content}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', width: '100%' }}>
                            <AeroText style={{ fontSize: 20, color: '#F75400' }}>Campeonatos</AeroText>
                            <Button style={styles.button} 
                                onPress={() => this.props.navigation.navigate('newGame')}
                                >
                                <IconSVG name="Add" height="15" width="15" fill="white" />
                                <AeroText style={{ color: 'white', marginLeft: 5 }} >Criar</AeroText>
                            </Button>
                        </View>

                        <View style={{ paddingVertical: 20 }}>
                        {loading ? <ActivityIndicator color="#F75400" /> :
                        progress && progress.length == 0 ? 
                            <AeroText style={{fontSize:15}} >Você não possue campeonatos em andamento</AeroText> 
                            :
                            progress.map(camp => {
                                console.log(camp);
                                return (

                                        <TouchableOpacity style={styles.buttomCampeonatos}
                                            onPress={() => this.makeDone(camp.id)}
                                        >
                                            <ImageBackground source={require('../../../assets/images/campeonatoBack.png')} style={{ flex: 1, paddingHorizontal: 10 }}>
                                                <View style={{ justifyContent: 'space-around', flex: 1 }} >

                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <View style={{}}>
                                                            <AeroText style={styles.nameCampeonato}>{camp.name}</AeroText>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                                                            <View style={styles.andamento}>
                                                                <AeroText style={styles.andamentoTxt}>Andamento</AeroText>
                                                            </View>
                                                        </View>
                                                    </View>

                                                    <View style={{ flexDirection: "row", justifyContent: "space-around", width: 200 }}>
                                                        <View style={{ flexDirection: "row", flex:2}}>
                                                            <IconSVG name='Star' width='10' height='10' fill='#F75400' />
                                                            <AeroText style={{ fontSize: 8, color: '#808080' }}>{camp.niveis}</AeroText>
                                                        </View>
                                                        <View style={{ flexDirection: "row", flex:2}}>
                                                            <IconSVG name='Maps' width='10' height='10' fill='#F75400' />
                                                            <AeroText style={{ fontSize: 8, color: '#808080' }}>{camp.endereco}</AeroText>
                                                        </View>
                                                    </View>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                )
                            })
                        
                    }

                    </View>

                        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', width: '100%' }}>
                            <AeroText style={{ fontSize: 20, color: '#F75400' }}>Concluídos</AeroText>
                        </View>

                        <View style={{ paddingVertical: 20 }}>
                        {loading ? <ActivityIndicator color="#F75400" /> :
                        done && done.length == 0 ? 
                            <AeroText style={{fontSize:15}} >Você não possue campeonatos concluídos</AeroText> 
                            :
                            done.map(camp => {
                                console.log(camp);
                                return (

                                        <View style={styles.buttomCampeonatos}>
                                            <ImageBackground source={require('../../../assets/images/campeonatoBack.png')} style={{ flex: 1, paddingHorizontal: 10 }}>
                                                <View style={{ justifyContent: 'space-around', flex: 1 }} >

                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <View style={{}}>
                                                            <AeroText style={styles.nameCampeonato}>{camp.name}</AeroText>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                                                    <View style={styles.inscrito}>
                                                            <AeroText style={styles.inscritoTxt}>Concluído</AeroText>
                                                        </View>
                                                    </View>
                                                    </View>

                                                    <View style={{ flexDirection: "row", justifyContent: "space-around", width: 200 }}>
                                                        <View style={{ flexDirection: "row", flex:2}}>
                                                            <IconSVG name='Star' width='10' height='10' fill='#F75400' />
                                                            <AeroText style={{ fontSize: 8, color: '#808080' }}>{camp.niveis}</AeroText>
                                                        </View>
                                                        <View style={{ flexDirection: "row", flex:2}}>
                                                            <IconSVG name='Maps' width='10' height='10' fill='#F75400' />
                                                            <AeroText style={{ fontSize: 8, color: '#808080' }}>{camp.endereco}</AeroText>
                                                        </View>
                                                    </View>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                )
                            })}
                        </View>

                    </View>
                </ScrollView>
                <Modal
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={() => this.setState({isModalVisible: false})}
                    animationInTiming={300}
                    animationIn="slideInLeft"
                    animationOut="slideOutRight"
                    coverScreen={true}
                    deviceWidth={deviceWidth}
                    deviceHeight={deviceHeight}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 250, width: '95%', backgroundColor: 'white', padding: 20, justifyContent: 'space-around', borderRadius: 10 }}>
                            <AeroText style={{ color: '#F75400', fontSize: 18 }}>Quem te indicou o App?</AeroText>

                            <Item style={{ backgroundColor: '#ddd', borderRadius: 10, paddingHorizontal: 10 }} >
                                <Input placeholder='Nome' />
                                <IconSVG name="AccountForm" height="20" width="20" fill="#F75400" />
                            </Item>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Button style={{ backgroundColor: '#ddd', width: 120, justifyContent: 'center', borderRadius: 10 }} onPress={this.toggleModal} >
                                    <AeroText style={{ color: 'gray' }} >Cancelar</AeroText>
                                </Button>
                                <Button style={{ backgroundColor: '#F75400', width: 120, justifyContent: 'center', borderRadius: 10 }} onPress={this.toggleModal} >
                                    <AeroText style={{ color: 'white' }} >Confirmar</AeroText>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>

            </Container >

        )
    }
}

HomeClub.navigationOptions = {
    headerShown: false
}
const mapStateToProps = state => ({
    progress: state.club.progressCamp,
    loading: state.club.loading,
    done: state.club.doneCamp
})

export default connect(mapStateToProps, null)(HomeClub)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    content: {
        padding: 30,
        justifyContent: 'space-around',
        flex: 1
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
        marginBottom: 15,
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
    andamento: {
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

