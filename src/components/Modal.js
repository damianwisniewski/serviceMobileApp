import React, {Component} from 'react';
import {Text, View, StyleSheet, Animated, Easing} from 'react-native';
import { Icon } from "react-native-elements"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen'

export default class CustomModal extends Component {

  constructor(props) {
    super(props)
    this.spinValue = new Animated.Value(0)
  }
  componentDidMount() {
    // add listener for orientation change, set state orientation and force re-render
    lor(this)
    this.spin()
  }
  
  componentWillUnmount() {
    // remove listener for orientation change
    rol()
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

    const styles = StyleSheet.create({
      ...stylesModal,
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: wp('100%'),
        height: hp('100%'),
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 20,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }
    })

    return (
      <View style={styles.overlay}>
        <View style={styles.modal}>

          {
            !this.props.stopAnimate ? (
              <Animated.View style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                transform: [{rotate: spin}] }}>
                <Icon name="loader" type="feather" color="#00aced" size={55} />
              </Animated.View>
            ) :
            this.props.fail && <Icon name="cancel" color="#dd4b39" size={55} />
          }

          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </View>
    )
  }
}

const stylesModal = {
  modal: {
    backgroundColor: '#FFF',
    width: 250,
    borderRadius: 5,
    padding: 30
  },

  text: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 18
  }
}