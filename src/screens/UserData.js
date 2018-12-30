import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import { Icon } from "react-native-elements"
import { TileButton } from "../components/TileButton"
import MainViewLayout from "../layout/MainViewLayout"
import { connect } from 'react-redux'

class UserData extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        drawerLabel: 'Informacje'
    }

    render() {
        return (
            <MainViewLayout 
                openSideBar={this.props.navigation.openDrawer}
                onUserIconPress={() => this.props.navigation.navigate('UserData')}
            >
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

const mapStateToProps = state => {
    return {
        id: state.user.id,
        company: state.user.company, 
        name: state.user.name, 
        surname: state.user.surname,
    }
}

export default connect(mapStateToProps, null)(UserData)