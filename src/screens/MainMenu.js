import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import { Icon } from "react-native-elements"
import { TileButton } from "../components/TileButton"
import MainViewLayout from "../layout/MainViewLayout"

export default class MainMenu extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        drawerLabel: 'Menu Główne',
        drawerIcon: () => (
            <Icon name="home" />
        )
    }
    render() {
        return (
            <MainViewLayout
                screenTitle={MainMenu.navigationOptions.drawerLabel} 
                openSideBar={this.props.navigation.openDrawer}
                onUserIconPress={() => this.props.navigation.navigate('UserData')}
            >
                <View style={styles.container}>
                    <TileButton 
                        title='Awaria'
                        iconName='bug'
                        iconType='font-awesome'
                        iconColor='#444'
                        iconSize={40}
                        onPress={() => this.props.navigation.navigate('NewNotification')}/>

                    <TileButton 
                        title='Reklamacja'
                        iconName='warning'
                        iconType='font-awesome'
                        iconColor='#444'
                        iconSize={40}
                        onPress={() => this.props.navigation.navigate('NewComplain')}/>

                    <TileButton 
                        title='Funkcjonalność'
                        iconName='rocket'
                        iconType='font-awesome'
                        iconColor='#444'
                        iconSize={40}
                        onPress={() => this.props.navigation.navigate('NewFeature')}/>

                    <TileButton 
                        title='Twoje Zgłoszenia'
                        iconName='check-square-o'
                        iconType='font-awesome'
                        iconColor='#444'
                        iconSize={40}
                        onPress={() => this.props.navigation.navigate('YourNotify')}/>

                    <TileButton 
                        title='Wyślij wiadomość'
                        iconName='newsletter'
                        iconType='entypo'
                        iconColor='#444'
                        iconSize={40}
                        onPress={() => this.props.navigation.navigate('Message')}/>
                </View>
            </MainViewLayout>
        )
    }
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
  }
})