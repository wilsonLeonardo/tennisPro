import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import { Form, Button, Item, Input, Header, Content, Icon } from 'native-base';

import { AeroText } from '../../../components/StyledText';

export default function UserDiponibilidade(props) {
    const { navigate } = props.navigation;
    return (
        <Content style={{ backgroundColor: "#ffff" }}>
            <Header style={{ elevation: 0, backgroundColor: '#ffff' }} />
            <View style={styles.welcomeContainer}>

                <Image
                    source={require('../../../assets/images/buraco.png')}
                    style={{
                        resizeMode: 'contain',
                        marginTop: 3,
                        marginLeft: -10,
                        width: 400,
                        height: 150
                    }}
                />
            </View>
            <View style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View tyle={styles.welcomeContainer}>
                    <View style={styles.caixa} >
                        <AeroText style={{ fontSize: 30, fontWeight: 'normal', alignItems: 'center', color: '#f75400' }}>
                            Quase tudo pronto....
          </AeroText>
                    </View>
                    <View style={styles.caixa} >
                        <Text style={{ fontSize: 18, fontWeight: 'normal', alignItems: 'center', color: '#f75400' }}>
                            Por último, nos informe sua
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: 'normal', alignItems: 'center', color: '#f75400' }}>
                            disponibilidade e preço
                        </Text>
                    </View>
                    <Content style={[styles.content, { flex: 1 }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: "space-around" }}>

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
                        <Form style={{ flexDirection: 'row', marginTop: 50 }}>
                            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex:1 }]}>
                                <Input style={styles.Input} placeholder='Entrada' />
                            </Item>
                            <View style={{ justifyContent: "center", height: 40, width: 35 }}>
                                <AeroText style={{}}> até</AeroText>
                            </View>
                            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7', flex:1 }]}>
                                <Input style={styles.Input} placeholder='Saída' />
                            </Item>
                        </Form>
                        
                    </Content>
                    <Button block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', elevation: 5 }}><AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Finalizar </AeroText></Button>
                </View>
            </View>

        </Content>
    );
}

UserDiponibilidade.navigationOptions = {
    headerShown: false
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    item: {
        elevation: 2,
        borderRadius: 10,
        height: 40
    },
    content: {
        padding: 10,
        paddingTop: 15,
        marginBottom: 20,
        height: 180
    },
    caixa: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,

    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        flex: 2,
        alignItems: 'center',
        marginTop: -20,
        marginBottom: 25,
    },
    bottomDiasDaSemana: {
        borderRadius: 10,
        justifyContent: 'center',
        width: 30,
        height: 30,
        backgroundColor: '#f7f7f7'
    },
    fontDiasDaSemana: {
        fontSize: 13, 
        fontFamily:'Aero'

    },
    Input:{
        fontSize: 13, 
        fontFamily:'Aero'
      }
});
