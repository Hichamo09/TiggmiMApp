import { createStackNavigator, createAppContainer } from "react-navigation";


//screens
import Login from '../screens/login';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
});



const AppContainer = createAppContainer(AppNavigator);

export default AppContainer
