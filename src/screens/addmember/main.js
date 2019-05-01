import React, { Component } from 'react'
import {
  View, Image, Text, FlatList, Dimensions, ScrollView, TouchableOpacity, TextInput
} from 'react-native'
import styles from './main.styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import rooms from './rooms';

const windowWidth = Dimensions.get('window').width;

export default class AddMember extends Component {
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
      <View style={{marginRight:12, width: 36, height: 36, backgroundColor:'#999999', alignItems: 'center', justifyContent: 'center', borderRadius:20, borderWidth: 1, borderColor: '#999999',}}>
        <Feather name='check' size={28} color='#ffffff'/>
      </View>
    ),
  });

  constructor(props) {
    super(props);

    this.state = { 
        temp: 12,
        city: 'Casablanca',
        searchString: '',
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
        <View style={{paddingTop: 20, paddingLeft: 10,}}>
            <Text style={{fontSize: 20, color: '#3d3d3d',}}>Gender:</Text>
            <View style={{flexDirection: 'row', padding: 5}}>
              <Image
                source={require('../../assets/male_gender.png')}
                style={{width: 70, height: 70}}
              />
              <Image
                source={require('../../assets/female_gender.png')}
                style={{width: 70, height: 70}}
              />
            </View>
        </View>
        <View style={{paddingTop: 20, paddingLeft: 10,}}>
            <Text style={{fontSize: 20, color: '#3d3d3d',}}>Information:</Text>
            <View style={styles.searchSection}>
                <View style={{marginRight:12, width: 26, height: 26, backgroundColor:'#FFF', alignItems: 'center', justifyContent: 'center', borderRadius:20, borderWidth: 1, borderColor: '#FFF',}}>
                  <FontAwesome name='user' size={20} color='#3289c8'/>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    onChangeText={(searchString) => {this.setState({searchString})}}
                    underlineColorAndroid="transparent"
                    placeholderTextColor='#fff'
                />
            </View>
            <View style={styles.searchSection}>
                <View style={{marginRight:12, width: 26, height: 26, backgroundColor:'#FFF', alignItems: 'center', justifyContent: 'center', borderRadius:20, borderWidth: 1, borderColor: '#FFF',}}>
                  <FontAwesome name='phone' size={20} color='#3289c8'/>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    onChangeText={(searchString) => {this.setState({searchString})}}
                    underlineColorAndroid="transparent"
                    placeholderTextColor='#fff'
                />
            </View>
        </View>
        <View style={{paddingTop: 20, paddingLeft: 10,}}>
            <Text style={{fontSize: 20, color: '#3d3d3d',}}>Role:</Text>
            <View style={{flexDirection: 'row', padding: 5}}>
              <View style={{marginRight:12, width: 20, height: 20, backgroundColor:'#999999', alignItems: 'center', justifyContent: 'center', borderRadius:20, borderWidth: 1, borderColor: '#999999',}}>
                <Feather name='check' size={18} color='#ffffff'/>
              </View>
              <Text style={{paddingRight: 20}}>Admin</Text>
              <View style={{marginRight:12, width: 20, height: 20, backgroundColor:'#999999', alignItems: 'center', justifyContent: 'center', borderRadius:20, borderWidth: 1, borderColor: '#999999',}}>
                <Feather name='check' size={18} color='#ffffff'/>
              </View>
              <Text>Member</Text>
            </View>
        </View>
        <View style={styles.List}>
            <Text style={{fontSize: 20, color: '#3d3d3d', marginLeft: 10}}>Access:</Text>
              <FlatList
                data={this.state.roomdata}
                numColumns={2}
                renderItem={({item, index}) => (
                  <Image
                    style={{ width: (windowWidth/2), height: 80 }}
                    //source={{uri:'../../assets/sun.png'}}
                    source={rooms[item.room].url}
                    resizeMode="contain"
                  />
                )}
              />
        </View>
      </ScrollView>
    )
  }
}
