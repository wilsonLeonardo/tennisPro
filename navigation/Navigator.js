import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen'
import UserDataScreen from '../screens/User/Register/UserDataScreen'
import TipoConta from '../screens/TipoDeConta'
import NivelTenis from '../screens/NivelDeTennis'
import NivelAtletaProf from '../screens/NivelAtletaProf'
import ClubDataScreen from '../screens/Club/Register/ClubDataScreen'
import ClubDiponibilidade from '../screens/Club/Register/ClubDiponibilidade'
import TeacherDataScreen from '../screens/Teacher/Register/TeacherDataScreen';
import TeacherDiponibilidade from '../screens/Teacher/Register/TeacherDiponibilidade';
import UserDisponibilidade from '../screens/User/Register/UserDisponibilidade'

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
    screen: ClubDiponibilidade
  },
  teacherDispo:{
    screen: TeacherDiponibilidade
  },
  userDispo:{
    screen: UserDisponibilidade
  }

});

export default createAppContainer(AppNavigator);