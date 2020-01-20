import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import { Form, Button, Item, Input, Header, Content, Icon } from 'native-base';

import { AeroText } from '../../../components/StyledText';

export default function ClubDataScreen(props) {
    const { navigate } = props.navigation;
    return (
        <Content style={{ backgroundColor: "#ffff" }}>
            <Header style={{ elevation: 0, backgroundColor: '#ffff' }} />
            <View style={styles.welcomeContainer}>

                <AeroText style={styles.title1}>Tennis<AeroText style={styles.title2}>Pro</AeroText><Image
                    source={require('../../../assets/images/Logo.png')}
                    style={styles.welcomeImage}
                /></AeroText>
            </View>
            <View style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View tyle={styles.welcomeContainer}>
                    <View style={styles.caixa} >
                        <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}>
                            Preencha seus dados
                        </AeroText>
                    </View>
                    <Content style={styles.content}>
                        <Form>
                            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                                <Input placeholder='Cep' style={styles.Input}/>
                                <Icon name='locate' style={{ color: '#F75400' }} />
                            </Item>
                            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                                <Input placeholder='Nome' style={styles.Input}/>
                                <Icon name='person' style={{ color: '#F75400' }} />
                            </Item>
                            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                                <Input placeholder='Telefone'style={styles.Input}/>
                                <Icon name='call' style={{ color: '#F75400' }} />
                            </Item>
                            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                                <Input placeholder='Email' style={styles.Input}/>
                                <Icon name='mail' style={{ color: '#F75400' }} />
                            </Item>
                            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                                <Input secureTextEntry={true} placeholder='Senha' style={styles.Input}/>
                                <Icon name='key' style={{ color: '#F75400' }} />
                            </Item>
                            <Button
                                block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', marginTop: 20, elevation: 5 }}
                                onPress={() => navigate('clubeDispo')}
                            >
                                <AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Próximo </AeroText>
                            </Button>
                        </Form>
                    </Content>
                </View>
            </View>

        </Content>
    );
}

ClubDataScreen.navigationOptions = {
    headerShown: false
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    item: {
        elevation: 2,
        borderRadius: 10
    },
    content: {
        padding: 20
    },
    caixa: {
        marginTop: 10,
        width: 300,
        height: 50,
        padding: 7,
        backgroundColor: '#f75400',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeImage: {
        width: 70,
        height: 60,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    title1: {
        fontSize: 40,
        color: '#F75400'
    },
    title2: {
        fontSize: 40,
        color: '#606062'
    },
    welcomeContainer: {
        flex: 2,
        alignItems: 'center',
        marginTop: -20,
        marginBottom: 25,
    },
    Input:{
        fontSize: 15, 
        fontFamily:'Aero'
      }
});
