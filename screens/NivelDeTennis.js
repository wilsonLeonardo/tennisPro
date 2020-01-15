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
import { Icon, Content, Form, Item, Input, Button } from 'native-base';

import { AeroText } from '../components/StyledText';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View style={styles.welcomeContainer}>
                    <AeroText style={styles.title1}>Tennis<AeroText style={styles.title2}>Pro</AeroText>
                        <Image
                            source={require('../assets/images/Logo.png')}
                            style={styles.welcomeImage}
                        />
                    </AeroText>
                    <View style={styles.caixa} >
                        <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}>
                            Qual seu nível de tênis?
                        </AeroText>
                    </View>

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
                    <View style={styles.bottom} >
                        <AeroText style={styles.bottomText} >Próximo</AeroText>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

HomeScreen.navigationOptions = {
    headerShown: false
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
        marginBottom: 110
    },
    title1: {
        fontSize: 40,
        color: '#F75400'
    },
    title2: {
        fontSize: 40,
        color: '#606062'
    },
    item: {
        elevation: 1,
        borderRadius: 10
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        flex: 2,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    caixa: {
        marginTop: 30,
        marginVertical: 15,
        width: 300,
        height: 50,
        padding: 7,
        backgroundColor: '#f75400',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    niveis: {
        marginTop: 10,
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
    bottom: {
        marginTop: 25,
        width: 250,
        height: 40,
        padding: 7,
        backgroundColor: '#f75400',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomText: {
        color: 'white',
        fontSize: 18,
    }
});
