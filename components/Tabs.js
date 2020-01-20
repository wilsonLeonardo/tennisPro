import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {AeroText} from './StyledText'

export function TabsTennis(props) {
    const {navegar} = props;
  return (
    <View style={styles.container}>
        <View style={styles.tab}>
          <TouchableOpacity onPress={() => navegar('userNivel')}>
            <View style={[styles.item, {backgroundColor:'#F75400'}]}></View>
            <View style={{alignItems:'center', paddingTop: 10}}>
              <AeroText style={{ color:'#F75400'}}>Nivel de</AeroText>
              <AeroText style={{ color:'#F75400'}}>Experiência</AeroText>
            </View>
          </TouchableOpacity>
        <View>
        <View style={[styles.item,{backgroundColor:'#cfcfcf'}]}></View>
            <View style={{alignItems:'center', paddingTop: 10}}>
              <AeroText style={{color: '#a3a3a3'}}>Preencher</AeroText>
              <AeroText style={{color: '#a3a3a3'}}>Dados</AeroText>
            </View>
        </View>

        <TouchableOpacity>
        <View style={[styles.item,{backgroundColor:'#cfcfcf'}]}></View>
           <View style={{alignItems:'center',  paddingTop: 10}}>
              <AeroText style={{color: '#c4c4c4'}}>Planos e</AeroText>
              <AeroText style={{color: '#c4c4c4'}}>Cupons</AeroText>
            </View>
        </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingBottom:50
    },
    tab:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    item:{
         height:20,
         width:100
    },
    tabContainer:{

    },
    title1:{
      fontSize: 40,
      color:'#F75400'
    },
    title2:{
      fontSize: 40,
      color:'#606062'
    },
    welcomeImage: {
      width: 70,
      height: 60,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    }
  });
  