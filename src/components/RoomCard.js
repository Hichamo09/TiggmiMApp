import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { _getRoomImage } from '../utils/_helpers'



export default class RoomCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.checked
    }
  }

  componentDidMount () {
    console.log('this<props<checked', this.props.checked);
    this.setState({checked: this.props.checked})
  }

  render() {
    const { container, card, roomImage, roomDetails, roomTitle,
      roomAccess, roomAccessText, roomAccessImg, roomAccessImgContainer, checked
    } = styles;

    return (
      <View style={this.state.checked ? {...container, borderColor: "#ccc", borderWidth: 4} : container}>
        <TouchableOpacity onPress={() => {
          if (this.props.select) {
            this.setState({checked: !this.state.checked})
            this.props.addRemoveRoom(this.props.item)
          }
        }}>
          <View style={card}>
            <Image style={roomImage} source={_getRoomImage(this.props.type)}/>
            <View style={roomDetails}>
              <View style={roomTitle}>
                <Text>{this.props.name}</Text>
              </View>
              <View style={roomAccess}>
                <Text style={roomAccessText}>Access: </Text>
                <View style={roomAccessImgContainer} >
                  <Image style={{...roomAccessImg}} source={require('../assets/light-room.png')}/>
                  <Image style={{...roomAccessImg}} source={require('../assets/window-room.png')}/>
                  <Image style={roomAccessImg} source={require('../assets/temperature.png')}/>
                </View>
              </View>
            </View>
            {
              this.state.checked ?
              <View style={checked}>
                <Feather name='check' size={28} color='#3581CD'/>
              </View>
              : null
            }

          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000000',
    padding: 5,
    margin: 5,
    borderRadius: 15,

  },
  card: {
    minHeight: 50,
    minWidth: "50%",
    flexDirection: "row"
  },
  roomImage: {
    flex: 1,
    height: 60,
    width: 95
  },
  roomDetails: {
    flex: 2,
    flexDirection: "column"
  },
  roomTitle: {
    flex: 1,
    marginLeft: 5

  },
  roomAccess: {
    flex: 2,
    marginTop: -5,
    marginLeft: 5
  },
  roomAccessText: {
    fontSize: 10
  },
  roomAccessImgContainer: {
    flexDirection: "row"
  },
  roomAccessImg: {
    marginTop: 3,
    marginLeft: 5,
    marginRight: 5
  }
});
