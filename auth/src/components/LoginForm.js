import React, { Component } from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  Text,
  View,
  // TextInput
} from 'react-native';
import { Button, Card, CardSection, AppTextInput, Spinner } from './common/';

class LoginForm extends Component {
  state= {
    Email: '',
    PassWord: '',
    error: '',
    loading: false,
    loginSuccess: false,
    signupSuccess: false
  }
  onEverythingFail() {
    console.log('onEverythingFail');
    this.setState({ error: 'Authentication Failed', loading: false });
  }
  onLoginSuccess() {
    console.log('onLoginSuccess');
    this.setState({
      Email: '',
      PassWord: '',
      loading: false,
      error: '',
      loginSuccess: true
    });
  }
  onSignupSuccess() {
    console.log('onSignupSuccess');
    this.setState({
      Email: '',
      PassWord: '',
      loading: false,
      error: '',
      signupSuccess: true
    });
  }
  onPressMe() {
    if (!this.state.loading) {
      console.log('start');
      this.setState({ error: '', loading: true });
      firebase.auth().signInWithEmailAndPassword(this.state.Email, this.state.PassWord)
        .then(this.onLoginSuccess.bind(this))
        .catch(
          () => {
            firebase.auth().createUserWithEmailAndPassword(this.state.Email, this.state.PassWord)
              .then(this.onSignupSuccess.bind(this))
              .catch(this.onEverythingFail.bind(this));
          }
        )
        ;
    }
  }
  updateInput(type, value) {
    this.setState({ [type]: value });
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return <Button text={'Login'} onPressMe={this.onPressMe.bind(this)} />;
  }
  render() {
    return (
      <View style={styles.view_style}>
        <Card>
          <CardSection>
            <AppTextInput
              text='E-mail'
              placeholder='example@test.com'
              name='Email'
              onChangeText={this.updateInput.bind(this)}
              keyboardType={'email-address'}
            />
          </CardSection>
          <CardSection>
            <AppTextInput
              text='Password'
              placeholder='password'
              name='PassWord'
              onChangeText={this.updateInput.bind(this)}
              secureTextEntry
            />
          </CardSection>
          <Text style={styles.error_text}>{this.state.error}</Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view_style: {

  },
  view_text: {

  },
  error_text: {
    fontSize: 15,
    color: 'red',
    paddingTop: 5,
    paddingLeft: 5,
    alignSelf: 'center'

  }
});

module.exports = LoginForm;
