import React from "react";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

export const NavBar = props => {
  return (
    <View style={styles.navbar}>
      <Icon 
        name="bars" 
        type="font-awesome" 
        color="#FFF" size={40} 
        onPress={() => console.log('działa')}/>

      <Text
        style={styles.h1}
      >
        SmallService
      </Text>

      <View></View>

      <View style={styles.userIcon}>
        <Icon 
          name="user-circle" 
          type="font-awesome" 
          color="#00aced" 
          size={60} 
          onPress={() => console.log('działa')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    zIndex: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "space-between",
    height: 60,
    width: "100%",
    backgroundColor: "#2c5cbd"
  },

  h1: {
    color: '#FFF',
    fontSize: 19,
    position: 'relative',
    right: 10
  },

  userIcon: {
    backgroundColor: '#FFF',
    padding: 3,
    borderRadius: 50,
    position: 'absolute',
    bottom: -25,
    right: 20,
    zIndex: 100,
    elevation: 10,
    shadowOffset: { width: 20, height: 20 },
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 1
  }
});
