import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  // Text,
  View
} from 'react-native';

const Header = require('./src/components/header');

const albums = React.createClass({
  render: () => (
      <View style={styles.container}>
          <Header item={'Albums'} />
      </View>
    )
});

const styles = StyleSheet.create({
  container: {

  }
});

AppRegistry.registerComponent('albums', () => albums);
