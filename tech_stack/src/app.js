import React, { Component } from 'react';
// import firebase from 'firebase';
import {
StyleSheet,
// Text,
View,
// ScrollView
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {
  Header,
  // Button,
  // Spinner,
  // CardSection
} from './components/common/';
import LibraryList from './components/LibraryList';


class App extends Component {
  state = {

  }
  componentWillMount() {

  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.view_style}>
          <Header headerText='Redux' />
          <LibraryList test='test' />
        </View>
      </Provider>
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
