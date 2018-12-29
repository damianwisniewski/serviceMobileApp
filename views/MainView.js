import React, { Component } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from "react-native";
import { CustomButton } from "../components/customButton"
import { Icon } from "react-native-elements"
import { NavBar } from "../components/NavBar"

export default class Main extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar />
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
        backgroundColor: "#EFEFEF"
      }
});
