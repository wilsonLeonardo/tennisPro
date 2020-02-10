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
import { ScrollView } from 'react-native-gesture-handler';
import { SearchIcon, DollarIcon } from '../../../components/Icon/Icon'

class Campeonatos extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                    <View style={{ flexDirection: 'row', paddingBottom: 20 }}>

                        <Icon
                            name='arrowleft'
                            type='AntDesign'
                            style={{ justifyContent: 'space-around', color: 'white' }}
                        >
                        </Icon>
                        <AeroText style={{ marginHorizontal: 30, fontSize: 25, color: 'white', paddingRight: 30 }}>Campeonatos</AeroText>
                        <Button style={styles.button} >
                            <Icon
                                name='settings'
                                type='Octicons'
                                style={{ color: '#F75400' }}
                            />
                        </Button>
                    </View>
                    <Item style={styles.item}>
                        <SearchIcon style={styles.iconSeach} />
                        <Input style={styles.Input}>Pesquise por nomes</Input>
                    </Item>
                </ImageBackground>
                <Content style={styles.content}>
                    <ScrollView style={{ marginVertical: 10 }}>
                        <Button style={styles.buttonList}>
                            <View style={{flex: 1, justifyContent: 'space-between', flexWrap:'wrap' }}>

                                <AeroText style={styles.nameCampeonato}>Nome do Campeonato</AeroText>
                                <View style={{ flex:1}}>
                                    <Icon
                                        name='star'
                                        type='FontAwesome'
                                        style={styles.starIcon}
                                    />

                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <Icon
                                    name='dollar'
                                    type='Foundation'
                                    style={styles.dollar}
                                >
                                </Icon>
                                <View style={styles.priceView}>
                                    <AeroText style={styles.price}>149,50</AeroText>
                                </View>
                            </View>
                        </Button>

                    </ScrollView>
                </Content>
            </Container>
        )
    }
}

Campeonatos.navigationOptions = {
    headerShown: false
}

export default Campeonatos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    content: {
        padding: 40,
    },
    header: {
        alignItems: 'center',
        height: 200,
        justifyContent: 'space-between',
        paddingTop: 40,
        padding: 10,
        paddingBottom: 115

    },
    button: {
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
        padding: 10,
        flex: 1,
        marginVertical: 20,
        flexDirection: "row",
        alignItems: 'flex-start',
        width: 320,
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
    item: {
        marginTop: 20,
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
    }

});
