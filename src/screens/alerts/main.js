import React, { Component } from 'react'
import {
    View, Image, Text, FlatList, ScrollView, TouchableOpacity
} from 'react-native'
import styles from './main.styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';





export default class Alert extends Component {
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
            alerts: [
                {
                    type: 'Alert',
                    message: 'The room light is on for more than 24h',
                    time: 'now'
                },
                {
                    type: 'Information',
                    message: 'You can control the temperature if you have an AC',
                    time: '1 hour ago'
                },
                {
                    type: 'Update',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    time: '3 days ago'
                },
                {
                    type: 'Alert',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    time: '4 days ago'
                },
                {
                    type: 'Update',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    time: '4 days ago'
                },
                {
                    type: 'Update',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    time: '4 days ago'
                },
                {
                    type: 'Update',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    time: '4 days ago'
                },
                {
                    type: 'Update',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    time: '4 days ago'
                },
                {
                    type: 'Update',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    time: '4 days ago'
                },
            ]
        };
    }

    renderDetail = (item) => {
        return (
            <View style={styles.notification}>
                <View style={styles.notificationHeader}>
                    <Text style={styles.notificationType}>{item.type}</Text>
                    <Text style={styles.notificationMsg}>{item.time}</Text>
                </View>
                <View style={styles.notificationDetail}>
                    <Text style={styles.notificationMsg}>{item.message}</Text>
                </View>
            </View>
        )
    }

    componentDidMount () {

    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Alerts</Text>
                    <View style={styles.List}>
                        <FlatList
                            data={this.state.alerts}
                            renderItem={({item, index}) => (
                                this.renderDetail(item)
                            )}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
