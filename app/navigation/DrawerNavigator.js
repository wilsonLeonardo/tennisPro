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

import CustomDrawer from '../screens/CustomDrawer/User'

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: () => <Home />,
        navigationOptions: { title: 'Home' }
    },
    Mensagens: {
        screen: () => <Mensagens />,
        navigationOptions: { title: 'Chat' }
    },
    Jogos: {
        screen: () => <Jogos />,
        navigationOptions: { title: 'Jogos' }
    },
    Ranking: {
        screen: () => <Ranking />,
        navigationOptions: { title: 'Ranking' }
    },
    Estatisticas: {
        screen: () => <Estatisticas />,
        navigationOptions: { title: 'Estatísticas' }
    },
    Campeonatos: {
        screen: () => <Campeonatos />,
        navigationOptions: { title: 'Campeonatos' }
    },
    Professores: {
        screen: () => <Professores />,
        navigationOptions: { title: 'Professores' }
    },
    Perfil: {
        screen: () => <Conta />,
        navigationOptions: { title: 'Conta' }
    },
}, {
    initialRouteName: "Home",
    contentComponent: CustomDrawer
})


export default createAppContainer(DrawerNavigator);