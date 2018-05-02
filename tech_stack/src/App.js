import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { View } from 'react-native';

const App = () => {
  return (
    <Provider store={createStore}>
      <View />
    </Provider>
  )
}

export default App;
