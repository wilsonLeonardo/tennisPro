import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView
} from 'react-native';
import { Container, Form, Item, Input, Button, Content } from 'native-base';
import { connect } from "react-redux";

import { AeroText } from '../components/StyledText';
import { HeaderTennis } from '../components/Header'
import { TitleTennis } from '../components/Title'

export default function TipoConta(props) {
    const { navigate } = props.navigation;
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled keyboardVerticalOffset={0}>
            <HeaderTennis />
            <TitleTennis placeholder='Tipo de Conta' Icon="Person" />
            <Content style={styles.content}>
                <Form style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{ elevation: 5 }} onPress={() => navigate('userNivel')}>
                        <Image
                            source={
                                require('../assets/images/imgPraticante.png')
                            }
                            style={styles.modeloimg2}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ elevation: 5 }} onPress={() => navigate('userNivelProf')}>
                        <Image
                            source={
                                require('../assets/images/imgProfessor.png')
                            }
                            style={styles.modeloimg2}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ elevation: 5 }} onPress={() => navigate('clubeData')}>
                        <Image
                            source={
                                require('../assets/images/imgClube.png')
                            }
                            style={styles.modeloimg2}
                        />
                    </TouchableOpacity>
                </Form>
            </Content>
        </KeyboardAvoidingView>
    );
}

TipoConta.navigationOptions = {
    headerShown: false
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingTop: 0,
        padding: 50,
        paddingBottom: 260
    },
    modeloimg2: {
        width: 250,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 10
    },
});
