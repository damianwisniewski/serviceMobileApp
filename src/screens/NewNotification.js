import React, { Component } from "react"
import { StyleSheet, ScrollView, Picker } from "react-native"
import { Icon } from "react-native-elements"
import { TileButton } from "../components/TileButton"
import MainViewLayout from "../layout/MainViewLayout"
import { CustomInput } from "../components/CustomInput"
import { SelectInput } from "../components/SelectInput"
import { CustomTextarea } from "../components/CustomTextarea"
import { CustomButton } from "../components/CustomButton"
import { connect } from 'react-redux'

class NewNotification extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            category: '',
            program: '', 
            text: '',
            popMessage: ''
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

    ifFormFilled = () => {
        const isValid = this.state.id && this.state.category && this.state.program && this.state.text
        
        if(!isValid) {
            this.setState({popMessage: 'Musisz wypełnić wszystkie pola!'})
        }

        return isValid
    }

    sendData = () => {
        if(!this.isFormFilled()) return
        
        fetch(`http://aplikacja-wsb.herokuapp.com/api/new-issue`, {
            method: "PUT",
            body: JSON.stringify({
                id: this.props.id,
                category: this.props.category,
                program: this.props.program,
                text: this.props.text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
          .then(res => {
            if(res.done) {
                this.clearForm();
                this.setState({popMessage: "Dobra robota! Zgłoszenie zostało pomyślnie wysłane", dataSend: true})
            } else {
                this.setState({popMessage: "Coś poszło nie tak! Nire udało się wysłać zgłoszenia, Być może podałeś ZŁY NUMER ZGŁOSZENIA", dataSend: false})
            }
        })
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

                    <SelectInput 
                        title='Kategoria zgłoszenia:'
                        onValueChange={ text => this.setState({ category: text })}
                        selectedValue={this.state.category}
                        itemsArray={[
                            'sdsdsda',
                            'sfsdsfdsgd',
                            'gfgsd'
                        ]}
                    />

                    <SelectInput 
                        title='Kategoria zgłoszenia:'
                        onValueChange={ text => this.setState({ program: text })}
                        selectedValue={this.state.program}
                        itemsArray={[
                            'sdsdsda',
                            'sfsdsfdsgd',
                            'gfgsd'
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
                    />

                </ScrollView>
            </MainViewLayout>
        )
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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