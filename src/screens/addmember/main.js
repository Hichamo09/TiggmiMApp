import React, { Component } from 'react'
import {
  View, Image, Text, FlatList, Dimensions, ScrollView, TouchableOpacity, TextInput
} from 'react-native'
import styles from './main.styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import RoomCard from '../../components/RoomCard'

const windowWidth = Dimensions.get('window').width;
styles.roleColor = "#ff0000";

export default class AddMember extends Component {
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
            navigation.state.params.addMember();
          }}
        >
          <Feather name='check' size={28} color='#ffffff'/>
        </TouchableOpacity>
      </View>
    ),
  });

  constructor(props) {
    super(props);

    this.state = {
        temp: 12,
        city: 'Casablanca',
        full_name: "",
        phone_number: "",
        role: "",
        gender: "",
        hometemp: 27,
        roomdata: [
          {
            room: 'living',
          },
          {
            room: 'lemines',
          },
          {
            room: 'kitchen',
          },
          {
            room: 'bedroom1',
          },
          {
            room: 'bathroom',
          },
        ]
    };
  }

  componentDidMount () {
    this.props.navigation.setParams({
     addMember: this.addMember
    })
  }

  addMember = () => {
    this.props.addMember({
      full_name: this.state.full_name,
      phone_number: this.state.phone_number,
      gender: this.state.gender,
      role: this.state.role
    })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.nameHeader}>
          <View style={styles.topBackButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <FontAwesome name="chevron-left" size={22} color="#2B7CD9" />
            </TouchableOpacity>
          </View>
          <View style={styles.topName}>
            <Text style={styles.titleText}>Add Member</Text>
          </View>
          <View>
          </View>
        </View>
        <View style={styles.generalView}>
            <Text style={styles.title}>Gender:</Text>
            <View style={{flexDirection: 'row', padding: 5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({gender: "male"})
                }}
              >
                <Image
                  source={require('../../assets/male_gender.png')}
                  style={styles.genderImage}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({gender: "female"})
                }}
              >
                <Image
                  source={require('../../assets/female_gender.png')}
                  style={styles.genderImage}
                />
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.generalView}>
            <Text style={styles.title}>Information:</Text>
            <View style={styles.searchSection}>
                <View style={styles.inputIcon}>
                  <FontAwesome name='user' size={20} color='#3289c8'/>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    onChangeText={(full_name) => {this.setState({full_name})}}
                    underlineColorAndroid="transparent"
                    placeholderTextColor='#fff'
                />
            </View>
            <View style={styles.searchSection}>
                <View style={styles.inputIcon}>
                  <FontAwesome name='phone' size={20} color='#3289c8'/>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    onChangeText={(phone_number) => {this.setState({phone_number})}}
                    underlineColorAndroid="transparent"
                    placeholderTextColor='#fff'
                />
            </View>
        </View>
        <View style={styles.generalView}>
            <Text style={styles.title}>Role:</Text>

            <View style={styles.role}>
            <View style={styles.roleIcon(this.state.role === "admin" ? "#2587af" : "#999999")}>
                <Feather name='check' size={18} color='#ffffff'/>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({role: "admin"})
                }}
              >
                <Text style={styles.roleText}>Admin</Text>
              </TouchableOpacity>

              <View style={styles.roleIcon(this.state.role === "member" ? "#2587af" : "#999999")}>
                <Feather name='check' size={18} color='#ffffff'/>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({role: "member"})
                }}
              >
                <Text>Member</Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.List}>
            <Text style={styles.titleAccess}>Access:</Text>
              <FlatList
                data={this.state.roomdata}
                numColumns={2}
                renderItem={({item, index}) => (
                  <RoomCard name={item.room} type="bathroom" checked={false} />

                )}
              />
        </View>
      </ScrollView>
    )
  }
}
