import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Footer } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { HeaderTennis } from '../../../components/HomeHeader'
import { SearchIcon, KeyIcon } from '../../../components/Icon/Icon'
import { ScrollView } from 'react-native-gesture-handler';

class Ranking extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                    <Icon
                        name='arrowleft'
                        type='AntDesign'
                        style={{ color: 'white' }}
                    />
                    <View style={{ alignSelf: "center", width: 100, height: 100, borderRadius: 200, backgroundColor: 'white', borderWidth: 2, borderColor: '#ddd' }} />
                </ImageBackground>
                <Content style={styles.content}>
                    <ScrollView style={{ marginVertical: 10 }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>

                            <View style={{}}>

                                <Button style={styles.buttonList}>
                                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#FCB900', justifyContent: "center" }} >
                                        <Icon
                                            name='check'
                                            type='FontAwesome'
                                            style={{ color: 'white', width: 60 }}
                                        />
                                    </View>
                                    <AeroText style={{ fontSize: 18, color: '#FCB900' }}>12</AeroText>
                                    <AeroText style={{ fontSize: 9, color: '#FCB900' }}>VITÓRIAS</AeroText>
                                </Button>
                                <Button style={styles.buttonList}>
                                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#FF9800', justifyContent: "center" }} >
                                        <Icon
                                            name='trophy'
                                            type='FontAwesome'
                                            style={{ color: 'white', width: 60 }}
                                        />
                                    </View>
                                    <AeroText style={{ fontSize: 18, color: '#FF9800' }}>2.7</AeroText>
                                    <AeroText style={{ fontSize: 9, color: '#FF9800' }}>PONTOS</AeroText>
                                </Button>
                            </View>

                            <View>

                                <Button style={styles.buttonList}>
                                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#545250', justifyContent: "center" }} >
                                        <Icon
                                            name='close'
                                            type='FontAwesome'
                                            style={{ color: 'white', width: 60 }}
                                        />
                                    </View>
                                    <AeroText style={{ fontSize: 18, color: '#545250' }}>10</AeroText>
                                    <AeroText style={{ marginHorizontal: 5, fontSize: 9, color: '#545250' }}>DERROTAS</AeroText>
                                </Button>
                                <Button style={styles.buttonList}>
                                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#F75400', justifyContent: "center" }} >
                                        <Icon
                                            name='star'
                                            type='FontAwesome'
                                            style={{ color: 'white', width: 60 }}
                                        />
                                    </View>
                                    <AeroText style={{ fontSize: 18, color: '#F75400' }}>5º</AeroText>
                                    <AeroText style={{ fontSize: 9, color: '#F75400' }}>POSIÇÃO</AeroText>
                                </Button>
                            </View>
                        </View>
                        {/* TIPO DE RANKING */}
                        <View>
                            <AeroText>Tipo de Ranking</AeroText>
                            
                        </View>
                    </ScrollView>
                </Content>
            </Container>
        )
    }
}

Ranking.navigationOptions = {
    headerShown: false
}

export default Ranking

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    content: {
        padding: 40,
    },
    header: {
        alignItems: 'flex-start',
        height: 200,
        justifyContent: 'space-between',
        paddingTop: 40,
        padding: 10,
        paddingBottom: 115

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
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginVertical: 10,
        width: 150,
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

});
