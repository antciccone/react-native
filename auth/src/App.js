import React, { Component } from 'react';
import firebase             from 'firebase';
import { View }             from 'react-native';
import Header               from './components/common/Header';
import Login                from './components/Login';
import Button               from './components/common/Button';
import Spinner              from './components/common/Spinner';
import CardSection          from './components/common/CardSection';

class App extends Component {
  state = { loggedIn: null}

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC4QSJPJl7gQQp-iw5n7mV4K2mitWRj038',
      authDomain: 'auth-d7669.firebaseapp.com',
      databaseURL: 'https://auth-d7669.firebaseio.com',
      projectId: 'auth-d7669',
      storageBucket: 'auth-d7669.appspot.com',
      messagingSenderId: '999327425988'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true })
      } else {
        this.setState({loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Logout
          </Button>
        </CardSection>)
      case false:
        return <Login />
      default:
        return <CardSection><Spinner /> </CardSection>
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
