import React, { Component } from 'react';
// import firebase from 'firebase';
import {
StyleSheet,
// Text,
View,
// ScrollView
} from 'react-native';
import {
  Header,
  // Button,
  // Spinner,
  // CardSection
} from './components/common/';
// import LoginForm from './components/LoginForm';

class App extends Component {
  state = {

  }
  componentWillMount() {

  }
  render() {
    return (
      <View style={styles.view_style}>
        <Header headerText='Redux' />
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
