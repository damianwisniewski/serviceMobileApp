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

class NewComplain extends Component {

    static navigationOptions = {
        drawerLabel: 'Nowa Reklamacja',
        drawerIcon: () => (
            <Icon name="warning" type='font-awesome' />
        )
    }

    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            category: '',
            issueNubmer: 0, 
            text: '',
            popMessage: '',
            issueNumbers: [],
            dataSend: false,
            isModalVisible: false
        }
    }

    componentWillMount = () => {
        this.setState({ id: this.props.id })
        this.getNotifications(this.props.id)
    }

    clearForm = () => {
        this.setState({
            issueNubmer: '',
            category: '',
            text: ''
        });
    }

    delayedHideModal = () => {
        setTimeout(() => this.setState({isModalVisible: false}), 2500)
    }
    
    isFormFilled = () => {
        const isValid = this.state.id && this.state.category && this.state.issueNubmer && this.state.text
        if(!isValid) {
            this.setState({popMessage: 'Musisz wypełnić wszystkie pola!'})
        }
        return isValid
    }

    getNotifications = (id) => {
        fetch(`http://aplikacja-wsb.herokuapp.com/api/get-all-notifications/${id}`)
            .then(res => res.json())
            .then(res => {    
                if(res) {
                    const resData = [...res.data.issues]
                    let dataToDisplay = []
                    resData.forEach((item) => dataToDisplay.push(`${item.id_zgloszenia}`))
                    this.setState({issueNumbers: dataToDisplay})
                } 
            })
    }

    sendData = () => {
        this.setState({popMessage: ""})
        this.setState({isModalVisible: true})

        if(!this.isFormFilled()) {
            this.setState({popMessage: "Wypełnij wszystkie dane!", dataSend: false, isModalVisible: true})
            this.delayedHideModal()
            return
        }

        requestDB({
            url: `http://aplikacja-wsb.herokuapp.com/api/new-complain`,
            method: 'PUT',
            body: JSON.stringify({
                id: this.state.id,
                issueNubmer: this.state.issueNubmer,
                text: this.state.text
            })
        }).then(res => {
            this.clearForm();
            this.setState({popMessage: res.message, dataSend: res.dataSend, isModalVisible: true})
        }).catch(res => {
            this.setState({popMessage: res.message, dataSend: res.dataSend, isModalVisible: true})
        }).finally(() => {
            this.delayedHideModal()
        })
    }

    

    render() {
        return (
            <MainViewLayout
                screenTitle={NewComplain.navigationOptions.drawerLabel}  
                openSideBar={this.props.navigation.openDrawer}
                onUserIconPress={() => this.props.navigation.navigate('UserData')}
            >

            { this.state.isModalVisible && (
                <CustomModal 
                    text={ this.state.popMessage || 'Wysyłanie...' }
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
                        title='Numer zgłoszenia do reklamacja:'
                        placeholder='Numer zgłoszenia...'
                        onValueChange={ value => this.setState({ issueNubmer: value })}
                        selectedValue={this.state.issueNubmer}
                        itemsArray={[
                            ...this.state.issueNumbers
                        ]}
                    />

                    <SelectInput 
                        title='Przyczyna reklamacji:'
                        placeholder='Przyczyna reklamacji...'
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

                    <CustomTextarea 
                        title='Treść reklamacji:'
                        placeholder='Tutaj wpisz treść reklamacji...'
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

export default connect(mapStateToProps, null)(NewComplain)