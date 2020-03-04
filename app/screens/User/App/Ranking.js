import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Modal,
    Alert
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
                    <Icon
                        name='arrowleft'
                        type='AntDesign'
                        style={{ color: 'white' }}
                    >
                        <AeroText style={{ fontSize: 22, color: 'white' }}>  Ranking</AeroText>
                    </Icon>
                    <View style={{ alignSelf: "center", width: 100, height: 100, borderRadius: 200, backgroundColor: 'white', borderWidth: 2, borderColor: '#ddd' }} />
                </ImageBackground>
                <View style={styles.content}>
                    <ScrollView style={{ marginVertical: 10 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <AeroText style={{ color: 'gold', fontSize: 25 }}>Especial Pro</AeroText>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <Button style={styles.buttonList}>
                                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#FCB900', justifyContent: "center", alignItems: "center" }} >
                                        <DoneIcon />
                                    </View>
                                    <AeroText style={{ fontSize: 18, color: '#FCB900' }}>12</AeroText>
                                    <AeroText style={{ fontSize: 9, color: '#FCB900' }}>VITÓRIAS</AeroText>
                                </Button>
                                <Button style={styles.buttonList}>
                                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#FF9800', justifyContent: "center", alignItems: 'center' }} >
                                        <TrophyIcon />
                                    </View>
                                    <AeroText style={{ fontSize: 18, color: '#FF9800' }}>2.7</AeroText>
                                    <AeroText style={{ fontSize: 9, color: '#FF9800' }}>PONTOS</AeroText>
                                </Button>
                            </View>

                            <View>
                                <Button style={styles.buttonList}>
                                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'gray', justifyContent: "center", alignItems: 'center' }} >
                                        <IconSVG name="Close" width="22" height="22" fill="white"/>
                                    </View>
                                    <AeroText style={{ fontSize: 18, color: '#545250' }}>10</AeroText>
                                    <AeroText style={{ marginHorizontal: 5, fontSize: 9, color: '#545250' }}>DERROTAS</AeroText>
                                </Button>
                                <Button style={styles.buttonList}>
                                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#F75400', justifyContent: "center", alignItems: 'center' }} >
                                        <StarWhiteIcon />
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
                        <View style={{ flex: 1 }}>

                            <View style={styles.rankStatus}>
                                <View style={{ backgroundColor: '#F75400', borderRadius: 10, height: 20, width: 20, alignItems: 'center', justifyContent: 'center' }}>
                                    <StarWhiteIcon style={{ height: 10, width: 10 }} />
                                </View>
                                <AeroText style={{ color: '#F75400' }}>5º</AeroText>
                                <AeroText style={{ color: 'gray', paddingHorizontal: 10 }}>Especial Pro</AeroText>
                                <View style={{ backgroundColor: '#FCB900', borderRadius: 10, height: 20, width: 20, alignItems: 'center', justifyContent: 'center' }}>
                                    <DoneIcon style={{ height: 10, width: 10 }} />
                                </View>
                                <AeroText style={{ color: '#FCB900' }}>12</AeroText>
                                <View style={{ backgroundColor: '#545250', borderRadius: 10, height: 20, width: 20, alignItems: 'center', justifyContent: 'center' }}>
                                    <DoneIcon style={{ height: 10, width: 10 }} />
                                </View>
                                <AeroText style={{ color: '#545250' }}>10</AeroText>
                                <View style={{ backgroundColor: '#FF9800', borderRadius: 10, height: 20, width: 20, alignItems: 'center', justifyContent: 'center' }}>
                                    <TrophyIcon style={{ height: 10, width: 10 }} />
                                </View>
                                <AeroText style={{ color: '#FF9800' }}>2,7</AeroText>
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
        height: 60,
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
