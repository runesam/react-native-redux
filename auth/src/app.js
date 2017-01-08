import React, { Component } from 'react';
import firebase from 'firebase';
import {
StyleSheet,
// Text,
View,
// ScrollView
} from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
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
      this.setState({ loggedIn: user !== null });
      console.log(this.state.loggedIn);
      console.log(user);
    });
  }
  logUserOut() {
    firebase.auth().signOut();
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button text='Log Out' onPressMe={this.logUserOut.bind(this)} />
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ flex: 1 }}>
            <Spinner size='large' />
          </View>
        );
    }
  }
  render() {
    return (
      <View style={styles.view_style}>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view_style: {
    flex: 1
  },
  view_text: {

  },
});

module.exports = App;
