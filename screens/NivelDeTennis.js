import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { Button } from 'native-base';

import { AeroText } from '../components/StyledText';
import { HeaderTennis } from '../components/Header'
import { TitleTennis } from '../components/Title'

export default function NivelTenis(props) {
    const {navigate} = props.navigation;
    return (
        <View style={styles.container}>
            <HeaderTennis/>
            <TitleTennis placeholder='Qual seu nível de tênis?' Icon="Ball"/>
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
                    <View style={styles.niveis} >
                        <AeroText style={styles.nivelText} >Inter B</AeroText>
                    </View>
                    <View style={styles.niveis} >
                        <AeroText style={styles.nivelText} >Inter C</AeroText>
                    </View>
                    <View style={styles.niveis} >
                        <AeroText style={styles.nivelText} >Principiante</AeroText>
                    </View>
                    <View style={styles.niveis} >
                        <AeroText style={styles.nivelText} >Iniciante</AeroText>
                    </View>
                    <View style={styles.viewButton}>
                        <Button block style={styles.bottom} onPress={() => navigate('userData')}>
                            <AeroText style={{fontSize:18, alignItems:'center', color:'#fff'}}> Proxímo </AeroText>
                        </Button>
                    </View>
            </View>
        </View>

    );
}

NivelTenis.navigationOptions = {
    headerShown: false
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingTop:10,
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
        paddingTop:30,
        paddingBottom:20
    },
    bottom: {
        width: 300,
        height: 40,
        backgroundColor: '#f75400',
        borderRadius: 10,
    },
    bottomText: {
        color: 'white',
        fontSize: 18,
    }
});
