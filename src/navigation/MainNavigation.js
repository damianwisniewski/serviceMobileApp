import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigation = createStackNavigator(
    {
      MainView: {
        screen: MainView
      },
      MainView: {
        screen: MainView
      },
      MainView: {
        screen: MainView
      }
    },
    {
      initialRouteName: 'MainView',
      headerMode: 'none'
    }
  )

export const Navigation = createAppContainer(MainNavigation)