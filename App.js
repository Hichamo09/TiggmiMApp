import pollyfill from './src/app/polyfill';

import React from 'react'
import { Provider, connect } from 'react-redux'
import { Router } from 'react-native-router-flux'
import { View } from 'react-native'
import configureStore from './src/store/configureStore'
import getScenes from './src/router/router'

const containerStyle = { flex: 1 }

const RouterWithRedux = connect()(Router)

console.disableYellowBox = true

export default class App extends React.Component {
  componentWillMount () {
    this.store = configureStore()
  }

  render () {
    return (
      <Provider store={this.store}>
        <View style={containerStyle}>
          <RouterWithRedux scenes={getScenes()} />
        </View>
      </Provider>
    )
  }
}
