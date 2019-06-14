import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import styles from './main.styles';
const windowWidth = Dimensions.get('window').width;

export default class RoomDetailsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
          shutterValue: [
            {
              id: 0,
              value: 0
            },
            {
              id: 2,
              value: 20
            }
          ],
          lightValue: 0,
          refresh: true

        }
    }


    controlShutter = (id, type) => {
      let arr = Object.assign([], this.state.shutterValue)
      console.log('arr', arr);
      let index = arr.findIndex(x => x.id === id);
      console.log('index', index);
      if (type === "down" && arr[index].value <= 0) return false;
      if (type === "up" && arr[index].value >= 250) return false;

      if (type === "up") {
        arr[index].value = arr[index].value + 20;
      }else {
        arr[index].value = arr[index].value - 20;
      }
      console.log('final arr', arr);
      this.setState({shutterValue: arr, refresh: !this.state.refresh})

    }

    getshutterValue = (id) => {
      console.log('this.state.shutterValue', this.state.shutterValue);
      let value = this.state.shutterValue.find(x => x.id === id).value
      console.log('value', value);
      return value
    }


    renderShutters = (item) => {
      console.log('ite(((((((((((((((m--------', item);
      item = item.item;
      return (
        <View style={styles.shutterContainer}>
          <View style={{...styles.shutterValue, height: this.getshutterValue(item.id) / 2}}>
          </View>
          <Image
            source={require('../../assets/window-room.png')}
            style={{width: 40, position: "absolute", bottom: 30, zIndex: 1}}
          />
          <TouchableOpacity
            style={{width: 50, height: 50, position: "absolute", bottom: 25, left: 10, zIndex: 1}}
            onPress={() => {
              this.controlShutter(item.id, "down")
            }}
          >
            <Image
              style={{width: 30, height: 30, position: "absolute", bottom: 10, left: 10, zIndex: 1}}
              source={require('../../assets/down.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: 50, height: 50, position: "absolute", bottom: 25, right: 10, zIndex: 1}}
            onPress={() => {
              this.controlShutter(item.id, "up")
            }}
          >
          <Image
            source={require('../../assets/up.png')}
            style={{width: 30, height: 30, position: "absolute", bottom: 10, right: 10, zIndex: 1}}
          />
          </TouchableOpacity>

        </View>
      )

    }


    render() {

        return (
            <View styles={styles.roomDetailsComponent} >
              <View style={{flexDirection: "row", alignItems: "center"}}>

                <FlatList
                  data={this.props.room ? this.props.room.pins.filter(item => item.type === "shutter") : []}
                  renderItem={this.renderShutters}
                  numColumns={2}
                  extraData={this.state.refresh}
                />




                {
                  this.props.room ?
                    this.props.room.pins.find(x => x.type === "light") ?
                    <TouchableOpacity onPress={() => {
                      this.setState({lightValue: !this.state.lightValue})
                    }}>
                      <View style={styles.lightContainer}>
                        <View style={{...styles.lightValue, height: this.state.lightValue ? "100%" : 0}}>
                        </View>
                          <Image
                            source={require('../../assets/light-room.png')}
                            style={{width: 30, position: "absolute", bottom: 20, zIndex: 1}}
                          />
                      </View>
                    </TouchableOpacity>
                    : null
                    : null
                }


              </View>


            </View>
        )
    }
}
