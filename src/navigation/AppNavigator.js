import React from 'react'
import {Text, View, Image} from 'react-native'
import {DrawerItems, createDrawerNavigator, createAppContainer} from 'react-navigation'
import { ScrollView } from "react-native-gesture-handler";

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
      activeTintColor: '#FFF',
      activeBackgroundColor: '#2c5cbd'
    },
    contentComponent: (props) => (
      <ScrollView 
                    contentContainerStyle={{minHeight: '100%'}}>
      <View>
        <Image
          style={{width: '100%', height: 150}}
          source={require('../assets/img/gradient.png')}
        />
        <Text
          style={{
            textShadowColor:'#585858',
            textShadowOffset:{width: 5, height: 5},
            textShadowRadius:10,
            position: 'absolute',
            top: 75,
            right: 20,
            fontSize: 30,
            fontWeight: 'bold',
            color: '#DDD'
          }}>
          SmallService</Text>
        <DrawerItems {...props} />
      </View>
      </ScrollView>
    )
  }
)

export default AppNavigator = createAppContainer(AppNavigation)