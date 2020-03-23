import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import NewCampeonatos from '../screens/Club/App/NewCampeonatos'
import Home from '../screens/Club/App/Home'
import Mensagens from '../screens/Club/App/Mensagens'
import Conta from '../screens/Club/App/Conta'
 
import Club from '../screens/CustomDrawer/Club'
import IconSVG from '../components/Icon/IconSVG'

const DrawerClub = createDrawerNavigator({
    Home: {
        screen: props => <Home  {...props}/>,
        navigationOptions: {
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Home' fill={tintColor} width='20' height='20' />
        }
    },
    // Mensagens: {
    //     screen: () => <Mensagens />,
    //     navigationOptions: {
    //         title: 'Chat', drawerIcon: ({ tintColor }) =>
    //             <IconSVG name='Chat' fill={tintColor} width='20' height='20' />
    //     }
    // },
    NewCampeonatos: {
        screen: props => <NewCampeonatos {...props} />,
        navigationOptions: {
            title: 'Campeonatos', drawerIcon: ({ tintColor }) =>
                <IconSVG name='Trophy' fill={tintColor} width='20' height='20' />
        }
    },
    Perfil: {
        screen: props => <Conta {...props}/>,
        navigationOptions: {
            title: 'Conta', drawerIcon: ({ tintColor }) =>
            <IconSVG name='Config' fill={tintColor} width='20' height='20' />
        }
    },
}, {
    initialRouteName: "Home",
    contentComponent: Club,
    contentOptions: {
        activeTintColor: '#F75400'}
})


export default createAppContainer(DrawerClub);