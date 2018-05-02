import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail record={album} key={album.title} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;

// when you make a class component you need to use a render method that returns
// some jsx
