import React from 'react';
import { AppLoading, Notifications } from 'expo';
import * as Font from 'expo-font';
import {Platform} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import * as reducers from "./store/reducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { isLogged, getUser, logout } from "./service/AuthService";
import * as notificationsActions from "./store/notifications/actions";
import * as permissionService from "./service/PermissionService";

import { createRootNavigator, SignedOutRoutes, SignedInRoutes } from './navigation/Navigator';

//import AppNavigator from './navigation/Navigator'

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default class App extends React.Component {
  state = { isReady: false, signed: false,
    signLoaded: false, };

  componentDidMount() {
    isLogged()
      .then(res => {
        this.setState({ signed: res, signLoaded: true })})
          getUser().then(user => {
            this.setState({ userProfile: user.profile }
            );
        })

      if (Platform.OS === "ios") {
        Notifications.setBadgeNumberAsync(0);
      }
  }
  
  render() {
    const { isReady, userProfile } = this.state;

    if (!isReady) {
      return(
        <AppLoading
            startAsync={async () =>
              await Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                'Aero': require('./assets/fonts/Aero.ttf'),
                ...Ionicons.font,
              })
            }
            onFinish={() => this.setState({ isReady: true })}
            onError={console.warn}
          />
      )
    }
    const { signLoaded, signed } = this.state;

    if (!signLoaded) {
      return null;
    }else{
      
    }

    const Layout = createRootNavigator(signed, userProfile);

    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
