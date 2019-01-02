import React, { Component } from "react"
import { StyleSheet, View, ScrollView } from "react-native"
import { Icon } from "react-native-elements"
import { TileButton } from "../components/TileButton"
import MainViewLayout from "../layout/MainViewLayout"
import { CustomInput } from "../components/CustomInput"
import { CustomTextarea } from "../components/CustomTextarea"
import { CustomButton } from "../components/CustomButton"
import { connect } from 'react-redux'

class NewNotification extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        drawerLabel: 'Zgłoszenie Awarii',
        drawerIcon: () => (
            <Icon name="bug" type='font-awesome' />
        )
    }

    render() {
        return (
            <MainViewLayout
                screenTitle={NewNotification.navigationOptions.drawerLabel}  
                openSideBar={this.props.navigation.openDrawer}
                onUserIconPress={() => this.props.navigation.navigate('UserData')}
            >
                <ScrollView 
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={styles.container}
                >
                    <CustomInput
                        title='Twój numer id:'
                        value={String(this.props.id)}
                        editable={false}
                    />
                    <CustomInput 
                        title='Twój numer id:'
                        placeholder='Tutaj wpisz treść zgłoszenia...'
                    />
                    <CustomInput 
                        title='Twój numer id:'
                        placeholder='Tutaj wpisz treść zgłoszenia...'
                    />
                    <CustomTextarea 
                        title='Treść zgłoszenia:'
                        placeholder='Tutaj wpisz treść zgłoszenia...'
                    />
                    <CustomButton 
                        title='Wyślij!'
                    />
                </ScrollView>
            </MainViewLayout>
        )
    }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  }
})

const mapStateToProps = state => {
    return {
        id: state.user.id
    }
}

export default connect(mapStateToProps, null)(NewNotification)