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
      globalEndTime: "23:59",
      selectedDays: [],
      roomsItemsTime: [],
      timePickerValue: "",
      refresh: false,
      refreshGlobal: false,
      selectedRoom: "",
      selectedItem: "",
      id: "",
      daysArray: [
        {id: 0, value: false, char: "M"},
        {id: 1, value: false, char: "T"},
        {id: 2, value: false, char: "W"},
        {id: 3, value: false, char: "T"},
        {id: 4, value: false, char: "F"},
        {id: 5, value: false, char: "S"},
        {id: 6, value: false, char: "S"},
      ]
    }
  }

  componentDidMount () {
    console.log('-------------this.props.rooms', this.props.rooms);
    this.setState({refresh: !this.state.refresh})
    this.props.navigation.setParams({
     addCycle: this.addCycle
    })
    //edit mode
    if (this.props.navigation.state.params) {
      if (this.props.navigation.state.params.hasOwnProperty('cycle')) {
        const { title, selectedRooms, globalStartTime, globalEndTime, roomsItemsTime, id, selectedDays} = this.props.navigation.state.params.cycle
        roomsItemsTimeEdited = roomsItemsTime.filter(item => item);
        let days = this.state.daysArray;
        for (var i = 0; i < days.length; i++) {
          if (selectedDays.includes(days[i].id)) {
            days[i].value = true;
          }
        }
        this.setState({
          editMode: true, cycleId: id, title, selectedRooms, globalStartTime, globalEndTime, selectedDays, roomsItemsTime: roomsItemsTimeEdited,  refresh: !this.state.refresh
        })
      }
    }

    this.setState({oldGlobalEndTime: this.state.globalEndTime, oldGlobalStartTime: this.state.globalStartTime})
  }

  checkedRoom = (id) => {
    let status = this.state.selectedRooms.includes(id);
    if (status) return true;
    return false
  }

  addCycle = () => {
    const { title, selectedRooms, globalStartTime, globalEndTime, roomsItemsTime, selectedDays } = this.state
    let data = {
      title,
      selectedRooms,
      globalStartTime,
      globalEndTime,
      roomsItemsTime,
      selectedDays
    }

    if (this.state.editMode) {
      this.props.updateCycle(this.state.cycleId ,data)
    }else {
      this.props.addCycle(data)
    }

  }

  addRemoveRoom = (item) => {
    // let index = this.state.selectedRooms.findIndex(x => x === item.id);
    let index = this.state.selectedRooms.indexOf(item.id);
    if (index > -1) {
      // this.state.selectedRooms
      let arr = this.state.selectedRooms.filter(x => x !== item.id);
      return this.setState({selectedRooms: arr})
    }

    let roomsItemsTime = [...this.state.roomsItemsTime]
    for (var i = 0; i < item.pins.length; i++) {
      roomsItemsTime.push({
        id: item.id,
        pin: item.pins[i].id,
        type: item.pins[i].type,
        startTime: this.state.globalStartTime,
        endTime: this.state.globalEndTime,
        value: false
      })
    }
    this.setState({selectedRooms: [...this.state.selectedRooms, item.id],
      roomsItemsTime: roomsItemsTime
    })

  }

  onCancel() {
    this.setState({globalEndTime: this.state.oldGlobalEndTime, globalStartTime: this.state.oldGlobalStartTime})
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    switch (this.state.timePickerValue) {
      case "globalStartTime":
        this.setState({globalStartTime: `${hour}:${minute}`})
        break;
      case "globalEndTime":
        this.setState({globalEndTime: `${hour}:${minute}`})
        break;
      case "roomTime":
        let arr = Object.assign([], this.state.roomsItemsTime);
        let obj = arr.find((x, i) => {
          return x.id === this.state.selectedRoom && i === this.state.selectedItem
        });
        obj[this.state.timeType] = `${hour}:${minute}`
        this.setState({
          roomsItemsTime: arr,
          refresh: !this.state.refresh
        })
      default:
        console.log('default');
    }
    if (this.state.roomsItemsTime.length > 0) {
      setTimeout(() => {
        this.adjustItemsTime()
      }, 500);
    }
    this.TimePicker.close();
  }

  adjustItemsTime = () => {
    let arr = Object.assign([], this.state.roomsItemsTime)
    arr = arr.map((item, index) => {
      if (parseInt(item.startTime.replace(":", "")) < parseInt(this.state.globalStartTime.replace(":", ""))) {
        item.startTime = this.state.globalStartTime
      }
      if (parseInt(item.startTime.replace(":", "")) < parseInt(this.state.globalStartTime.replace(":", ""))) {
        item.startTime = this.state.globalStartTime
      }
      if (parseInt(item.endTime.replace(":", "")) > parseInt(this.state.globalEndTime.replace(":", ""))) {
        item.endTime = this.state.globalEndTime
      }
      if (parseInt(item.endTime.replace(":", "")) > parseInt(this.state.globalEndTime.replace(":", ""))) {
        item.endTime = this.state.globalEndTime
      }
      return item;

    });
    this.setState({roomsItemsTime: arr, refresh: !this.state.refresh})
  }

  handleGlobalTime = (type) => {
    switch (type) {
      case "start":
        this.setState({timePickerValue: "globalStartTime",  oldGlobalStartTime: this.state.globalStartTime, globalStartTime: "00:00"})
        break;
      case "end":
        this.setState({timePickerValue: "globalEndTime", oldGlobalEndTime: this.state.globalEndTime, globalEndTime: "23:00"})
        break;
    }
    this.TimePicker.open()
  }

  handleSelectedDays = (id) => {
    let days = this.state.daysArray;

    let index = this.state.selectedDays.indexOf(id);
    if (index !== -1) {
        days[id].value = false;
        this.state.selectedDays.splice(index, 1);
        return this.setState({refreshGlobal: !this.state.refreshGlobal})
    }
    days[id].value = true;

    this.setState({selectedDays: [...this.state.selectedDays, id], daysArray: days}, () => {
      this.setState({refreshGlobal: !this.state.refreshGlobal})
    })
  }


  handleSelectedDaysStyle = (id) => {
    let index = this.state.selectedDays.indexOf(id);
    if (index !== -1) {
        return "#2587af"
    }
    return "#ccc"
  }

  renderDays = (item) => {
    item = item.item

    return (
      <TouchableOpacity
        style={{backgroundColor: item.value ? "#2587af" : "#ccc", width: 30, height: 30, borderRadius: 100, margin: 5}}
        onPress={() => this.handleSelectedDays(item.id)}
      >
        <Text style={{fontSize: 20, color: "#fff", textAlign: "center"}}>{item.char}</Text>
      </TouchableOpacity>
    )
  }

  renderRoomsItem = (item, index, room) => {
    item = item;
    return (
      <View style={styles.roomItems}>
        <View style={styles.itemTitle}>
          <Text>{item.type}</Text>
        </View>
        <View style={styles.itemController}>

        </View>
        <View style={{flex: 0.5, textAlign: "center", alignItems: "center"}}>
          <Text>\</Text>
        </View>

        <View style={styles.itemStartTime}>
          <TouchableOpacity
          onPress={() => {
            this.setState({timePickerValue: "roomTime", selectedRoom: room.id, selectedItem: index, timeType: "startTime"})
            this.TimePicker.open()
          }}
          >
          <Text style={{...styles.time, fontSize: 14}}>
          {this.state.roomsItemsTime[index].startTime}
          </Text>
          <Text style={styles.smallText}>start</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.5, textAlign: "center", alignItems: "center"}}>
          <Text>\</Text>
        </View>

        <View style={styles.itemEndTime}>
        <TouchableOpacity
        onPress={() => {
          this.setState({timePickerValue: "roomTime", selectedRoom: room.id, selectedItem: index, timeType: "endTime"})
          this.TimePicker.open()
        }}
        >
        <Text style={{...styles.time, fontSize: 14}}>

        {this.state.roomsItemsTime[index].endTime}
        </Text>
        <Text style={styles.smallText}>end</Text>
        </TouchableOpacity>
        </View>

      </View>
    )

  }

  renderSelectedRooms = (item) => {
    let room = this.props.rooms.find(x => x.id === item.item);

    return (
      <View style={styles.roomBlock}>
        <Text style={styles.roomTitle}>{room.title}</Text>

        <FlatList
          data={room.pins}
          extraData={this.state.refresh}
          numColumns={1}
          renderItem={({item, index}) => (
            this.renderRoomsItem(item, index, room)
          )}
        />

{
  // <View style={styles.roomItems}>
  // <View style={styles.itemTitle}>
  // <Text>Shutter</Text>
  // </View>
  // <View style={styles.itemController}>
  //
  // </View>
  // <View style={{flex: 0.5, textAlign: "center", alignItems: "center"}}>
  // <Text>\</Text>
  // </View>
  //
  // <View style={styles.itemStartTime}>
  // <TouchableOpacity
  // onPress={() => {
  //   this.setState({timePickerValue: "roomTime", selectedRoom: room.id, selectedItem: "item2", timeType: "startTime"})
  //   this.TimePicker.open()
  // }}
  // >
  // <Text style={{...styles.time, fontSize: 14}}>
  // {this.state.roomsItemsTime.find(x => x.id === room.id).item2.startTime}
  // </Text>
  // <Text style={styles.smallText}>start</Text>
  // </TouchableOpacity>
  // </View>
  //
  // <View style={{flex: 0.5, textAlign: "center", alignItems: "center"}}>
  // <Text>\</Text>
  // </View>
  //
  // <View style={styles.itemEndTime}>
  // <TouchableOpacity
  // onPress={() => {
  //   this.setState({timePickerValue: "roomTime", selectedRoom: room.id, selectedItem: "item2", timeType: "endTime"})
  //   this.TimePicker.open()
  // }}
  // >
  // <Text style={{...styles.time, fontSize: 14}}>
  // {this.state.roomsItemsTime.find(x => x.id === room.id).item2.endTime}
  // </Text>
  // <Text style={styles.smallText}>end</Text>
  // </TouchableOpacity>
  // </View>
  // </View>

}
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
          {
            // this.state.selectedRooms.length > 0 && this.state.editMode ?
            <FlatList
              data={this.props.rooms}
              extraData={this.state.refresh}
              numColumns={2}
              renderItem={({item, index}) => {
                return (
                  <RoomCard
                    name={item.title}
                    type={item.type}
                    item={item}
                    addRemoveRoom={this.addRemoveRoom}
                    checked={this.checkedRoom(item.id)}
                    id={item.id}
                    select={true}
                  />

                )
              }}
            />
            // : null
          }
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
                  this.handleGlobalTime("start")
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
              this.handleGlobalTime("end")

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
            maxHour={this.state.globalEndTime.length === 5 ? this.state.globalEndTime.substring(0,2) : this.state.globalEndTime.substring(0,1) }
            minHour={this.state.globalStartTime.length === 5 ? this.state.globalStartTime.substring(0,2) : this.state.globalStartTime.substring(0,1) }
          />

            <FlatList
              contentContainerStyle={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 10}}
              data={this.state.daysArray}
              extraData={this.state.refreshGlobal}
              numColumns={7}
              renderItem={this.renderDays}
            />


        </View>


      </ScrollView>
    );
  }
}
