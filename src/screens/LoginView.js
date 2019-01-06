import React, { Component } from "react"
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  TextInput
} from "react-native"
import { shadowStyle } from '../helpers/shadow'
import { CustomButton } from "../components/CustomButton"
import { Icon } from "react-native-elements"
import { setUser } from '../reduxStore/actions/user'
import { connect } from 'react-redux'
import { ScrollView } from "react-native-gesture-handler"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import CustomModal from "../components/Modal"

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: "",
      authorized: false,
      isModalVisible: false
    };
  }

  static navigationOptions = {
    // it hides native header
    header: null,
    // it hides login label in drawer navigation (side bar)
    drawerLabel: () => null
  }

  hideModalWithDelay() {
    setTimeout(() => {
      this.setState({
        isModalVisible: false,
        information: null
      }) 
    }, 3000)
  }

  authorizeEntry = () => {
    this.setState({isModalVisible: true})
    const login = this.state.login;
    const password = this.state.password;

    fetch("https://aplikacja-wsb.herokuapp.com/api/login-client", {
      method: "POST",
      body: JSON.stringify({ login: login, password: password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.auth) {
          const userData = {
            id: res.login,
            company: res.data[0].firma, 
            name: res.data[0].imie, 
            surname: res.data[0].nazwisko,
            authorized: res.auth
          }
          this.props.onGetUserData(userData)
          this.setState({authorized: true})
        } else {
          this.props.onGetUserData({authorized: false})
          this.setState({authorized: false, information: 'Login lub hasło są niepoprawne, spróbuj raz jeszcze' })
        }
      })
      .catch(err => {
        console.log(err)
        this.setState({ information: "Przepraszamy pojawiły sie problemy techniczne, proszę spróbować później" })
      })
      .finally(() => {
        if (this.state.authorized) {
          const { navigate } = this.props.navigation
          this.setState({isModalVisible: false})
          navigate('MainMenu')
        } else {
          this.hideModalWithDelay()
        }
      })
  }
  
  render() {
    return (
      <ScrollView 
        contentContainerStyle={{minHeight: '100%'}}>
        <View style={styles.container}>

          { this.state.isModalVisible && (
            <CustomModal 
              text={ this.state.information || 'Sprawdzanie danych'}
              stopAnimate={Boolean(this.state.information)}
              fail={!this.state.authorized}
            />
          )}

          <View style={styles.loginWrapper}>
            <Text style={styles.header}>Logowanie</Text>
            {/* Login */}
            <View style={styles.inputWrapper}>
              <Icon name="face" color="#00aced" size={40} />
              <TextInput
                placeholder="Podaj Login"
                style={styles.input}
                onChangeText={text => this.setState({ login: text })}
                value={this.state.login}
              />
            </View>

            {/* Password */}
            <View style={styles.inputWrapper}>
              <Icon name="lock" color="#00aced" loading={true} size={40} />
              <TextInput
                secureTextEntry={true}
                placeholder="Podaj hasło"
                style={styles.input}
                onChangeText={text => this.setState({ password: text })}
                value={this.state.password}
              />
            </View>

            {/* Submit Button */}
            <CustomButton
              title="ZALOGUJ"
              onPress={this.authorizeEntry}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c5cbd",
  },

  loginWrapper: {
    height: 320,
    width: "100%",
    padding: 20,
    ...shadowStyle,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF"
  },

  header: {
    fontSize: 25,
    marginBottom: 10,
    color: "#6A6A6A",
    fontWeight: "bold"
  },

  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginBottom: 20,
  },

  input: {
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    fontSize: Math.min(wp('4.5%'), 20),
    marginRight: 7,
    marginLeft: 5,
    borderWidth: 0,
    borderBottomWidth: 1
  }
});

// parameter from redux store we were subscribe for (available in this.props[PARAMETER_NAME])
const mapStateToProps = state => {
  return {
      authorized: state.user.authorized
  }
}

// dispatchers to run reducer (available in this.props[FUNCTION_NAME])
const mapDispatchToProps = dispatch => {
  return {
      onGetUserData: (userData) => dispatch(setUser(userData))
  }
}

// connecting component with redux
export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
