import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Footer, Fab } from 'native-base';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

import { AeroText } from '../../../components/StyledText';
import { MenuIcon, ChatIcon, StarWhiteIcon, CheckIcon, DoneIcon, TrophyIcon, DollarIcon, LocationIcon, StarIcon } from '../../../components/Icon/Icon'
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        };
    }
    render() {
        return (
            <Container>
                <View style={styles.header}>
                    <MenuIcon />

                    <View style={styles.imgUser} />
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
                                            <StarWhiteIcon style={{ height: 10, width: 10 }} />
                                        </View>
                                        <AeroText style={{ color: '#F75400', paddingLeft: 2 }}>5º</AeroText>
                                    </View>
                                    <AeroText style={{ color: 'gray', paddingHorizontal: 10 }}>Especial Pro</AeroText>
                                    <View style={{ flexDirection: 'row', paddingRight: 5 }}>
                                        <View style={{ backgroundColor: '#FCB900', borderRadius: 10, height: 20, width: 20, alignItems: 'center', justifyContent: 'center' }}>
                                            <DoneIcon style={{ height: 10, width: 10 }} />
                                        </View>
                                        <AeroText style={{ color: '#FCB900', paddingLeft: 2 }}>12</AeroText>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingRight: 5 }}>
                                        <View style={{ backgroundColor: '#545250', borderRadius: 10, height: 20, width: 20, alignItems: 'center', justifyContent: 'center' }}>
                                            <DoneIcon style={{ height: 10, width: 10 }} />
                                        </View>
                                        <AeroText style={{ color: '#545250', paddingLeft: 2 }}>10</AeroText>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingRight: 5, }}>
                                        <View style={{ backgroundColor: '#FF9800', borderRadius: 10, height: 20, width: 20, alignItems: 'center', justifyContent: 'center' }}>
                                            <TrophyIcon style={{ height: 10, width: 10 }} />
                                        </View>
                                        <AeroText style={{ color: '#FF9800', paddingLeft: 2 }}>2,7</AeroText>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <Divider style={{ backgroundColor: '#ddd', marginVertical: 20 }} />
                        <AeroText style={{ color: '#F75400', alignSelf: 'flex-start' }}>Estatísticas</AeroText>

                        <ProgressChart

                            data={{
                                data: [0.73]
                            }}
                            width={Dimensions.get("window").width}
                            height={220}
                            chartConfig={{
                                backgroundGradientFrom: "white",
                                backgroundGradientTo: "white",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 0) => `rgba(247, 84, 0, ${opacity})`,
                                labelColor: (opacity = 0) => `rgba(128, 129, 130, ${opacity})`,

                                propsForDots: {
                                    r: "3",
                                    strokeWidth: "20",
                                    stroke: "#F75400",
                                }
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                            hideLegend={false}
                        />

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

                        <View style={styles.buttomCampeonatos}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{}}>
                                    <AeroText style={styles.nameCampeonato}>Nome do Campeonato</AeroText>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                                    <DollarIcon style={{ height: 10, width: 10, marginRight: 7 }} />
                                    <View style={styles.priceView}>
                                        <AeroText style={styles.price}>149,50</AeroText>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-around", width: 200 }}>
                                <StarIcon style={{ width: 10, height: 10 }} />
                                <AeroText style={{ fontSize: 8 }}>Especial Pro</AeroText>
                                <LocationIcon style={{ width: 10, height: 10 }} />
                                <AeroText style={{ fontSize: 8 }}>Avenida Raimundo</AeroText>
                            </View>
                        </View>
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
                        <ChatIcon style={{ width: 30, height: 30 }} />
                    </Fab>
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
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        paddingTop: 40,
        padding: 20
    },
    imgUser: {
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: 'red'
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
    },
    dollar: {
        color: '#F75400',
        width: 10,
        height: 20,
        marginLeft: 10,
    },
    priceView: {
        backgroundColor: '#F75400',
        borderRadius: 5,
        alignItems: 'center',
        width: 45,
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

});

