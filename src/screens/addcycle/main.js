import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';
import styles from './main.styles'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RoomCard from '../../components/RoomCard'
import TimePicker from "react-native-24h-timepicker";




export default class AddCycle extends Component {

  static navigationOptions = ({navigation, state}) => ({
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
      <View style={{marginRight:12, width: 36, height: 36, backgroundColor:'#999999', alignItems: 'center', justifyContent: 'center', borderRadius:20, borderWidth: 1, borderColor: '#999999',}}>
        <TouchableOpacity
          onPress={() => {
            navigation.state.params.addCycle();
          }}
        >
          <Feather name='check' size={28} color='#ffffff'/>
        </TouchableOpacity>
      </View>
    ),
  });

  constructor (props) {
    super(props)
    this.state = {
      selectedRooms: [],
      title: "",
      selectedTime: "",
      globalStartTime: "07:00",
      globalEndTime: "20:00",
      roomsItemsTime: [
        {}
      ],
      timePickerValue: "",
      refresh: false
    }
  }

  componentDidMount () {
    this.props.navigation.setParams({
     addCycle: this.addCycle
    })
    this.props.getRooms()
  }

  addCycle = () => {
    const { title, selectedRooms } = this.state
    let data = {
      title,
      selectedRooms,
    }

    this.props.addCycle(data)
  }

  addRemoveRoom = (id) => {
    console.log('this.state.selectedRooms', this.state.selectedRooms, "id", id);
    // let index = this.state.selectedRooms.findIndex(x => x === id);
    let index = this.state.selectedRooms.indexOf(id);
    console.log('----------index', index);
    if (index > -1) {
      // this.state.selectedRooms
      let arr = this.state.selectedRooms.filter(x => x !== id);
      console.log('arr-', arr);
      return this.setState({selectedRooms: arr})
    }
    this.setState({selectedRooms: [...this.state.selectedRooms, id],
      roomsItemsTime: [...this.state.roomsItemsTime, {
        id: id,
        item1: {
          startTime: "7:00",
          endTime: "7:00"
        },
        item2: {
          startTime: "17:00",
          endTime: "17:00"
        }
      }]
    })

  }

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    switch (this.state.timePickerValue) {
      case "globalStartTime":
      console.log('globalEndTime');
        this.setState({globalStartTime: `${hour}:${minute}`})
        break;
      case "globalEndTime":
      console.log('globalEndTime');
        this.setState({globalEndTime: `${hour}:${minute}`})
        break;
      default:
        console.log('default');
    }
    this.TimePicker.close();
  }

  renderSelectedRooms = (item) => {
    let room = this.props.rooms.find(x => x.id === item.item);
    return (
      <View style={styles.roomBlock}>
        <Text style={styles.roomTitle}>{room.title}</Text>
        <View style={styles.roomItems}>
          <View style={styles.itemTitle}>
            <Text>Light</Text>
          </View>
          <View style={styles.itemController}>

          </View>
          <View style={{flex: 0.5, textAlign: "center", alignItems: "center"}}>
            <Text>\</Text>
          </View>

          <View style={styles.itemStartTime}>
            <TouchableOpacity
              onPress={() => {
                this.setState({timePickerValue: "globalStartTime"})
                this.TimePicker.open()
              }}
            >
              <Text style={{...styles.time, fontSize: 14}}>
                7:00
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 0.5, textAlign: "center", alignItems: "center"}}>
            <Text>\</Text>
          </View>

          <View style={styles.itemEndTime}>
            <Text style={{...styles.time, fontSize: 14}}>17:00</Text>
          </View>
        </View>
        <View style={styles.roomItems}>
          <View style={styles.itemTitle}>
            <Text>Shutter</Text>
          </View>
          <View style={styles.itemController}>

          </View>
          <View style={{flex: 0.5, textAlign: "center", alignItems: "center"}}>
            <Text>\</Text>
          </View>

          <View style={styles.itemStartTime}>
            <Text style={{...styles.time, fontSize: 14}}>17:00</Text>
          </View>

          <View style={{flex: 0.5, textAlign: "center", alignItems: "center"}}>
            <Text>\</Text>
          </View>

          <View style={styles.itemEndTime}>
            <Text style={{...styles.time, fontSize: 14}}>17:00</Text>
          </View>
        </View>
      </View>
    )
  }




  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.nameHeader}>
          <View style={styles.topBackButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <FontAwesome name="chevron-left" size={22} color="#2B7CD9" />
            </TouchableOpacity>
          </View>
          <View style={styles.topName}>
            <Text style={styles.titleText}>Add a cycle</Text>
          </View>
          <View>
          </View>
        </View>
        <View style={styles.topView}>
          <TextInput
            style={styles.titleInput}
            value={this.state.title}
            onChangeText={title => this.setState({title}) }
            placeholder="TITLE"
          />
        </View>

        <View style={styles.block}>
          <View >
            <Text style={styles.blockTitle}>Peripherals:</Text>
          </View>
          <FlatList
            data={this.props.rooms}
            extraData={this.state.selectedRooms}
            numColumns={2}
            renderItem={({item, index}) => (
              <RoomCard
                name={item.title}
                type={item.type}
                addRemoveRoom={this.addRemoveRoom}
                id={item.id}
                select={true}
              />

            )}
          />
        </View>

        <View style={{...styles.block, marginBottom: 50}}>
          <View >
            <Text style={styles.blockTitle}>Schedule:</Text>
          </View>

          <View  style={styles.blockRow}>
            <View style={{flex:1}}>
              <Text style={styles.blockSubTitle}>Global Start Time</Text>
            </View>
            <View style={{flex:1, textAlign: "center", alignItems: "flex-end", marginRight: 30}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({timePickerValue: "globalStartTime"})
                  this.TimePicker.open()
                }}
              >
                <Text style={styles.time}>{this.state.globalStartTime}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={this.state.selectedRooms}
            renderItem={this.renderSelectedRooms}
            extraData={this.state.refresh}
          />


          <View  style={styles.blockRow}>
            <View style={{flex:1}}>
              <Text style={styles.blockSubTitle}>Global End Time</Text>
            </View>
            <View style={{flex:1, textAlign: "center", alignItems: "flex-end", marginRight: 30}}>
            <TouchableOpacity
            onPress={() => {
              this.setState({timePickerValue: "globalEndTime"})
              this.TimePicker.open()
            }}
            >
              <Text style={styles.time}>{this.state.globalEndTime}</Text>
            </TouchableOpacity>
            </View>
          </View>
          <TimePicker
            ref={ref => {
              this.TimePicker = ref;
            }}
            onCancel={() => this.onCancel()}
            onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
          />


        </View>


      </ScrollView>
    );
  }
}
