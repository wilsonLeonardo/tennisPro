import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { Form, Button, Item, Input, Header, Content,Container, Icon } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import {HeaderTennis} from '../../../components/Header'
import {TitleTennis} from '../../../components/Title'

export default function ClubDisponibilidade(props) {
    const { navigate } = props.navigation;
    return (
        <KeyboardAvoidingView style={styles.container}  behavior="padding" enabled keyboardVerticalOffset={0}>
            <HeaderTennis/>
            <TitleTennis placeholder="Quase tudo pronto..." style={{fontSize:25}}/>
            <View style={styles.caixa} >
                        <AeroText style={{ fontSize: 18, fontWeight: 'normal', alignItems: 'center', color: '#f75400' }}>
                            Por último, nos informe as
                        </AeroText>
                        <AeroText style={{ fontSize: 18, fontWeight: 'normal', alignItems: 'center', color: '#f75400' }}>
                            mensalidades e preços
                        </AeroText>
            </View>
            <Content style={styles.content}>
                <Form style={{paddingTop:40}}>
                <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                                <Input placeholder='Nº de Quadras' style={styles.Input}/>
                                <Icon name='tennisball' style={{ color: '#F75400' }} />
                            </Item>
                            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                                <Input placeholder='Preço do Aluguel' style={styles.Input}/>
                                <Icon name='logo-usd' style={{ color: '#F75400' }} />
                            </Item>

                            <Item regular style={[styles.item, { marginBottom: 15, backgroundColor: '#f7f7f7' }]}>
                                <Input placeholder='Preço da Mensalidade' style={styles.Input}/>
                                <Icon name='logo-usd' style={{ color: '#F75400' }} />
                            </Item>
                            <Button block style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#F75400', marginTop: 20, elevation: 5 }}><AeroText style={{ fontSize: 18, alignItems: 'center', color: '#fff' }}> Finalizar </AeroText></Button>
                </Form>
            </Content>      
        </KeyboardAvoidingView>
    );
}

ClubDisponibilidade.navigationOptions = {
    headerShown: false
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#ffff" 
    },
    item:{
      elevation:2,
      borderRadius:10
    },
    content:{
      paddingTop:0,
      padding:50,
      paddingBottom:230
    },
  Input:{
      fontSize: 15, 
      fontFamily:'Aero'
    },
    caixa: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:10
    },
  });
