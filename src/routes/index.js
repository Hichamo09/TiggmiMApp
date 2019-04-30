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
});



const AppContainer = createAppContainer(AppNavigator);

export default AppContainer
