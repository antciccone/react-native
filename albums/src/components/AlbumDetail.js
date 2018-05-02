import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  const { headerContentStyle,
    thumbnailStyle,
    imageStyle,
    thumbnailContainerStyle,
    headerText
  } = styles;
  // destructuing is very prevelant in react.
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
          style={thumbnailStyle}
          source={{ uri: props.record.thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerText}> {props.record.title} </Text>
          <Text> {props.record.artist} </Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
        style={imageStyle}
        source={{ uri: props.record.image }}
        />
      </CardSection>
      <CardSection>
        // passing down a function to button component
        <Button onPress={() => Linking.openURL(props.record.url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
export default AlbumDetail;
