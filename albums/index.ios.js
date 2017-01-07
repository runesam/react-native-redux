import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  // Text,
  View
} from 'react-native';

const Header = require('./src/components/header');
const AlbumList = require('./src/components/AlbumList');

class albums extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Header item={'Albums'} />
          <AlbumList item={'Album List'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('albums', () => albums);
