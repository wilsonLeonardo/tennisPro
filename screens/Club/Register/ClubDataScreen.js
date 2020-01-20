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

export default function ClubDataScreen(props) {
    const { navigate } = props.navigation;
    return (
        <KeyboardAvoidingView style={styles.container}  behavior="padding" enabled keyboardVerticalOffset={0}>
            <HeaderTennis/>
            <TitleTennis placeholder="Preencha seus dados" Icon="Check"/>
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
                    <Button onPress={() => navigate('clubeDispo')}
                        block style={{borderRadius:10, alignItems:'center',backgroundColor:'#F75400', marginTop:15, elevation: 5}}>
                        <AeroText style={{fontSize:18, alignItems:'center', color:'#fff'}}> 
                            Próximo 
                        </AeroText>
                    </Button>
                </Form>
            </Content>      
        </KeyboardAvoidingView>
    );
}

ClubDataScreen.navigationOptions = {
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
      paddingTop:30,
      padding:50,
      paddingBottom: 250
    },
  Input:{
      fontSize: 15, 
      fontFamily:'Aero'
    }
  });
