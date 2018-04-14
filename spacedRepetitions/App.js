/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as Na from 'native-base';

import Login from './components/Login';
import Register from './components/Register';
import CardsList from './components/CardsList';
import CardDetail from './components/CardDetail';


class ProfileScreen extends React.Component {

  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <Na.Container>
        <Na.Content padder>
          <Text>Lorem ipsum</Text>
        </Na.Content>
      </Na.Container>
    );
  }
}

const NavigationStack = StackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  CardsList: {
    screen: CardsList,
  },
  CardDetail: {
    screen: CardDetail,
  },
}, {
  initialRoute: 'Login'
});

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return <NavigationStack />
  }
}