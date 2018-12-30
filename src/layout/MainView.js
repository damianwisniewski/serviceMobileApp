import React, { Component } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { CustomButton } from "../components/CustomButton";
import { NavBar } from "../components/NavBar";
import { SmallNavBar } from "../components/SmallNavBar";
import { MainMenu } from "../views/MainMenu";

export default class MainView extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <SmallNavBar />
        <MainMenu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    width: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: "#EFEFEF"
  }
});
