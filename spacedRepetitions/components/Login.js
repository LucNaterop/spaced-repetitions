
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as Na from 'native-base';

authInfo = null;

export default class Login extends React.Component {
  
  static navigationOptions(navigation){
    return { title: 'Login' }
  }

  constructor(props) {
    super(props);
    this.state = {loading: false, email: '', password: ''};
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.setState({loading: true});
    fetch('http://159.89.16.187:3000/wellsapi/v1/login', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({ email: this.state.email, password: this.state.password}),})
    .then((response) => response.json()).then((r) => {
      if(r.status == 'error') alert(r.message);
      else {
        authInfo = r.data;
        this.props.navigation.navigate('CardsList')
      }
    }).catch((error) => { console.error(error); });
  }

  render() {
    return (
      <Na.Container>
        <Na.Content padder>
          <Na.H2 style={{alignSelf: 'center', marginTop: 30, marginBottom: 30}}>Hello there!</Na.H2>
          <Na.Form style={{backgroundColor: 'white'}}>
            <Na.Item fixLabel>
              <Na.Label>Email</Na.Label>
              <Na.Input value={this.state.email} onChangeText={(text) => {this.setState({email: text})}}/>
            </Na.Item>
            <Na.Item fixLabel last>
              <Na.Label>Password</Na.Label>
              <Na.Input secureTextEntry={true} value={this.state.password} onChangeText={(text) => {this.setState({password: text})}}/>
            </Na.Item>
          </Na.Form>
          <Na.Button block style={{marginTop: 10}} onPress={this.handleLogin}>
            <Na.Text>Login </Na.Text>
          </Na.Button>
          <Na.Text style={{marginTop: 50, alignSelf: 'center'}}>No Account yet? </Na.Text>
          <Na.Button block style={{marginTop: 10}} onPress={() => {this.props.navigation.navigate('Register')}}>
            <Na.Text>Register Account</Na.Text>
          </Na.Button>
        </Na.Content>
      </Na.Container>
    );
  }
}
