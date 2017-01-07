import React, { Component } from 'react';
import {
StyleSheet,
Text,
View,
Image,
Linking
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetail extends Component {
  state = {

  }
  componentWillMount() {

  }
  onPress() {
    Linking.openURL(this.props.album.url);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle} source={{ uri: this.props.album.thumbnail_image }}
            />
          </View>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{this.props.album.title}</Text>
            <Text>{this.props.album.artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={styles.imageStyle} source={{ uri: this.props.album.image }}
          />
        </CardSection>
        <CardSection>
          <Button
            text={this.props.album.title}
            onPressMe={this.onPress.bind(this)}
          />
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  headerTextStyle: {
    fontSize: 20
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

module.exports = AlbumDetail;
