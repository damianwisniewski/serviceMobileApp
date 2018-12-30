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
        drawerLabel: 'Home'
    }
    render() {
        return (
            <MainViewLayout openSideBar={this.props.navigation.openDrawer}>
                <View style={styles.container}>
                    <TileButton 
                        title='Awaria'
                        onPress={() => console.log()}/>
                    <TileButton 
                        title='Reklamacja'
                        onPress={() => console.log()}/>
                    <TileButton 
                        title='Funkcjonalność'
                        onPress={() => console.log()}/>
                    <TileButton 
                        title='Status Zgłoszeń'
                        onPress={() => console.log()}/>
                    <TileButton 
                        title='Zanane Awarie'
                        onPress={() => console.log()}/>
                    <TileButton 
                        title='O nas'
                        onPress={() => console.log()}/>
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