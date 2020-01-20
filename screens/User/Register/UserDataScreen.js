import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { Form, Button,Item,Input, Header , Content, Icon } from 'native-base';

import { AeroText } from '../../../components/StyledText';

export default function UserDataScreen(props) {
  const {navigate} = props.navigation;
  return (
    <Content style={{backgroundColor:"#ffff"}}>
      <Header style={{elevation:0, backgroundColor:'#ffff'}}/>
      <View style={{flexDirection:'row', flex:4, height: 100}}>
        <TouchableOpacity onPress={() => navigate('userNivel')}>
          <View style={{alignItems:'flex-start'}}>
            <View style={{backgroundColor:'#F75400', height:20,width:100}}></View>
            <View style={{alignItems:'center', paddingTop: 10,left:10}}>
              <AeroText style={{ color:'#F75400'}}>Nivel de</AeroText>
              <AeroText style={{ color:'#F75400'}}>Experiência</AeroText>
            </View>
          </View>
        </TouchableOpacity>
          <View style={{ height:20,width:110, alignItems:'center', left:30, backgroundColor:'#cfcfcf', flexDirection:'column'}}>
            <View style={{height:20,width:100, left: 5}}></View>
            <View style={{alignItems:'center', paddingTop: 10}}>
              <AeroText style={{color: '#a3a3a3'}}>Preencher</AeroText>
              <AeroText style={{color: '#a3a3a3'}}>Dados</AeroText>
            </View>
          </View>
        <TouchableOpacity>
          <View style={{ height:20,width:100, alignItems:'flex-end', left:50}}>
            <View style={{backgroundColor:'#cfcfcf', height:20,width:100, left: 0}}></View>
            <View style={{alignItems:'center',  paddingTop: 10, left:-15}}>
            <AeroText style={{color: '#c4c4c4'}}>Planos e</AeroText>
              <AeroText style={{color: '#c4c4c4'}}>Cupons</AeroText>
            </View>
          </View>
        </TouchableOpacity>
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
        </View>        
      </View>
      
    </Content>
  );
}

UserDataScreen.navigationOptions = {
  headerShown: false
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center', 
  },
  item:{
    elevation:2,
    borderRadius:10
  },
  content:{
    padding:20,
    paddingTop:40,
    marginBottom: 30
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
Input:{
    fontSize: 15, 
    fontFamily:'Aero'
  }
});
