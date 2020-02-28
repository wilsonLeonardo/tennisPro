import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Container, Form, Item, Input, Button, Content } from 'native-base';
import {connect} from "react-redux";

import { AeroText } from '../components/StyledText';
import { HeaderTennis } from '../components/Header'
import { TitleTennis } from '../components/Title'

export default function TipoConta(props) {
    const {navigate} = props.navigation;
    return (
        <Container style={styles.container}>
            <HeaderTennis/>
            <TitleTennis placeholder='Tipo de Conta' Icon="Person"/>
            <View style={styles.content}>
                <View>
                    <TouchableOpacity style={{elevation:5}}onPress={()=>navigate('userNivel')}>
                        <Image
                            source={
                                require('../assets/images/imgPraticante.png')
                            }
                            style={styles.modeloimg2}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{elevation:5}}onPress={()=>navigate('userNivelProf')}>     
                        <Image
                            source={
                                require('../assets/images/imgProfessor.png')
                            }
                            style={styles.modeloimg3}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{elevation:5}}onPress={()=>navigate('clubeData')}>
                        <Image
                            source={
                                require('../assets/images/imgClube.png')
                            }
                            style={[styles.modeloimg3, {paddingBottom: 0}]}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Container>

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
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    modeloimg2: {
        width: 250,
        height: 150,
        resizeMode: 'contain',
        marginTop: 10,
        borderRadius: 10
    },
    modeloimg3: {
        width: 250,
        height: 150,
        resizeMode: 'contain',
        marginTop: -10,
        borderRadius: 10,
    },
});
