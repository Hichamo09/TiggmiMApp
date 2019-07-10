  import React, { Component } from 'react'
import {
  View, Image, Text, FlatList, Dimensions, ScrollView, TouchableOpacity, ActivityIndicator
} from 'react-native'
import styles from './main.styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import rooms from './rooms';
import { _getRoomImage } from '../../utils/_helpers'


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
      <View style={{marginRight:12, width: 36, height: 36, backgroundColor:'#55bf64', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.state.params.doorController();
          }}
        >
          {
            navigation.state.params ?
            navigation.state.params.door_status ?
              <Image source={require('../../assets/door_closed.png')}/>
            :
              <Image source={require('../../assets/door_opened.png')}/>
            :
            null
          }
        </TouchableOpacity>
      </View>
    ),
  });

  constructor(props) {
    super(props);

    this.state = {
        temp: 12,
        city: 'Casablanca',
        hometemp: 27,
        door_status: true,
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

  componentDidMount () {
    this.props.navigation.setParams({
     doorController: this.doorController,
     door_status: this.state.door_status
   })
    this.props.checkAuth();
    this.props.getRooms();

  }

  doorController = () => {
    this.setState({door_status: !this.state.door_status}, () => {
      this.props.navigation.setParams({
       door_status: this.state.door_status
     })

    })
  }


  render () {
    if (this.props.user.hasOwnProperty('uid') && this.props.rooms.length < 1) {
      if (this.state.getRoomStatus !== "done") {
        this.props.getRooms();
        this.setState({getRoomStatus: "done"})
      }
      return (
        <View style={{alignItems: "center", justifyContent: "center", marginTop: 100}}>
          <ActivityIndicator size="large" color="#669de6" />
        </View>
      )
    }else if (this.props.rooms.length > 0) {
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
                  data={this.props.rooms}
                  numColumns={3}
                  renderItem={({item, index}) => (
                    <TouchableOpacity onPress={() => {
                      this.props.navigation.navigate('Rooms', {room_id: index})
                    }}>
                      <Image
                        style={styles.nano}
                        source={_getRoomImage(item.type)}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>

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
    }else {
      return (
          <View style={{alignItems: "center", justifyContent: "center", marginTop: 100}}>
            <ActivityIndicator size="large" color="#669de6" />
          </View>
      )
    }

  }
}
