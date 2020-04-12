import React from 'react';
import { View, StyleSheet, Image, Platform } from 'react-native';
import {AeroText} from './StyledText'

export function HeaderTennis(props) {
  return (
      <Image source={require('../assets/images/headerHome.png')} 
      style={{flex:1, width: null, height:null, justifyContent:'flex-start', 
      alignItems:'flex-start', opacity: 1}}
      resizeMode='contain'
      />
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'center'
    },
  });
  