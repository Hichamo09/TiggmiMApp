import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import { firebase_config } from './src/config'
import AppContainer from './src/routes'
import store from './src/store';
import NavigationService from './src/routes/navigationService'

import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';

const errorHandler = (e, isFatal) => {
  if (isFatal) {
    Alert.alert(
        'Unexpected error occurred',
        `
        Error: ${(isFatal) ? 'Fatal:' : ''} ${e.name} ${e.message}
        We have reported this to our team ! Please close the app and start again!
        `,
      [{
        text: 'Close'
      }]
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler(errorHandler, true);

setNativeExceptionHandler((errorString) => {
    console.log('setNativeExceptionHandler');
});


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
