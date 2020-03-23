import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { Form, Button, Item, Header, Container, Content, Icon, Footer, Picker, Input } from 'native-base';
import { Divider } from 'react-native-elements';

import { AeroText } from '../../../components/StyledText';
import { ScrollView } from 'react-native-gesture-handler';
import IconSVG from '../../../components/Icon/IconSVG'

class NewCampeonatos extends Component {
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
            <Container style={styles.container}>
                <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
                    <View style={{ width: '100%' }}>
                        <Icon
                            name='arrowleft'
                            type='AntDesign'
                            style={{ paddingRight: 20, color: 'white' }}
                            onPress={()=> this.props.navigation.goBack()}
                        >
                            <AeroText style={{ fontSize: 22, color: 'white' }}>  Novo Campeonato</AeroText>
                        </Icon>
                    </View>
                </ImageBackground>

                <ScrollView>
                    <View style={styles.content}>

                        <Item >
                            <Input placeholder='Endereço' />
                        </Item>

                        <Item style={{ marginVertical: 20, marginBottom: 20 }}>
                            <Input placeholder='Nome' />
                        </Item>

                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginVertical: 10 }}>
                            <AeroText style={{ color: '#F75400', fontSize: 18, marginBottom: 10 }}>Níveis</AeroText>
                            <View style={{ backgroundColor: "#F75400", borderRadius: 30, height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
                                <IconSVG name="Add" height="15" width="15" fill="#fff" />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 10 }}>
                            <AeroText style={{ color: "#808080" }}>Especial Pro</AeroText>
                            <View style={{ borderRadius: 30, height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
                                <IconSVG name="Remove" height="15" width="15" fill="#000" />
                            </View>
                        </View>

                        <View style={{ marginVertical: 20 }}>
                            <AeroText style={{ color: '#F75400', fontSize: 18, marginBottom: 10 }}>Prêmios</AeroText>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 10 }}>
                                <AeroText style={{ color: "#808080" }}>Especial Pro</AeroText>
                                <Item regular style={styles.item}>
                                    <Input placeholder='R$' />
                                </Item>
                            </View>
                        </View>

                        <Item style={{ marginTop: 20 }}>
                            <Input placeholder='Taxa de inscrição' />
                        </Item>
                        <Button block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', marginTop: 40, elevation: 5 }}><AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Finalizar </AeroText></Button>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

export default NewCampeonatos

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
