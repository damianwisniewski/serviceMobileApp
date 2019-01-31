import React, { Component } from "react"
import { StyleSheet, ScrollView, Text, View, Animated, Easing } from "react-native"
import { Icon } from "react-native-elements"
import { connect } from 'react-redux'
import MainViewLayout from "../layout/MainViewLayout"
import { FooterNavBar } from '../components/FooterNavBar'
import { DataListElement } from "../components/DataListElement";
import DataModal from "../components/DataModal";
import { dateParser } from "../helpers/dateParser";

class YourNotify extends Component {

    static navigationOptions = {
        drawerLabel: 'Twoje Zgłoszenia',
        drawerIcon: () => (
            <Icon name="check-square-o" type='font-awesome' />
        )
    }

    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            issues: [],
            complains: [], 
            features: [],
            selectedData: [],
            actualOption: '',
            
            type: '',
            nrNotify: '',
            status: '',
            date: '',
            modalClientText: '',
            modalAdminText: '',

            isModalVisible: false
        }

        this.getNotifications(this.props.id)
        this.spinValue = new Animated.Value(0)
    }

    componentWillMount = () => {
        this.setState({ id: this.props.id })
        this.spin()
    }

    getNotifications(id) {
        fetch(`http://aplikacja-wsb.herokuapp.com/api/get-all-notifications/${id}`)
            .then(res => res.json())
            .then(res => {    
                if(res) {
                    this.setState({
                        selectedData: res.data.issues,
                        actualOption: 'Lista Awarii',
                        issues: res.data.issues,
                        complains: res.data.complains,
                        features: res.data.functionalities
                    })
                } 
            })
    }

    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
          this.spinValue,
          {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear
          }
        ).start(() => this.spin())
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        return (
            <MainViewLayout
                screenTitle={YourNotify.navigationOptions.drawerLabel}  
                openSideBar={this.props.navigation.openDrawer}
                onUserIconPress={() => this.props.navigation.navigate('UserData')}
            >

            { 
                this.state.isModalVisible ? (
                    <DataModal
                        onClosePress={() => {this.setState({ isModalVisible: false })}}
                        type = {this.state.type}
                        nrNotify = {this.state.nrNotify}
                        status = {this.state.status}
                        date = {dateParser(this.state.date)}
                        clientText = {this.state.modalClientText}
                        adminText = {this.state.modalAdminText}
                    />
                ) : <Text></Text>
            }

                <ScrollView 
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={styles.container}
                >
                    {
                        this.state.selectedData.length < 1 
                        ?
                        <View>
                            <Text style={{fontSize: 25, marginBottom: 50, marginTop: 20}}>Loading...</Text>

                            <Animated.View style={{
                                width: 50,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                transform: [{rotate: spin}] }}>
                                <Icon name="loader" type="feather" color="#00aced" size={55} />
                            </Animated.View>
                        </View>
                        :
                        this.state.selectedData.map(item => {
                            return <DataListElement
                                key={Math.random() * 100 * Math.random()}
                                items={item} 
                                onPress={() => { this.setState({
                                    type: item.type,
                                    nrNotify: item.id_zgloszenia || data.id_reklamacja || data.id_funkcjonalnosc,
                                    status: item.stan_zgloszenia || data.stan_reklamacji || data.stan_funkcjonalnosc,
                                    date: item.data_zgloszenia || item.data_reklamacji || item.data_funkcjonalnosc,
                                    modalClientText: item.tresc,
                                    modalAdminText: item.uwagi,
                                    isModalVisible: true
                                })}} />
                        })
                    }

                </ScrollView>
                <FooterNavBar
                    buttonOne = 'Awarie'
                    buttonTwo = 'Reklamacje'
                    buttonThree = 'Funkcje'
                    onPressButtonOne = {() => { this.setState({
                        selectedData: this.state.issues,
                        actualOption: 'Lista Awarii'
                    }) }}
                    onPressButtonTwo = {() => { this.setState({
                        selectedData: this.state.complains,
                        actualOption: 'Lista Reklamacji'
                    }) }}
                    onPressButtonThree = {() => { this.setState({
                        selectedData: this.state.features,
                        actualOption: 'Lista Funkcjonalności'
                    }) }}
                />

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

export default connect(mapStateToProps, null)(YourNotify)