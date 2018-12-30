/**
 * @format
 * @flow
 */

import React, {Component} from 'react'
import LoginView from './layout/LoginView'
import MainView from './layout/MainView'
import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class App extends Component {

  render() {
    return (
      <AppContainer />
    )
  }
}

const AppNavigation = createStackNavigator(
  {
    Login: {
      screen: LoginView
    },
    MainView: {
      screen: MainView
    }
  },
  {
    initialRouteName: "Login",
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(AppNavigation)
