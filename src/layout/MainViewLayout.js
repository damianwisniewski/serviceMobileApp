import React from "react";
import { StyleSheet, View } from "react-native";
import NavBar from "../components/NavBar";
import { SmallNavBar } from "../components/SmallNavBar";

export default MainViewLayout = props => {
  return (
    <View style={styles.container}>
      <NavBar 
        openSideBar={props.openSideBar}
        onUserIconPress={props.onUserIconPress}/>
      <SmallNavBar 
        title={props.screenTitle}
      />
      {props.children}
    </View>
  )
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
