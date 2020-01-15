import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen'
import TipoDeConta from '../screens/TipoDeConta'


const AppNavigator = createStackNavigator({
  // Home: {
  //   screen: HomeScreen,
  // },

  Conta: {
    screen: TipoDeConta,
  }

});

export default createAppContainer(AppNavigator);