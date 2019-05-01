import React, { Component } from 'react'
import {
  View, Image, Text, FlatList, Dimensions, ScrollView, TouchableOpacity
} from 'react-native'
import styles from './main.styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import rooms from './rooms';

const windowWidth = Dimensions.get('window').width;

export default class Home extends Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomColor: '#3b82cc',
      borderBottomWidth: 1,
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      shadowRadius: 0,
      elevation: 0

    },
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View style={{marginLeft:12}}>
          <FontAwesome name='list-ul' size={30} color='#3b82cc'/>
        </View>
      </TouchableOpacity>
    ),
    headerRight: (
      <View style={{marginRight:12, width: 36, height: 36, backgroundColor:'#55bf64', alignItems: 'center', justifyContent: 'center',}}>
        <Feather name='lock' size={28} color='#ffffff'/>
      </View>
    ),
  });

  constructor(props) {
    super(props);

    this.state = { 
        temp: 12,
        city: 'Casablanca',
        hometemp: 27,
        roomdata: [
          {
            room: 'bedroom1',
          },
          {
            room: 'bathroom1',
          },
          {
            room: 'bathroom2',
          },
          {
            room: 'kitchen',
          },
          {
            room: 'bedroom2',
          },
          {
            room: 'living',
          }
        ]
    };
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.topView}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Image
              style={styles.Image}
              source={require('../../assets/sun.png')}
            />
          </TouchableOpacity>
          <View style={styles.cityTemp}>
            <Text style={styles.Temp}>{this.state.temp}</Text>
            <Text style={styles.Degree}>o</Text>
          </View>
          <Text style={styles.houseTemp}>{this.state.city}</Text>
        </View>
        <View style={styles.List}>
              <FlatList
                data={this.state.roomdata}
                numColumns={3}
                renderItem={({item, index}) => (
                  <Image
                    style={styles.nano}
                    source={rooms[item.room].url}
                    resizeMode="contain"
                  />
                )}
              />
        </View>
        <View style={styles.tempView}>
          <View style={styles.House}>
            <Text style={styles.houseTemp}>House</Text>
            <Text style={styles.houseTemp}>Temperature</Text>
          </View>
          <View style={styles.tempView}>
            <Text style={styles.Temp}>{this.state.hometemp}</Text>
            <Text style={styles.Degree}>o</Text>
            <Text style={styles.Temp}>C</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}
