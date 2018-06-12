import firebase from 'firebase'
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import LoginForm from './components/LoginForm'
import ReduxThunk from 'redux-thunk'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBZCM3JuMJizBia8yGJYWV_6zZ0aKNY1uI",
      authDomain: "manager-bbe5f.firebaseapp.com",
      databaseURL: "https://manager-bbe5f.firebaseio.com",
      projectId: "manager-bbe5f",
      storageBucket: "manager-bbe5f.appspot.com",
      messagingSenderId: "1013119503907"
    };    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

// in all redux apps u must provide one default reducer
export default App
