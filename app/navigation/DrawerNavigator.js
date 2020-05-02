import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Professores from '../screens/User/App/Professores'
import Jogos from '../screens/User/App/Jogos'
import Campeonatos from '../screens/User/App/Campeonatos'
import Home from '../screens/User/App/Home'
import Mensagens from '../screens/User/App/Mensagens'
import Conta from '../screens/User/App/Conta'

import CustomDrawer from '../screens/CustomDrawer/User'
import IconSVG from '../components/Icon/IconSVG'

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: (props) => <Home {...props} />,
        navigationOptions: {
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Home' fill={tintColor} width='20' height='20' />
        }
    },
    Mensagens: {
        screen: (props) => <Mensagens {...props} />,
        navigationOptions: {
            title: 'Chat',
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Chat' fill={tintColor} width='20' height='20' />
        }
    },
    Jogos: {
        screen: (props) => <Jogos {...props}/>,
        navigationOptions: {
            title: 'Jogos',
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Boll' fill={tintColor} width='20' height='20' />
        }
    },
    // Ranking: {
    //     screen: (props) => <Ranking {...props}/>,
    //     navigationOptions: {
    //         title: 'Ranking',
    //         drawerIcon: ({ tintColor }) =>
    //             <IconSVG name='Medal' fill={tintColor} width='20' height='20' />
    //     }
    // },
    // Estatisticas: {
    //     screen: (props) => <Estatisticas {...props}/>,
    //     navigationOptions: {
    //         title: 'Estatísticas',
    //         drawerIcon: ({ tintColor }) =>
    //             <IconSVG name='Statistics' fill={tintColor} width='20' height='20' />
    //     }
    // },
    Campeonatos: {
        screen: (props) => <Campeonatos {...props}/>,
        navigationOptions: {
            title: 'Campeonatos',
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Trophy' fill={tintColor} width='20' height='20' />
        }
    },
    Professores: {
        screen: (props) => <Professores {...props}/>,
        navigationOptions: {
            title: 'Professores',
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Book' fill={tintColor} width='20' height='20' />
        }
    },
    Perfil: {
        screen: (props) => <Conta {...props}/>,
        navigationOptions: {
            title: 'Conta',
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Config' fill={tintColor} width='20' height='20' />
        }
    }
}, {
    initialRouteName: "Home",
    contentComponent: CustomDrawer,
    contentOptions: {
        activeTintColor: '#F75400'
    }

})


export default createAppContainer(DrawerNavigator);