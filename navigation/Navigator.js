import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen'

import UserDataScreen from '../screens/User/Register/UserDataScreen'


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  User:{
    screen: UserDataScreen
  }
});

export default createAppContainer(AppNavigator);