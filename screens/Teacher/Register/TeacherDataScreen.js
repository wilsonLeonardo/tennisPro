import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { Form, Button,Item,Input, Header , Container, Content, Icon } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { TabsProf } from '../../../components/TabsProf';
import {TitleTennis} from '../../../components/Title'

export default function TeacherDataScreen(props) {
  const {navigate} = props.navigation;
  return (
    <KeyboardAvoidingView style={styles.container}  behavior="padding" enabled>
      <Header style={{elevation:0, backgroundColor:'#ffff'}}/>
      <TabsProf navegar={navigate}/>
      <TitleTennis placeholder='Preencha seus dados' Icon="Check"/>
      <Content style={styles.content}>
            <Form>
            <Item regular style={[styles.item,{marginBottom: 15, backgroundColor:'#f7f7f7' }]}>
              <Input placeholder='Cep' style={styles.Input}/>
              <Icon name='locate' style={{color:'#F75400'}}/>
            </Item>
            <Item regular style={[styles.item,{marginBottom: 15, backgroundColor:'#f7f7f7' }]}>
              <Input placeholder='Clube' style={styles.Input}/>
              <Icon name='shirt' style={{color:'#F75400'}}/>
            </Item>
            <Item regular style={[styles.item,{marginBottom: 15, backgroundColor:'#f7f7f7' }]}>
              <Input placeholder='Email' style={styles.Input}/>
              <Icon name='mail' style={{color:'#F75400'}}/>
            </Item>
            <Item regular style={[styles.item, {marginBottom: 15, backgroundColor:'#f7f7f7'}]}>
              <Input secureTextEntry={true} placeholder='Senha' style={styles.Input}/>
              <Icon name='key' style={{color:'#F75400'}} />
            </Item>
            <Button block style={{borderRadius:10, alignItems:'center',backgroundColor:'#F75400', marginTop:20, elevation: 5}}><AeroText style={{fontSize:18, alignItems:'center', color:'#fff'}}> Próximo </AeroText></Button>
            </Form>
      </Content>      
    </KeyboardAvoidingView>
  );
}

TeacherDataScreen.navigationOptions = {
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
    padding:50,
  },
Input:{
    fontSize: 15, 
    fontFamily:'Aero'
  }
});
