import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { shadowStyle } from '../helpers/shadow'
import {
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen'

export default class NavBar extends Component {

  state = {
    orientation: ''
  }

  componentDidMount() {
    const {height, width} = Dimensions.get('window')
    this.setState({
      orientation: width < height ? 'portrait' : 'landscape'
    })

    lor(this)
  }
  
  componentWillUnmount() {
    rol()
  }
  
  render() {

  const styles = StyleSheet.create({
    navbar: {
      display: "flex",
      zIndex: 100,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: this.state.orientation === 'portrait' ? 40 : 0,
      justifyContent: "space-between",
      height: this.state.orientation === 'portrait' ? 80 : 50,
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
      ...shadowStyle
    }
  });

  
  return (
    <View style={styles.navbar}>
      <Icon 
        underlayColor='transparent'
        name="bars" 
        type="font-awesome" 
        color="#FFF" size={30} 
        onPress={() => this.props.openSideBar()}/>

      <Text
        style={styles.h1}
      >
        SmallService
      </Text>

      <View></View>

      <View style={styles.userIcon}>
        <Icon
          underlayColor='transparent' 
          name="user-circle" 
          type="font-awesome" 
          color="#00aced" 
          size={60} 
          onPress={() => this.props.onUserIconPress()} />
      </View>
    </View>
  );
  }
};
