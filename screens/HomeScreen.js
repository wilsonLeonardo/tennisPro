import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import { Icon, Content, Form, Item, Input, Button,Footer, Container   } from 'native-base';

import { AeroText } from '../components/StyledText';
import { HeaderTennis } from '../components/HomeHeader'
import {PersonFullIcon, KeyIcon} from '../components/Icon/Icon' 

export default function HomeScreen(props) {
  const {navigate} = props.navigation;
  return (
    <Container style={styles.container}>
    <ImageBackground source={require('../assets/images/background.jpg')} style={{resizeMode:'contain', flex:3, width: null, height: null}}>
      <HeaderTennis/>
      <Content style={styles.content}>
          <Form>
          <Item regular style={[styles.item,{marginBottom: 15, backgroundColor:'#f7f7f7' }]}>
            <Input placeholder='Login' style={styles.Input}/>
            <PersonFullIcon style={{width:22, height:26, left:-10}} />
          </Item>
          <Item regular style={[styles.item, {marginBottom: 15, backgroundColor:'#f7f7f7'}]}>
            <Input secureTextEntry={true} placeholder='Senha' style={styles.Input}/>
            <KeyIcon style={{width:22, height:12, left:-10}} />
          </Item>
          <Button block style={{borderRadius:10, alignItems:'center',backgroundColor:'#F75400'}}><AeroText style={{fontSize:18, alignItems:'center', color:'#fff'}}> Login </AeroText></Button>
          <View style={{alignItems:'center', marginTop:15}}>
            <TouchableOpacity onPress={() => navigate('Type')}>
              <AeroText style={{color:'#fff'}}>Não possui uma conta?</AeroText>
            </TouchableOpacity>
          </View>
          </Form>
      </Content>
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <AeroText style={{color:'#fff'}}>O nosso objetivo é que até 2022</AeroText>
      <AeroText style={{color:'#fff'}}>nós sejamos usados por 80%</AeroText>
      <AeroText style={{color:'#fff'}}>dos jogadores de tênis do Brasil</AeroText>
      </View>

    </ImageBackground>
    </Container>
    
  );
}

HomeScreen.navigationOptions = {
  headerShown: false
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    flex:1,
    padding:40,
    marginBottom: 25
  },
  item:{
    elevation:2,
    borderRadius:10
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    flex: 2,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
  welcomeImage: {
    width: 70,
    height: 60,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  Input:{
    fontSize: 15, 
    fontFamily:'Aero'
  }
});
