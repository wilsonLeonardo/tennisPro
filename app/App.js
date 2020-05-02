import React from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import * as reducers from "./store/reducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { isLogged, getUser } from "./service/AuthService";

import { createRootNavigator } from './navigation/Navigator';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default class App extends React.Component {
  state = { isReady: false, signed: false,
    signLoaded: false, };

  componentDidMount() {
    isLogged()
      .then(res => {
        this.setState({ signed: res, signLoaded: true })})
          getUser().then(user => {
            if(user)
              this.setState({ userProfile: user.profile }
            );
        })
      this.appLoading();
  }
  appLoading = async () => {
    try{
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        'Aero': require('./assets/fonts/Aero.ttf'),
        ...Ionicons.font})
        this.setState({ isReady: true })
    }catch(error){
      console.log(error);
    }

  }
  
  render() {
    const { isReady, signLoaded, signed, userProfile} = this.state;
    if (!isReady || !signLoaded) {
        return null
    }

    const Layout = createRootNavigator(signed, userProfile);

    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
