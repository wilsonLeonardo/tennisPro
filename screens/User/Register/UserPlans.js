import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import { Form, Button,Item,Input, Header , Container, Content, Icon, Card, CardItem } from 'native-base';

import { AeroText } from '../../../components/StyledText';
import { TabsTennis } from '../../../components/Tabs';
import {TitleTennis} from '../../../components/Title'
import {PlusIcon, StarIcon} from '../../../components/Icon/Icon'

export default function UserPlans(props) {
  const {navigate} = props.navigation;
  return (
    <KeyboardAvoidingView style={styles.container}  behavior="padding" enabled>
      <Header style={{elevation:0, backgroundColor:'#ffff'}}/>
      <TabsTennis navegar={navigate} done="Yes"/>
      <TitleTennis placeholder='Escolha algum plano' Icon="Star"/>
      <Content style={styles.content}>
          <TouchableOpacity>
                <Card >
                    <CardItem style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <AeroText style={{borderBottomColor:'gray', borderBottomWidth: 3, fontSize:18}}>Bronze</AeroText>
                            <AeroText style={{color:'#a3a3a3', fontSize:13}}>Mensal</AeroText>
                        </View>
                        <View style={{flex:2, alignItems:'flex-end', justifyContent:'center'}}>
                            <AeroText style={{color:'#a3a3a3', fontSize:30}}>12,90<AeroText style={{color:'#a3a3a3', fontSize:13}}> R$</AeroText></AeroText>
                        </View>
                    </CardItem>
                </Card>
          </TouchableOpacity>
            <TouchableOpacity>
                <Card style={{height:100, justifyContent:'center'}}>
                    <CardItem style={{flexDirection:'row'}}>
                        <View style={{flex:2}}>
                            <AeroText style={{color:'#F75400', fontSize:11}}>Recomendado</AeroText>
                            <View style={{flexDirection:'row',borderBottomColor:'#F75400', borderBottomWidth: 3,}}>
                                <StarIcon style={{width:20, height:18, left:-2}}/>
                                <AeroText style={{ fontSize:18, color:'#F75400'}}>
                                    Gold
                                </AeroText>
                            </View>
                            <AeroText style={{color:'#F75400', fontSize:13}}>Anual</AeroText>
                        </View>
                        <View style={{flex:3,justifyContent:'center'}}>
                            <View style={{alignItems:'flex-end', justifyContent:'center'}}>
                                <AeroText style={{color:'#F75400', fontSize:30}}> <AeroText style={{color:'#F75400', fontSize:13}}>12x </AeroText>8,32
                                <AeroText style={{color:'#F75400', fontSize:13}}> R$</AeroText></AeroText>
                            </View>
                            <View style={{alignItems:'flex-end'}}>
                                <AeroText style={{color:'#F75400', fontSize:12}}> Ou 99,90 R$</AeroText>
                            </View>
                            
                        </View>
                    </CardItem>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card >
                    <CardItem style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <AeroText style={{borderBottomColor:'gray', borderBottomWidth: 3, fontSize:18}}>Silver</AeroText>
                            <AeroText style={{color:'#a3a3a3', fontSize:13}}>Semestral</AeroText>
                        </View>
                        <View style={{flex:2, justifyContent:'center'}}>
                            <View style={{alignItems:'flex-end', justifyContent:'center'}}>
                                <AeroText style={{color:'#a3a3a3', fontSize:30}}>
                                <AeroText style={{color:'#a3a3a3', fontSize:13}}>6x </AeroText>
                                9,98<AeroText style={{color:'#a3a3a3', fontSize:13}}> R$</AeroText></AeroText>
                            </View>
                            <View style={{alignItems:'flex-end'}}>
                                <AeroText style={{color:'#a3a3a3', fontSize:12}}> Ou 59,90 R$</AeroText>
                            </View>
                            
                        </View>
                    </CardItem>
                </Card>
            </TouchableOpacity>
            <View style={styles.title}>
                <View style={styles.caixa} >
                    <PlusIcon/>
                    <AeroText style={[{ fontSize: 18, left:10, alignItems: 'center', color: '#f75400' },props.style]}>
                        Adicionar cupom
                    </AeroText>
                </View>
            </View>
            <Button onPress={() => navigate('userDispo')}
             block style={{borderRadius:10, alignItems:'center',backgroundColor:'#F75400', marginTop:20, elevation: 5}}><AeroText style={{fontSize:18, alignItems:'center', color:'#fff'}}> Próximo </AeroText></Button>
      </Content>      
    </KeyboardAvoidingView>
  );
}

UserPlans.navigationOptions = {
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
      paddingTop:20,
    padding:50,
  },
Input:{
    fontSize: 15, 
    fontFamily:'Aero'
  },
  title: {
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
},
caixa: {
    flexDirection:'row',
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
}
});
