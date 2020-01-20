import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { Form, Button, Item, Input, Header, Content, Container, Icon } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { HeaderTennis } from '../../../components/Header'
import { TitleTennis } from '../../../components/Title'

export default function TeacherDisponibilidade(props) {
    const { navigate } = props.navigation;
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled keyboardVerticalOffset={0}>
            <HeaderTennis />
            <TitleTennis placeholder="Quase tudo pronto..." style={{ fontSize: 25 }} />
            <View style={styles.caixa} >
                <AeroText style={{ fontSize: 18, fontWeight: 'normal', alignItems: 'center', color: '#f75400' }}>
                    Por último, nos informe sua
                </AeroText>
                <AeroText style={{ fontSize: 18, fontWeight: 'normal', alignItems: 'center', color: '#f75400' }}>
                    disponibilidade e preço
                </AeroText>
            </View>
            <Content style={styles.content}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: "space-around", paddingTop:40 }}>

                    <Button style={styles.bottomDiasDaSemana}>
                        <AeroText style={styles.fontDiasDaSemana} >Seg</AeroText>
                    </Button>
                    <Button style={styles.bottomDiasDaSemana}>
                        <AeroText style={styles.fontDiasDaSemana} >Ter</AeroText>
                    </Button>
                    <Button style={styles.bottomDiasDaSemana}>
                        <AeroText style={styles.fontDiasDaSemana} >Qua</AeroText>
                    </Button>
                    <Button style={styles.bottomDiasDaSemana}>
                        <AeroText style={styles.fontDiasDaSemana} >Qui</AeroText>
                    </Button>
                    <Button style={styles.bottomDiasDaSemana}>
                        <AeroText style={styles.fontDiasDaSemana} >Sex</AeroText>
                    </Button>
                    <Button style={styles.bottomDiasDaSemana}>
                        <AeroText style={styles.fontDiasDaSemana} >Sab</AeroText>
                    </Button>
                    <Button style={styles.bottomDiasDaSemana}>
                        <AeroText style={styles.fontDiasDaSemana} >Dom</AeroText>
                    </Button>

                </View>
                <Form style={{ flexDirection: 'row', paddingTop:40 }}>
                    <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1 }]}>
                        <Input style={styles.Input} placeholder='Entrada' />
                    </Item>
                    <View style={{ justifyContent: "center", height: 40, width: 35 }}>
                        <AeroText style={{}}> até</AeroText>
                    </View>
                    <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1 }]}>
                        <Input style={styles.Input} placeholder='Saída' />
                    </Item>
                </Form>
                <Form style={{ flexDirection: 'row', justifyContent: "center" }}>
                    <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1 }]}>
                        <Input style={styles.Input} placeholder='Preço mínimo' />
                    </Item>
                    <View style={{ justifyContent: "center", height: 40, width: 35 }}>
                        <AeroText > até</AeroText>
                    </View>
                    <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex: 1 }]}>
                        <Input style={styles.Input} placeholder='Preço máximo' />
                    </Item>
                </Form>
                <Form style={{paddingTop:20}}>
                    <Button block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', marginTop: 20, elevation: 5 }}>
                        <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Finalizar </AeroText>
                    </Button>
                </Form>
            </Content>
        </KeyboardAvoidingView>
    );
}

TeacherDisponibilidade.navigationOptions = {
    headerShown: false
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff"
    },
    item: {
        elevation: 2,
        borderRadius: 10
    },
    content: {
        paddingTop: 0,
        padding: 50,
        paddingBottom: 230
    },
    Input: {
        fontSize: 15,
        fontFamily: 'Aero'
    },
    caixa: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    bottomDiasDaSemana: {
        borderRadius: 10,
        justifyContent: 'center',
        width: 30,
        height: 30,
        backgroundColor: '#f7f7f7'
    },
    fontDiasDaSemana: {
        fontSize: 10,
        fontFamily: 'Aero'

    },
});
