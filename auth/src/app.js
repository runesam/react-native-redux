import React, { Component } from 'react';
import firebase from 'firebase';
import {
StyleSheet,
// Text,
View,
// ScrollView
} from 'react-native';
import { Header } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: false
  }
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAoNkNy2OCCkgy-lF4wtQbZjhcGd0ZtvKc',
      authDomain: 'runesamauth.firebaseapp.com',
      databaseURL: 'https://runesamauth.firebaseio.com',
      storageBucket: 'runesamauth.appspot.com',
      messagingSenderId: '645951626433'
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: user !== false });
      console.log(this.state.loggedIn);
      console.log(user);
    });
  }
  render() {
    return (
      <View style={styles.view_style}>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view_style: {

  },
  view_text: {

  },
});

module.exports = App;
