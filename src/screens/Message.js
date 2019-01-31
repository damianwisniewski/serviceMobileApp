import React, { Component } from "react"
import { StyleSheet, ScrollView, Picker } from "react-native"
import { Icon } from "react-native-elements"
import { CustomInput } from "../components/CustomInput"
import { SelectInput } from "../components/SelectInput"
import { CustomTextarea } from "../components/CustomTextarea"
import { CustomButton } from "../components/CustomButton"
import { connect } from 'react-redux'
import MainViewLayout from "../layout/MainViewLayout"
import CustomModal from "../components/Modal"
import { requestDB } from "../helpers/dataRequest";

class Message extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            text: '',
            popMessage: '',
            dataSend: false,
            isModalVisible: false
        }
    }

    static navigationOptions = {
        drawerLabel: 'Wyślij wiadomość',
        drawerIcon: () => (
            <Icon name="newsletter" type='entypo' />
        )
    }

    componentWillMount = () => {
        this.setState({ id: this.props.id })
    }

    clearForm = () => {
        this.setState({
            text: ''
        });
    }

    delayedHideModal = () => {
        setTimeout(() => this.setState({isModalVisible: false}), 2500)
    }
    
    isFormFilled = () => {
        return this.state.id && this.state.text
    }

    sendEmail() {
        this.setState({popMessage: ""})
        this.setState({isModalVisible: true})

        if(!this.isFormFilled()) {
            this.setState({popMessage: "Uzupełnij treść wiadomości", dataSend: false, isModalVisible: true})
            this.delayedHideModal()
            return
        } 

        fetch(`http://aplikacja-wsb.herokuapp.com/api/send-email`, {
            method: 'POST',
            body: JSON.stringify({
                to: 'wsb.service.api@gmail.com',
                subject: `Wiadomość od uytkownika ${this.state.id}`,
                text: this.state.text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            this.setState({popMessage: "Wiadomość została wysłana", dataSend: true, isModalVisible: true})
            this.clearForm()
            this.delayedHideModal()
        }).catch(() => {
            this.setState({popMessage: "Przepraszamy coś poszło nie tak!", dataSend: false, isModalVisible: true})
            this.delayedHideModal()
        })
    }

    render() {
        return (
            <MainViewLayout
                screenTitle={Message.navigationOptions.drawerLabel}  
                openSideBar={this.props.navigation.openDrawer}
                onUserIconPress={() => this.props.navigation.navigate('UserData')}
            >

            { this.state.isModalVisible && (
                <CustomModal 
                    text={ this.state.popMessage || 'Wysyłanie' }
                    stopAnimate={Boolean(this.state.popMessage)}
                    fail={!this.state.dataSend}
                />
            ) }

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

                    <CustomTextarea 
                        numberOfLines={15}
                        title='Treść wiadomości:'
                        placeholder='Tutaj wpisz treść zgłoszenia...'
                        onChangeText={ text => this.setState({ text: text })}
                        value={this.state.text}
                    />

                    <CustomButton 
                        title='Wyślij!'
                        onPress={() => this.sendEmail()}
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

export default connect(mapStateToProps, null)(Message)