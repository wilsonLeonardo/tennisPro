import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen'
import UserDataScreen from '../screens/User/Register/UserDataScreen'
import TipoConta from '../screens/TipoDeConta'
import NivelTenis from '../screens/User/Register/NivelDeTennis'
import NivelAtletaProf from '../screens/Teacher/Register/NivelAtletaProf'
import ClubDataScreen from '../screens/Club/Register/ClubDataScreen'
import ClubDiponibilidade from '../screens/Club/Register/ClubDiponibilidade'
import TeacherDataScreen from '../screens/Teacher/Register/TeacherDataScreen';
import UserPlans from '../screens/User/Register/UserPlans'
import TeacherDiponibilidade from '../screens/Teacher/Register/TeacherDiponibilidade';
import UserDisponibilidade from '../screens/User/Register/UserDisponibilidade'
import DrawerNavigator from './DrawerNavigator'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Type: {
    screen: TipoConta
  },
  userNivel: {
    screen: NivelTenis
  },
  userNivelProf: {
    screen: NivelAtletaProf
  },
  userData: {
    screen: UserDataScreen
  },
  clubeData: {
    screen: ClubDataScreen
  },
  teacherData: {
    screen: TeacherDataScreen
  },
  clubeDispo: {
    screen: ClubDiponibilidade,
    navigationOptions:{
      headerShown: false
    }
  },
  Plans:{
    screen:UserPlans
  },
  teacherDispo:{
    screen: TeacherDiponibilidade
  },
  userDispo:{
    screen: UserDisponibilidade
  },
  homeUser:{
    screen: DrawerNavigator
  },
});

export default createAppContainer(AppNavigator);