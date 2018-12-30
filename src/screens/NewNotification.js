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
        drawerLabel: 'Zgłoszenie Awarii'
    }

    render() {
        return (
            <MainViewLayout 
                openSideBar={this.props.navigation.openDrawer}
                onUserIconPress={() => this.props.navigation.navigate('UserData')}
            >
                <ScrollView 
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={styles.container}
                >
                    <CustomInput
                        style={styles.input} 
                        title='Twój numer id:'
                        value={String(this.props.id)}
                        editable={false}
                    />
                    <CustomInput 
                        title='Twój numer id:'
                    />
                    <CustomInput 
                        title='Twój numer id:'
                    />
                    <CustomTextarea 
                        title='Twój numer id:'
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
  },

  input: {
      width: '100%',
      backgroundColor: '#FFF',
      elevation: 3,
      shadowOffset: { width: 20, height: 20 },
      shadowColor: "#000",
      shadowOpacity: 0.4,
      shadowRadius: 1,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#CCC',
      padding: 5,
      fontSize: 16
  }
})

const mapStateToProps = state => {
    return {
        id: state.user.id
    }
}

export default connect(mapStateToProps, null)(NewNotification)