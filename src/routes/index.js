import React, { Component } from 'react'
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import { Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//screens
import Login from '../screens/login';
import Dashboard from '../screens/dashboard';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';
import Home from '../screens/home';
import Notification from '../screens/notification';
import Members from '../screens/members';
import AddMember from '../screens/addmember';
import Cycles from '../screens/cycles';
import Profile from '../screens/profile';
import Rooms from '../screens/rooms';
import Alert from '../screens/alerts';
import Help from '../screens/help';

import drawerContentComponents from '../screens/custom/menu';

const windowWidth = Dimensions.get('window').width;

const HomeStack = createStackNavigator(
  {
    Home: Home,
    Notification: Notification,
    Members: Members,
    AddMember: AddMember,
    Cycles: Cycles,
    Profile: Profile,
    Rooms: Rooms,
    Alert: Alert,
    Help: Help,
  },
  {
    initialRouteName: "AddMember"
  }
);

const DrawerNavigator = createDrawerNavigator({
  Home: HomeStack,
},{
  drawerWidth: windowWidth - 40,
  contentComponent: drawerContentComponents
});

const TabNavigator = createBottomTabNavigator(
  {
    Screen2: Screen2,
    Home: DrawerNavigator,
    Screen3: Screen3
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = FontAwesome;
        let iconName;
        if (routeName === 'Home') {
          //iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          iconName = 'home';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          //IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Screen2') {
          iconName = `recycle`;
        }else if (routeName === 'Screen3') {
          iconName = `dashboard`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={34} color={tintColor}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#1d65c6',
      inactiveTintColor: '#bbbbbb',
      showLabel: false,
      style:{
        borderTopWidth:1,
        borderTopColor:'#95c3f4',
        height: 55,
        paddingHorizontal:30,
        marginBottom: 8,
      },
    },
  }
);

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'Login',// if you are working on a specific page in dev mode you can switch from here

});

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AppNavigator,
    App: TabNavigator,
  },
  {
    initialRouteName: 'App',
  }
));

//const AppContainer = createAppContainer(AppNavigator);

export default AppContainer
