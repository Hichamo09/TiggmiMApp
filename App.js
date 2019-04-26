import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Root } from 'native-base';
import { Provider } from 'react-redux';

import AppContainer from './src/routes'
import store from './src/store';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppContainer />
        </Root>
      </Provider>
    );
  }
}



export default App;
