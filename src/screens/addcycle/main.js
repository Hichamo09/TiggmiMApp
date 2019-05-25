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
            console.log('save');
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
      selectedRooms: []
    }
  }

  componentDidMount () {
    this.props.getRooms()
  }

  addRemoveRoom = (id) => {
    let index = this.state.selectedRooms.findIndex(x => x === id);
    if (index > -1) {
      this.state.selectedRooms
      return this.setState({selectedRooms: this.state.selectedRooms.splice(index, 1)})
    }
    this.setState({selectedRooms: [...this.state.selectedRooms, id]})

  }

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }

  renderSelectedRooms = (item) => {
    console.log('--------selectedRooms', this.state.selectedRooms);
    console.log('item', item, 'props', this.props);
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
            <Text style={{...styles.time, fontSize: 14}}>17:00</Text>
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
                onPress={() => this.TimePicker.open()}
              >
                <Text style={styles.time}>17:00</Text>
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={this.state.selectedRooms}
            renderItem={this.renderSelectedRooms}
            extraData={this.state.selectedRooms}
          />


          <View  style={styles.blockRow}>
            <View style={{flex:1}}>
              <Text style={styles.blockSubTitle}>Global End Time</Text>
            </View>
            <View style={{flex:1, textAlign: "center", alignItems: "flex-end", marginRight: 30}}>
              <Text style={styles.time}>7:00</Text>
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
