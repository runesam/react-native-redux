import React, { Component } from 'react';
import {
StyleSheet,
// Text,
// View,
ScrollView
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  }
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => {
      this.setState({ albums: response.data });
    });
  }
  render() {
    return (
      <ScrollView style={styles.view_style}>
        {
          this.state.albums.map((album, i) =>
            <AlbumDetail album={album} key={i} />
          )
        }
      </ScrollView>
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
