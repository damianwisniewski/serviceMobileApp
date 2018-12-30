import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from "react-native"
import { CustomButton } from "../components/CustomButton"
import { Icon } from "react-native-elements"
import { setUser } from '../reduxStore/actions/user'
import { connect } from 'react-redux'

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: "",
      authorized: false
    };
  }

  static navigationOptions = {
    // it hides native header
    header: null,
    // it hides login label in drawer navigation (side bar)
    drawerLabel: () => null
  }

  authorizeEntry = () => {
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
        } else {
          this.props.onGetUserData({authorized: false})
          this.setState({ information: 'Login lub hasło są niepoprawne, spróbuj raz jeszcze' })
        }
      })
      .catch(err => {
        this.setState({ information: "Przepraszamy pojawiły sie problemy techniczne, proszę spróbować później" })
      })
      .finally(() => {
        if (this.props.authorized) {
          const { navigate } = this.props.navigation
          navigate('MainMenu')
        } else {
          alert(this.state.information);
        }
      })
  }
  
  render() {
    return (
      <View style={styles.container}>
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
            <Icon name="lock" color="#00aced" size={40} />
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
            wrapperStyle={{ width: "80%", justifyContent: "center" }}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={this.authorizeEntry}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c5cbd"
  },

  loginWrapper: {
    height: 320,
    width: "100%",
    padding: 20,

    elevation: 10,
    shadowOffset: { width: 20, height: 20 },
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 1,

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
    justifyContent: "space-between",
    alignItems: "flex-start"
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20,
    marginRight: 7,
    borderWidth: 0,
    borderBottomWidth: 1
  },

  link: {
    fontSize: 15,
    marginBottom: 20,
    color: "#9D9D9D",
    textDecorationLine: "underline"
  },

  button: {
    width: "100%",
    backgroundColor: "#2c5cbd",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center"
  },

  buttonText: {
    fontSize: 15,
    color: "#FFF",
    textAlign: "center"
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
