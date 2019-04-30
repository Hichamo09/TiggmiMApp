import { createStackNavigator, createAppContainer } from "react-navigation";


//screens
import Login from '../screens/login';
import Dashboard from '../screens/dashboard';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'Dashboard',// if you are working on a specific page in dev mode you can switch from here

});



const AppContainer = createAppContainer(AppNavigator);

export default AppContainer
