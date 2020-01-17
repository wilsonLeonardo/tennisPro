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
import { Icon, Content, Form, Item, Input, Button,Footer   } from 'native-base';

import { AeroText } from '../components/StyledText';

export default function HomeScreen(props) {
  const {navigate} = props.navigation;
  return (
    <Content style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
        <AeroText style={styles.title1}>Tennis<AeroText style={styles.title2}>Pro</AeroText><Image
            source={require('../assets/images/Logo.png')}
            style={styles.welcomeImage}
        /></AeroText>
          </View>
      </ScrollView>
      <Content style={styles.content}>
          <Form>
          <Item regular style={[styles.item,{marginBottom: 15, backgroundColor:'#f7f7f7' }]}>
            <Input placeholder='Login' style={styles.Input}/>
            <Icon name='person' style={{color:'#F75400'}}/>
          </Item>
          <Item regular style={[styles.item, {marginBottom: 15, backgroundColor:'#f7f7f7'}]}>
            <Input secureTextEntry={true} placeholder='Senha' style={styles.Input}/>
            <Icon name='key' style={{color:'#F75400'}} />
          </Item>
          <Button block style={{borderRadius:10, alignItems:'center',backgroundColor:'#F75400'}}><AeroText style={{fontSize:18, alignItems:'center', color:'#fff'}}> Login </AeroText></Button>
          <View style={{alignItems:'center', marginTop:15}}>
            <TouchableOpacity onPress={() => navigate('Type')}>
              <AeroText style={{color:'black'}}>Não possui uma conta?</AeroText>
            </TouchableOpacity>
          </View>
          </Form>
      </Content>
      <Footer style={{alignItems:'center', backgroundColor: '#F75400', border:0, height: 150, justifyContent:'flex-end', borderBottomStartRadius:100, borderTopStartRadius:500, width: 300, left: 65}}>
        {/* <View style={{ alignItems:'center', justifyContent:'center', height: 150,width: 280, borderBottomStartRadius:100, borderTopStartRadius:500,}}> */}
          <AeroText style={{color:'#ffff', left: 30}}>O nosso objetivo é que até 2022 nós sejamos usados por 80% dos jogadores de tênis do Brasil</AeroText>
        {/* </View> */}
      </Footer>
    </Content>
    
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
  content:{
    padding:40,
    paddingTop:80,
    marginBottom: 25
  },
  title1:{
    fontSize: 40,
    color:'#F75400'
  },
  title2:{
    fontSize: 40,
    color:'#606062'
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
