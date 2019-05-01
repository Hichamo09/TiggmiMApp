import React, { Component } from 'react'
import {
  View, Image, Text, FlatList, Dimensions, ScrollView, TouchableOpacity
} from 'react-native'
import styles from './main.styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FAB } from 'react-native-paper';


const windowWidth = Dimensions.get('window').width;

export default class Members extends Component {
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
  });

  constructor(props) {
    super(props);

    this.state = { 
        members: [
          {
            name: 'Lemine Soulami',
            role: 'admin',
            image: "require('../../assets/man-image.png')"
          },
          {
            name: 'Fanae Kimaha',
            role: 'member',
            image: "require('../../assets/man-image.png')"
          },
          {
            name: 'Kala Soulami',
            role: 'member',
            image: "require('../../assets/man-image.png')"
          },
          {
            name: 'Kounima Soulami',
            role: 'member',
            image: "require('../../assets/man-image.png')"
          },
        ]
    };
  }

  render () {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.titleText}>Members</Text>
            
            <View style={styles.List}>
              <FlatList
                data={this.state.members}
                numColumns={2}
                renderItem={({item, index}) => (
                  <View style={{ alignItems: 'center', justifyContent: 'center', height: 200, borderColor: '#d6d6d6', borderWidth: 1, width: (windowWidth/2) + 2, marginLeft: -1}}>
                    <Image
                      style={{ width: 90, height: 90 }}
                      source={require('../../assets/man-image.png')}
                      resizeMode="contain"
                    />
                    <Text style={{color:'#205ea5', fontWeight: '400', fontSize: 18}}>{item.name}</Text>
                    <Text style={{color:'#000000', fontWeight: 'bold', fontSize: 16}}>{item.role}</Text>
                  </View>
                  
                )}
              />
            </View>
            
          </View>
        </ScrollView>
        <View>
          <FAB
            style={{
              position: 'absolute',
              margin: 16,
              right: 0,
              bottom: -100,
              backgroundColor:'#145bb4'
            }}
            icon="add"
            color="#fff"
            onPress={() => this.props.navigation.navigate('AddMember')}
          />
        </View>
      </View>
    )
  }
}
