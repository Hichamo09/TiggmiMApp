import React, { Component } from 'react'
import {
  View, Text,
} from 'react-native'
import styles from './main.styles'

export default class Screen3 extends Component {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{'Screen 3'}</Text>
      </View>
    )
  }
}
