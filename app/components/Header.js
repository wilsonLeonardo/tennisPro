import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import {Header} from 'native-base'
import {AeroText} from './StyledText'

export function HeaderTennis(props) {
  return (
      <ImageBackground source={require('../assets/images/Header.png')} style={{flex:1, resizeMode:'contain'}}/>
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
  