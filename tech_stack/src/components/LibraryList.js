import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  // Text,
  // View,
  ListView
} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }
  renderRow(libraryData) {
    return <ListItem data={libraryData} />;
  }
  render() {
    return (
      <ListView
        style={styles.view_style}
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
const mapStateToProps = state => {
  const data = {};
  data.libraries = state.libraries;
  return data;
};
const styles = StyleSheet.create({
  view_style: {

  },
  view_text: {

  },
});

module.exports = connect(mapStateToProps)(LibraryList);
