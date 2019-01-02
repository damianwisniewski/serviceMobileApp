import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import { Icon } from "react-native-elements"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen'

export default class CustomModal extends Component {
  componentDidMount() {
    // add listener for orientation change, set state orientation and force re-render
    lor(this)
  }
  
  componentWillUnmount() {
    // remove listener for orientation change
    rol()
  }

  render() {

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
          <ActivityIndicator 
            size={50} 
            color="#00aced" 
            hidesWhenStopped={true}
            animating={this.props.stopAnimate ? false : true} />

          {
           this.props.stopAnimate && this.props.fail && <Icon name="cancel" color="#dd4b39" size={55} />
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
    height: 250,
    borderRadius: 5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 18
  }
}