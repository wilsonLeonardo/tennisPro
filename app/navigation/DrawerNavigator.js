import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Professores from '../screens/User/App/Professores'
import Jogos from '../screens/User/App/Jogos'
import Ranking from '../screens/User/App/Ranking'
import Estatisticas from '../screens/User/App/Estatisticas'
import Campeonatos from '../screens/User/App/Campeonatos'
import Home from '../screens/User/App/Home'
import Mensagens from '../screens/User/App/Mensagens'
import Conta from '../screens/User/App/Conta'
import Chat from '../screens/User/App/Chat'

import User from '../screens/CustomDrawer/User'
import IconSVG from '../components/Icon/IconSVG'

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: () => <Home />,
        navigationOptions: {
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Home' fill={tintColor} width='20' height='20' />
        }
    },
    Mensagens: {
        screen: () => <Mensagens />,
        navigationOptions: {
            title: 'Chat',
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Chat' fill={tintColor} width='20' height='20' />
        }
    },
    Jogos: {
        screen: () => <Jogos />,
        navigationOptions: {
            title: 'Jogos',
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Boll' fill={tintColor} width='20' height='20' />
        }
    },
    Ranking: {
        screen: () => <Ranking />,
        navigationOptions: {
            title: 'Ranking',
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Medal' fill={tintColor} width='20' height='20' />
        }
    },
    Estatisticas: {
        screen: () => <Estatisticas />,
        navigationOptions: {
            title: 'Estatísticas',
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Statistics' fill={tintColor} width='20' height='20' />
        }
    },
    Campeonatos: {
        screen: () => <Campeonatos />,
        navigationOptions: {
            title: 'Campeonatos',
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Trophy' fill={tintColor} width='20' height='20' />
        }
    },
    Professores: {
        screen: () => <Professores />,
        navigationOptions: {
            title: 'Professores',
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Book' fill={tintColor} width='20' height='20' />
        }
    },
    Perfil: {
        screen: () => <Conta />,
        navigationOptions: {
            title: 'Conta',
            drawerIcon: ({ tintColor }) =>
                <IconSVG name='Edit' fill={tintColor} width='20' height='20' />
        }
    },
    Chat: {
        screen: () => <Chat />,
        drawerIcon: ({ tintColor }) =>
            <IconSVG name='Edit' fill={tintColor} width='20' height='20' />

    }
}, {
    initialRouteName: "Home",
    contentComponent: User,
    contentOptions: {
        activeTintColor: '#F75400'
    }

})


export default createAppContainer(DrawerNavigator);