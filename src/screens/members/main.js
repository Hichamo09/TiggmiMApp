import React, { Component } from 'react'
import {
  View, Image, Text, FlatList, ScrollView, TouchableOpacity
} from 'react-native'
import styles from './main.styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FAB } from 'react-native-paper';

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

  componentDidMount () {
    this.props.getMembers();
  }

  render () {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.titleText}>Members</Text>

            <View style={styles.List}>
              <FlatList
                data={this.props.members}
                numColumns={2}
                renderItem={({item, index}) => (
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile', {member: item})}>
                    <View style={styles.listview}>
                      <Image
                        style={styles.listImage}
                        source={item.gender === "male" ? require('../../assets/man-image.png') : require('../../assets/woman-image.png')}
                        resizeMode="contain"
                      />
                      <Text style={styles.itemName}>{item.full_name}</Text>
                      <Text style={styles.itemRole}>{item.role}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>

          </View>
        </ScrollView>
        <View style={styles.fabContainer}>
          <FAB
            style={styles.fab}
            icon="add"
            color="#fff"
            onPress={() => this.props.navigation.navigate('AddMember')}
          />
        </View>
      </View>
    )
  }
}
