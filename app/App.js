import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import * as reducers from "./store/reducers";
import { createStore, applyMiddleware, combineReducers } from "redux";

import AppNavigator from './navigation/Navigator'

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default class App extends React.Component {
  state = { isReady: false };

  render() {
    const { isReady } = this.state;
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
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
