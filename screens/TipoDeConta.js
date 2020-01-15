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
                            Tipo de Conta
                        </AeroText>
                    </View>
                    <Image
                        source={
                            require('../assets/images/imgPraticante.png')
                        }
                        style={styles.modeloimg2}
                    />
                    <Image
                        source={
                            require('../assets/images/imgProfessor.png')
                        }
                        style={styles.modeloimg3}
                    />
                    <Image
                        source={
                            require('../assets/images/imgClube.png')
                        }
                        style={styles.modeloimg3}
                    />
                </View>
            </ScrollView>
            {/* <Content style={styles.content}>
          <Form>
          <Item regular style={[styles.item,{marginBottom: 15 }]}>
            <Input placeholder='Login' />
            <Icon name='person' style={{color:'#F75400'}}/>
          </Item>
          <Item regular style={[styles.item, {marginBottom: 15}]}>
            <Input textContentType='password' placeholder='Senha' />
            <Icon name='key' style={{color:'#F75400'}} />
          </Item>
          <Button block style={{borderRadius:10, alignItems:'center',backgroundColor:'#F75400'}}><AeroText style={{fontSize:18, alignItems:'center', color:'#fff'}}> Login </AeroText></Button>
          </Form>
          
      </Content> */}
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
    welcomeImage: {
        width: 70,
        height: 60,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    modeloimg2: {
        width: 250,
        height: 150,
        resizeMode: 'contain',
        marginTop: 10,
        borderRadius: 10,
    },
    modeloimg3: {
        width: 250,
        height: 150,
        resizeMode: 'contain',
        marginTop: -10,
        borderRadius: 10,
    },
    pergunta: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#F75400'
    },
    caixa: {
        marginTop: 30,
        width: 300,
        height: 50,
        padding: 7,
        backgroundColor: '#f75400',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
