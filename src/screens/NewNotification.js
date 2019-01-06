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

class NewNotification extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            category: '',
            program: '', 
            text: '',
            popMessage: '',
            dataSend: false,
            isModalVisible: false
        }
    }

    static navigationOptions = {
        drawerLabel: 'Zgłoszenie Awarii',
        drawerIcon: () => (
            <Icon name="bug" type='font-awesome' />
        )
    }

    componentWillMount = () => {
        this.setState({ id: this.props.id })
    }

    clearForm = () => {
        this.setState({
            program: '',
            category: '',
            text: ''
        });
    }

    delayedHideModal = () => {
        setTimeout(() => this.setState({isModalVisible: false}), 2500)
    }
    
    isFormFilled = () => {
        const isValid = this.state.id && this.state.category && this.state.program && this.state.text
        
        if(!isValid) {
            this.setState({popMessage: 'Musisz wypełnić wszystkie pola!'})
        }

        console.log(this.state.id, this.state.category, this.state.program, this.state.text)
        return isValid
    }

    sendData = () => {
        this.setState({popMessage: ""})

        if(!this.isFormFilled()) {
            this.setState({popMessage: "Wypełnij wszystkie dane!", dataSend: false, isModalVisible: true})
            this.delayedHideModal()
            return
        }

        fetch(`http://aplikacja-wsb.herokuapp.com/api/new-issue`, {
            method: "PUT",
            body: JSON.stringify({
                id: this.state.id,
                category: this.state.category,
                program: this.state.program,
                text: this.state.text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
          .then(res => {
            if(res.done) {
                this.clearForm();
                this.setState({popMessage: "Dobra robota! Zgłoszenie zostało pomyślnie wysłane", dataSend: true, isModalVisible: true})
                this.delayedHideModal()
            } else {
                this.setState({popMessage: "Coś poszło nie tak! Nie udało się wysłać zgłoszenia, Być może podałeś ZŁY NUMER ZGŁOSZENIA", dataSend: false, isModalVisible: true})
                this.delayedHideModal()
            }
        })
        .catch(err => {
            this.setState({popMessage: "Przepraszamy, pojawiły sie problemy techniczne", dataSend: false, isModalVisible: true})
            this.delayedHideModal()
        })
    }

    render() {
        return (
            <MainViewLayout
                screenTitle={NewNotification.navigationOptions.drawerLabel}  
                openSideBar={this.props.navigation.openDrawer}
                onUserIconPress={() => this.props.navigation.navigate('UserData')}
            >

            { this.state.isModalVisible && (
                <CustomModal 
                    text={ this.state.popMessage }
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

                    <SelectInput 
                        title='Kategoria zgłoszenia:'
                        onValueChange={ value => this.setState({ category: value })}
                        selectedValue={this.state.category}
                        itemsArray={[
                            'Interfejs aplikacji',
                            'Wyświetlanie danych',
                            'Przetwarzanie danych',
                            'Tworzenie dokumentów',
                            'Przekazywanie informacji',
                            'Inna...'
                        ]}
                    />

                    <SelectInput 
                        title='Kategoria zgłoszenia:'
                        onValueChange={ value => this.setState({ program: value })}
                        selectedValue={this.state.program}
                        itemsArray={[
                            'Drukarz',
                            'Mortes',
                            'Inspektor'
                        ]}
                    />

                    <CustomTextarea 
                        title='Treść zgłoszenia:'
                        placeholder='Tutaj wpisz treść zgłoszenia...'
                        onChangeText={ text => this.setState({ text: text })}
                        value={this.state.text}
                    />

                    <CustomButton 
                        title='Wyślij!'
                        onPress={() => this.sendData()}
                    />

                </ScrollView>
            </MainViewLayout>
        )
    }
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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