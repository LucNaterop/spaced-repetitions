
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as Na from 'native-base';

export default class Register extends React.Component {

  static navigationOptions(navigation){
    return { title: 'Login' }
  }

  constructor(props) {
    super(props);
    this.state = {loading: false};
  }

  render() {
    console.log(this.state);
    console.disableYellowBox = true;
    return (
      <Na.Container>
        <Na.Content padder>
          <Na.H2 style={{alignSelf: 'center', marginTop: 30, marginBottom: 30}}>Register your account.</Na.H2>
          <Na.Form style={{backgroundColor: 'white'}}>
            <Na.Item fixLabel>
              <Na.Label>Email</Na.Label>
              <Na.Input />
            </Na.Item>
            <Na.Item fixLabel last>
              <Na.Label>Password</Na.Label>
              <Na.Input />
            </Na.Item>
          </Na.Form>
          <Na.Button block style={{marginTop: 10}} onPress={() => {}}>
            <Na.Text>Register </Na.Text>
          </Na.Button>
        </Na.Content>
      </Na.Container>
    );
  }
}
