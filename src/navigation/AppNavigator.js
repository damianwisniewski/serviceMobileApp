import {createDrawerNavigator, createAppContainer} from 'react-navigation'

/**
 * SCREENS
 */
import LoginView from '../screens/LoginView'
import MainMenu from '../screens/MainMenu'
import NewNotification from '../screens/NewNotification'
import UserData from '../screens/UserData'

const AppNavigation = createDrawerNavigator(
  {
    Login: {
      screen: LoginView
    },
    MainMenu: {
      screen: MainMenu
    },
    NewNotification: {
      screen: NewNotification
    },
    UserData: {
      screen: UserData
    }
  },
  {
    initialRouteName: "Login",
    headerMode: 'none',
    contentOptions: {
      activeTintColor: '#e91e63',
    }
  }
)

export default AppNavigator = createAppContainer(AppNavigation)