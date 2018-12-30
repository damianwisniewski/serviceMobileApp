import {createDrawerNavigator, createAppContainer} from 'react-navigation'

/**
 * SCREENS
 */
import LoginView from '../screens/LoginView'
import MainMenu from '../screens/MainMenu'


const AppNavigation = createDrawerNavigator(
  {
    Login: {
      screen: LoginView
    },
    MainMenu: {
      screen: MainMenu
    }
  },
  {
    initialRouteName: "Login",
    headerMode: 'none'
  }
)

export default AppNavigator = createAppContainer(AppNavigation)