import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    Image,
    TouchableHighlight
} from 'react-native';
import { Button, Container, Fab, Item, Input } from 'native-base';
import {
    LineChart,
    ProgressChart,
} from "react-native-chart-kit";
import { getUser } from "../../../service/AuthService";
import Modal from "react-native-modal";

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';
import IconSVG from '../../../components/Icon/IconSVG';
import ProgressCircle from 'react-native-progress-circle'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            isModalVisible: true
        };
    }
    componentDidMount() {
        getUser().then(user => {
            this.setState({ user: user }
            );
        });
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        const deviceWidth = Dimensions.get("window").width;
        const deviceHeight = Dimensions.get("window").height
        return (
            <Container>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={
                            () => this.props.navigation.openDrawer()
                        }
                    >
                        <IconSVG name='Menu' height='22' width='22' fill='#F75400' />

                    </TouchableOpacity>
                    <ImageBackground
                        source={require('../../../assets/images/Conta.png')} style={styles.imgUser}
                    />
                </View>
                <ScrollView>
                    <View style={styles.content}>
                        <AeroText style={{ color: '#F75400', paddingBottom: 30, fontSize: 15 }}>Próximos Jogos</AeroText>
                        <View style={{ paddingHorizontal: 20 }}>
                            <Button style={styles.buttomJogos}>
                                <View style={{ borderRadius: 100, backgroundColor: 'red', height: 40, width: 40, marginLeft: -15 }} />
                                <AeroText style={{ padding: 10 }}>Nome</AeroText>

                                <AeroText style={{ padding: 10, fontSize: 20, color: '#F75400' }}>VS</AeroText>
                                <AeroText style={{ padding: 10 }}>Nome</AeroText>
                                <View style={{ borderRadius: 100, backgroundColor: 'gray', height: 40, width: 40, marginRight: -15 }} />
                            </Button>
                        </View>


                        <Divider style={{ backgroundColor: '#ddd', marginVertical: 20 }} />

                        <View style={styles.buttomRank}>
                            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                                <View style={{}}>
                                    <AeroText style={{ color: '#F75400' }}>Seu Ranking</AeroText>
                                </View>

                                <View style={styles.rankStatus}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ backgroundColor: '#F75400', borderRadius: 10, height: 20, width: 20, alignItems: 'center', justifyContent: 'center' }}>
                                            <IconSVG name="Star" width='10' height='10' fill='white' />
                                        </View>
                                        <AeroText style={{ color: '#F75400', paddingLeft: 2 }}>5º</AeroText>
                                    </View>
                                    <AeroText style={{ color: 'gray', paddingHorizontal: 10 }}>Especial Pro</AeroText>
                                    <View style={{ flexDirection: "row" }}>

                                        <View style={{ flexDirection: 'row', paddingRight: 5 }}>
                                            <View style={{ backgroundColor: '#FCB900', borderRadius: 10, height: 20, width: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                <IconSVG name="Done" width='11' height='11' fill='white' />
                                            </View>
                                            <AeroText style={{ color: '#FCB900', paddingLeft: 2 }}>12</AeroText>
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingRight: 5 }}>
                                            <View style={{ backgroundColor: '#545250', borderRadius: 10, height: 20, width: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                <IconSVG name="Close" width='10' height='10' fill='white' />
                                            </View>
                                            <AeroText style={{ color: '#545250', paddingLeft: 2 }}>10</AeroText>
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingRight: 5, }}>
                                            <View style={{ backgroundColor: '#FF9800', borderRadius: 10, height: 20, width: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                <IconSVG name="Trophy" width='11' height='11' fill='white' />
                                            </View>
                                            <AeroText style={{ color: '#FF9800', paddingLeft: 2 }}>2,7</AeroText>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <Divider style={{ backgroundColor: '#ddd', marginVertical: 20 }} />
                        <AeroText style={{ color: '#F75400', alignSelf: 'flex-start' }}>Estatísticas</AeroText>

                        <View style={{ height:200, flex:1 ,flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>

                            <ProgressCircle
                                percent={73}
                                radius={50}
                                borderWidth={15}
                                color="#F75400"
                                shadowColor="#ddd"
                                bgColor="#fff"
                            >
                            </ProgressCircle>
                            <View>
                                <AeroText style={{ fontSize: 28, color: "#F75400" }}>73%</AeroText>
                                <AeroText style={{ fontSize: 13, color: "#F75400" }}>De Vitórias</AeroText>
                            </View>

                            <View>
                                <AeroText style={{ fontSize: 28, color: "#bbb" }}>27%</AeroText>
                                <AeroText style={{ fontSize: 13, color: "#bbb" }}>De Derrotas</AeroText>
                            </View>

                            <View>
                                <AeroText style={{ fontSize: 28, color: "#F75400" }}>{'216'}</AeroText>
                                <AeroText style={{ fontSize: 13, color: "#F75400" }}>Jogos</AeroText>
                            </View>

                        </View>

                        <LineChart
                            data={{
                                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                                datasets: [
                                    {
                                        data: [
                                            5,
                                            10,
                                            15,
                                            20,
                                            25,
                                            30
                                        ]
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width}
                            height={220}
                            chartConfig={{
                                backgroundGradientFrom: "white",
                                backgroundGradientTo: "white",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(247, 84, 0, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(128, 129, 130, ${opacity})`,
                                strokeWidth: "10",
                                stroke: "#F75400",
                                propsForDots: {
                                    r: "0"
                                }
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                        <Divider style={{ backgroundColor: '#ddd', marginVertical: 20 }} />

                        <AeroText style={{ color: '#F75400', alignSelf: 'flex-start', paddingBottom: 30 }}>Seus campeonatos</AeroText>
                        <TouchableHighlight style={styles.buttomCampeonatos}>
                            <ImageBackground source={require('../../../assets/images/campeonatoBack.png')} style={{ flex: 1, paddingHorizontal: 10 }}>
                                <View style={{ justifyContent: 'space-around', flex: 1 }} >

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{}}>
                                            <AeroText style={styles.nameCampeonato}>Nome do Campeonato</AeroText>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                                            <View style={styles.priceView}>
                                                <View style={{ paddingRight: 5, justifyContent: "center", alignItems: 'center' }}>
                                                    <IconSVG name='Done' width='10' height='10' fill='white' />
                                                </View>
                                                <AeroText style={styles.price}>Inscritos</AeroText>
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
                            </ImageBackground>

                        </TouchableHighlight>
                    </View>
                </ScrollView>
                <View style={{ flex: 1 }}>

                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: '#F75400' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <IconSVG name='Chat' width='30' height='30' fill='white' />
                    </Fab>
                </View>
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
        padding: 20,
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
        justifyContent: "center",
        backgroundColor: "#ffff",
        width: 55,
        borderRadius: 100,
    },
    textButton: {
        color: '#F75400'
    },
    buttomJogos: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        height: 60,
        backgroundColor: "#ffff",
        borderWidth: 2,
        borderRightWidth: 4,
        borderRadius: 50,
        borderColor: '#ddd',
        borderBottomWidth: 4,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 9,
    },
    buttomRank: {
        padding: 20,
        paddingHorizontal: 10,
        height: 130,
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
    rankStatus: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#ddd',
        borderRadius: 30,
        height: 30,
        justifyContent: 'space-between'
    },
    nameCampeonato: {
        fontSize: 13,
        color: '#808080'
    },
    dollar: {
        color: '#F75400',
        width: 10,
        height: 20,
        marginLeft: 10,
    },
    priceView: {
        flexDirection: 'row',
        backgroundColor: 'green',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: 17
    },
    price: {
        color: 'white',
        fontSize: 10,
    },
    starIcon: {
        color: '#F75400',
    },
    buttomCampeonatos: {
        justifyContent: "space-around",
        flex: 1,
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

});

