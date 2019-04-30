import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';


export default class Dashboard extends Component {

  componentWillMount () {
    this.props.checkAuth();
  }
  render() {
    return (
      <View>
        <Text>Dashboard Screeen</Text>
      </View>
    );
  }
}
