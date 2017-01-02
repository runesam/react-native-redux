import React, { Component } from 'react';
import {
StyleSheet,
Text,
View
} from 'react-native';

class AlbumList extends Component {
  render() {
    return (
      <View style={styles.view_style}>
        <Text style={styles.view_text}>
          {this.props.item}
        </Text>
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

module.exports = AlbumList;
