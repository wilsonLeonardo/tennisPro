import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Professores from '../screens/User/App/Professores'
import Jogos from '../screens/User/App/Jogos'
import Ranking from '../screens/User/App/Ranking'
import Estatisticas from '../screens/User/App/Estatisticas'
import Campeonatos from '../screens/User/App/Campeonatos'
import Home from '../screens/User/App/Home'

import CustomDrawer from '../screens/CustomDrawer/User'

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: () => <Home />,
        navigationOptions: { title: 'Home' }
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
}, {
    initialRouteName: "Home",
    contentComponent: CustomDrawer
})


export default createAppContainer(DrawerNavigator);