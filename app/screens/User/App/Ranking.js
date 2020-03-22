import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Footer, Picker } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import { TrophyIcon, DoneIcon, StarWhiteIcon, CloseIcon, CloseSVGIcon } from '../../../components/Icon/Icon';
import { Divider } from 'react-native-elements';
import IconSVG from '../../../components/Icon/IconSVG';

class Ranking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: {
                itemValue: '',
                itemIndex: ''
            }
        }
    }
    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                    <View style={{ flexDirection: `row` }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-start" }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ paddingTop: 5 }}>
                                <IconSVG name='Back' height='25' width='25' fill='white' />
                            </TouchableOpacity>
                            <AeroText style={{ fontSize: 22, color: 'white' }}>   Ranking</AeroText>
                        </View>
                    </View>
                    <View style={{ alignSelf: "center", width: 100, height: 100, borderRadius: 200, backgroundColor: 'white', borderWidth: 2, borderColor: '#ddd' }} />
                </ImageBackground>
                <View style={styles.content}>
                    <ScrollView style={{ marginVertical: 10 }}>
                        <View style={{ alignSelf: 'center', marginBottom: 15 }}>
                            <View style={{ alignItems: 'center' }}>

                                <IconSVG name='Star' height='15' width='15' fill='#FF9800' />
                                <View style={{ flexDirection: 'row', width: 40, justifyContent: 'space-between' }}>
                                    <IconSVG name='Star' height='15' width='15' fill='#FF9800' />
                                    <IconSVG name='Star' height='15' width='15' fill='#FF9800' />
                                </View>

                            </View>
                            <AeroText style={{ color: '#FF9800', fontSize: 25 }}>Especial Pro</AeroText>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <Button style={styles.buttonList}>
                                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#FCB900', justifyContent: "center", alignItems: "center", marginLeft: -10 }} >
                                        <IconSVG name='Done' width='22' height='22' fill='white' />
                                    </View>
                                    <AeroText style={{ fontSize: 18, color: '#FCB900' }}>12</AeroText>
                                    <AeroText style={{ fontSize: 9, color: '#FCB900' }}>VITÓRIAS</AeroText>
                                </Button>
                                <Button style={styles.buttonList}>
                                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#FF9800', justifyContent: "center", alignItems: 'center', marginLeft: -10 }} >
                                        <IconSVG name="Trophy" width='22' height='22' fill='white' />
                                    </View>
                                    <AeroText style={{ fontSize: 18, color: '#FF9800' }}>2.7</AeroText>
                                    <AeroText style={{ fontSize: 9, color: '#FF9800' }}>PONTOS</AeroText>
                                </Button>
                            </View>

                            <View>
                                <Button style={styles.buttonList}>
                                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'gray', justifyContent: "center", alignItems: 'center', marginLeft: -10 }} >
                                        <IconSVG name="Close" width="22" height="22" fill="white" />
                                    </View>
                                    <AeroText style={{ fontSize: 18, color: 'gray' }}>10</AeroText>
                                    <AeroText style={{ marginHorizontal: 5, fontSize: 9, color: 'gray' }}>DERROTAS</AeroText>
                                </Button>
                                <Button style={styles.buttonList}>
                                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#F75400', justifyContent: "center", alignItems: 'center', marginLeft: -10 }} >
                                        <IconSVG name="Star" width='25' height='25' fill='white' />
                                    </View>
                                    <AeroText style={{ fontSize: 18, color: '#F75400' }}>5º</AeroText>
                                    <AeroText style={{ fontSize: 9, color: '#F75400' }}>POSIÇÃO</AeroText>
                                </Button>
                            </View>
                        </View>
                        <View style={{ paddingTop: 30 }}>
                            <AeroText style={{ color: '#F75400' }}>Tipo de Ranking</AeroText>

                            <Picker
                                selectedValue={this.state.language}
                                style={{ flex: 1, height: 50 }}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ language: itemValue })
                                }>
                                <Picker.Item label="Geral" value="geral" />
                                <Picker.Item label="Especial Pro" value="especialPro" />
                                <Picker.Item label="Especial" value="especial" />
                                <Picker.Item label="inter A" value="a" />
                                <Picker.Item label="inter B" value="b" />
                                <Picker.Item label="inter C" value="c" />
                                <Picker.Item label="Principiante" value="principiante" />
                                <Picker.Item label="Iniciante" value="iniciante" />
                            </Picker>
                            <Divider />
                        </View>
                    </ScrollView>

                </View>

                <View style={{ paddingHorizontal: 10, flex: 1, borderColor: 'gray', borderWidth: 2, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <ScrollView>

                        <View style={styles.rankStatus}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#F75400', borderRadius: 10, height: 20, width: 20, alignItems: 'center', justifyContent: 'center' }}>
                                    <IconSVG name="Star" width='10' height='10' fill='white' />
                                </View>
                                <AeroText style={{ color: '#F75400', paddingLeft: 2 }}>5º</AeroText>
                            </View>
                            <AeroText style={{ color: 'gray', paddingHorizontal: 10 }}>Nome</AeroText>
                            <View style={{ flexDirection: 'row' }}>

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
                    </ScrollView>
                </View>

            </Container>
        )
    }
}

export default Ranking

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    content: {
        padding: 10,
        alignItems: "center"
    },
    header: {
        height: 200,
        justifyContent: 'space-between',
        paddingTop: 40,
        padding: 20,
    },
    button: {
        alignSelf: 'flex-end',
        justifyContent: "center",
        marginRight: 20,
        backgroundColor: "#ffff",
        width: 55,
        borderRadius: 100,
    },
    textButton: {
        color: '#F75400'
    },
    buttonList: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginVertical: 10,
        height: 55,
        backgroundColor: "#fff",
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
    rankStatus: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 30,
        height: 40,
        justifyContent: 'space-between'
    },

});
