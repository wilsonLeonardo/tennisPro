import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../screens/Teacher/App/Home'
import Mensagens from '../screens/Teacher/App/Mensagens'
import Conta from '../screens/Teacher/App/Conta'

import Teacher from '../screens/CustomDrawer/Teacher'
import { Dimensions } from 'react-native';
import IconSVG from '../components/Icon/IconSVG'
//const {width} = Dimensions.get('window')

const DrawerTeacher = createDrawerNavigator({
    Home: {
        screen: () => <Home />,
        navigationOptions: {
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Home' fill={tintColor} width='20' height='20' />
        }
    }, 
    Mensagens: {
        screen: () => <Mensagens />,
        navigationOptions: { title: 'Chat',drawerIcon: ({ tintColor }) =>
        <IconSVG name='Chat' fill={tintColor} width='20' height='20' /> }
    },
    Perfil: {
        screen: () => <Conta />,
        navigationOptions: {
            title: 'Conta', drawerIcon: ({ tintColor }) =>
                <IconSVG name='Edit' fill={tintColor} width='20' height='20' />
        }
    },
}, {
    initialRouteName: "Home",
    contentComponent: Teacher,
    contentOptions: {
        activeTintColor: '#F75400'}

})


export default createAppContainer(DrawerTeacher);