import React from 'react';
import {
    StyleSheet,
    View,
    KeyboardAvoidingView
} from 'react-native';
import { Button } from 'native-base';

import { AeroText } from '../components/StyledText';
import { HeaderTennis } from '../components/Header'
import { TitleTennis } from '../components/Title'

export default function NivelAtletaProf(props) {
    const {navigate} = props.navigation;
    return (
        <KeyboardAvoidingView style={styles.container}  behavior="padding" enabled style={styles.container}>
            <HeaderTennis/>
            <TitleTennis placeholder='Qual nível de atleta você ensina?' Icon="Ball"/>
            <View style={styles.content}>
                <View style={styles.niveis} >
                    <AeroText style={styles.nivelText} >Especial Pro</AeroText>
                </View>
                <View style={styles.niveis} >
                    <AeroText style={styles.nivelText} >Especial</AeroText>
                </View>
                <View style={styles.niveis} >
                    <AeroText style={styles.nivelText} >Inter A</AeroText>
                </View>
                <View style={styles.viewButton}>
                    <Button block style={styles.button} onPress={() => navigate('teacherData')}>
                        <AeroText style={{fontSize:18, alignItems:'center', color:'#fff'}}> Proxímo </AeroText>
                    </Button>
                </View>
            </View>
        </KeyboardAvoidingView>

    );
}

NivelAtletaProf.navigationOptions = {
    headerShown: false
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingTop:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    niveis: {
        marginTop: 15,
        width: 200,
        height: 35,
        backgroundColor: '#EBF0EE',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nivelText: {
        fontSize: 18, 
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#696B6A',
    },
    viewButton:{
        paddingTop:120,
        paddingBottom:20
    },
    button: {
        width: 300,
        height: 40,
        backgroundColor: '#f75400',
        borderRadius: 10,
    },
    buttomText: {
        color: 'white',
        fontSize: 18,
    }
});
