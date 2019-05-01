import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import { firebase_config } from './src/config'
import AppContainer from './src/routes'
import store from './src/store';
import NavigationService from './src/routes/navigationService'

console.disableYellowBox = true

class App extends Component {

  componentWillMount () {
    firebase.initializeApp(firebase_config);
  }

  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppContainer
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </Root>
      </Provider>
    );
  }
}



export default App;
