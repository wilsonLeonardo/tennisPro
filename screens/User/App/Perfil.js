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

class Perfil extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            name='arrowleft'
                            type='AntDesign'
                            style={{ paddingRight: 20,color: 'white' }}
                        />
                        <AeroText style={{ fontSize: 20, color: 'white' }}>Perfil</AeroText>
                    </View>
                    <View style={{ alignSelf: "center", width: 130, height: 130, borderRadius: 200, backgroundColor: 'white', borderWidth: 2, borderColor: '#ddd' }} />
                </ImageBackground>
                <View style={styles.content}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                        <Button style={styles.buttonList}>
                            <AeroText style={{ fontSize: 18, color: '#607d8b' }}>Pessoal</AeroText>
                        </Button>
                        <Button style={styles.buttonList}>
                            <AeroText style={{ fontSize: 18, color: '#607d8b' }}>Clube</AeroText>
                        </Button>
                    </View>
                </View>
            </Container>
        )
    }
}

export default Perfil

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    content: {
        padding: 30,
        alignItems: "center"
    },
    header: {
        alignItems: 'flex-start',
        height: 200,
        justifyContent: 'space-between',
        paddingTop: 40,
        padding: 10,
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
