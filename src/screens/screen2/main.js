import React, { Component } from 'react'
import {
  View, Text,
} from 'react-native'
import styles from './main.styles'

export default class Screen2 extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{'Screen 2'}</Text>
      </View>
    )
  }
}
