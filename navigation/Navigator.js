import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen'
import UserDataScreen from '../screens/User/Register/UserDataScreen'
import TipoConta from '../screens/TipoDeConta'
import NivelTenis from '../screens/NivelDeTennis'
import NivelAtletaProf from '../screens/NivelAtletaProf'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Type:{
    screen: TipoConta
  },
  userNivel:{
    screen: NivelTenis
  },
  userNivelProf:{
    screen: NivelAtletaProf
  },
  userData:{
    screen: UserDataScreen
  }

});

export default createAppContainer(AppNavigator);