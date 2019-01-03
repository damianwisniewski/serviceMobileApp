import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"
import { Icon } from "react-native-elements"
import { TileButton } from "../components/TileButton"
import MainViewLayout from "../layout/MainViewLayout"
import { connect } from 'react-redux'
import { ContactInfo } from '../components/ContactInfo'
import { DataOutput } from '../components/DataOutput'
import { ScrollView } from "react-native-gesture-handler"

class UserData extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        drawerLabel: 'Informacje',
        drawerIcon: () => (
            <Icon name="info-circle" type='font-awesome' />
        )
    }

    render() {
        return (
            <MainViewLayout 
                screenTitle={UserData.navigationOptions.drawerLabel} 
                openSideBar={this.props.navigation.openDrawer}
                onUserIconPress={() => this.props.navigation.navigate('UserData')}
            >
                <ScrollView 
                    contentContainerStyle={{minHeight: '80%'}}>
                    <View style={styles.container}>
                        <DataOutput
                            title='ID Użytkownika:'
                            value={String(this.props.id)}
                        />
                        <DataOutput
                            title='Nazwa Firmy:'
                            value={this.props.company}
                        />
                        <DataOutput
                            title='Imię:'
                            value={this.props.name || '--------'}
                        />
                        <DataOutput
                            title='Nazwisko:'
                            value={this.props.surname || '--------'}
                        />
                    </View>
                    <ContactInfo />
                    </ScrollView>
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
      backgroundColor: '#CCC'
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