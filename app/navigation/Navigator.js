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
import DrawerTeacher from './DrawerTeacher'
import DrawerClub from './DrawerClub'

export const SignedOutRoutes = createAppContainer(createStackNavigator({
  Login: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false
    }
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
}));

export const SignedInUserRoutes = createAppContainer(createStackNavigator({
  homeUser:{
    screen: DrawerClub,
    navigationOptions:{
      headerShown: false
    }
  }
}
));
export const SignedInTeacherRoutes = createAppContainer(createStackNavigator({
  homeTeacher:{
    screen: DrawerTeacher,
    navigationOptions:{
      headerShown: false
    }
  }
}
));
export const SignedInClubRoutes = createAppContainer(createStackNavigator({
  homeTeacher:{
    screen: DrawerClub,
    navigationOptions:{
      headerShown: false
    }
  }
}
));

export const createRootNavigator = (signedIn = false, profile) => {
  return createAppContainer(createStackNavigator({
    SignedInUser: { screen: SignedInUserRoutes },
    SignedInTeacher: {screen : SignedInTeacherRoutes},
    SignedInClub: {screen : SignedInClubRoutes},
    SignedOut: { screen: SignedOutRoutes }
  },
  {
    headerMode: "none",
    mode: "modal",
    initialRouteName: signedIn && profile === 'USER' ? "SignedInUser" : signedIn && profile === 'TEACHER' ?
     "SignedInTeacher" : signedIn && profile === 'CLUB' ? "SignedInClub" : 'SignedOut', 
    navigationOptions: {
      gesturesEnabled: false
    }
  }));
};