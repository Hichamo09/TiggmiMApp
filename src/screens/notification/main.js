import React, { Component } from 'react'
import {
    View, Image, Text, FlatList, ScrollView, TouchableOpacity
} from 'react-native'
import styles from './main.styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { _notificationTime } from '../../utils/_helpers';




export default class Notification extends Component {
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

        };
    }

    renderDetail = (item) => {
        return (
            <View style={styles.notification}>
                <View style={styles.notificationHeader}>
                    <Text style={styles.notificationType}>{item.type}</Text>
                    <Text style={styles.notificationMsg}>{_notificationTime(item.time)}</Text>
                </View>
                <View style={styles.notificationDetail}>
                    <Text style={styles.notificationMsg}>{item.message}</Text>
                </View>
            </View>
        )
    }

    componentDidMount () {
      this.props.getNotifications();
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Notifications</Text>
                    <View style={styles.List}>
                        <FlatList
                            data={this.props.notifications}
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
