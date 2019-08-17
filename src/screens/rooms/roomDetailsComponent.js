import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import styles from './main.styles';
const windowWidth = Dimensions.get('window').width;

export default class RoomDetailsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
          shutterValue: [],
          lightValue: 0,
          refresh: true

        }
    }

    componentWillMount() {
      if (this.props.room.pins.find(x => x.type === "light")) {
        console.log('this.props.room', this.props.room.pins.find(x => x.type === "light"));
        this.setState({lightValue: this.props.room.pins.find(x => x.type === "light").value})
      }
      let shutters = [];
      for (var i = 0; i < this.props.rooms.length; i++) {
        let obj = this.props.rooms[i].pins.filter(item => item.type === "shutter");
        shutters = shutters.concat(obj);
      }
      let shutterValue = shutters.map((item, index) => {
        item.value = 20;
        return item;
      });
      this.setState({shutterValue})
    }

    componentWillReceiveProps(nextProps) {
      console.log('will componentWillReceiveProps', this.props.room.pins, nextProps.room.pins);
      if (this.props.room.id !== nextProps.room.id) {
        console.log('looooooooool', this.props.room.pins.find(x => x.type === "light").value);
        this.setState({lightValue: nextProps.room.pins.find(x => x.type === "light").value}, () => {
          console.log('this.state', this.state.lightValue);
        })
      }
    }



    controlShutter = (id, type) => {
      let arr = Object.assign([], this.state.shutterValue)
      let index = arr.findIndex(x => x.id === id);
      if (type === "down" && arr[index].value <= 0) return false;
      if (type === "up" && arr[index].value >= 250) return false;

      if (type === "up") {
        arr[index].value = arr[index].value + 20;
      }else {
        arr[index].value = arr[index].value - 20;
      }
      this.setState({shutterValue: arr, refresh: !this.state.refresh})

    }

    getshutterValue = (id) => {
      let value = this.state.shutterValue.find(x => x.id === id).value
      return value
    }

    controlLight = () => {
      console.log('this.props.room', this.props.room);
      let id = this.props.room.pins.find(x => x.type === "light").id
      this.setState({lightValue: !this.state.lightValue}, () => {
        let data = {
          pin_id: id,
          room_id: this.props.room.id,
          value: this.state.lightValue
        }

        this.props.control(data)

      })
    }


    renderShutters = (item) => {
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
                      this.controlLight()
                    }}>
                      {
                        this.state.lightValue ?
                        <View style={styles.lightContainer}>
                            <Image
                              source={require('../../assets/light-on.png')}
                              style={{height: 120, width: 50, position: "absolute", zIndex: 1}}
                            />
                        </View>
                        :
                        <View style={styles.lightContainer}>
                            <Image
                              source={require('../../assets/light-off.png')}
                              style={{height: 120, width: 50, position: "absolute", zIndex: 1}}
                            />
                        </View>
                      }

                    </TouchableOpacity>
                    : null
                    : null
                }





              </View>

               
            </View>
        )
    }
}
