import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { Icon, Button } from "react-native-elements"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen'
// import { ScrollView } from 'react-native-gesture-handler';

export default class DataModal extends Component {

  constructor(props) {
    super(props)
  }

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
      ...styling,
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
      <View style={{...styles.overlay, width: wp('100%')}}>
        <View style={styles.wrapper}>
          <ScrollView contentContainerStyle={styles.container}>
            <View style={{...styles.modal, width: wp('80%')}}>
              <Text style={styles.header}>Typ Zgłoszenia:</Text>
              <Text style={styles.text}>{this.props.type}</Text>
              <Text style={styles.header}>Nr zgłoszenia:</Text>
              <Text style={styles.text}>{this.props.nrNotify}</Text>
              <Text style={styles.header}>Status:</Text>
              <Text style={styles.text}>{this.props.status}</Text>
              <Text style={styles.header}>Data przyjęcia:</Text>
              <Text style={styles.text}>{this.props.date}</Text>
              <Text style={styles.header}>Twój opis:</Text>
              <Text style={styles.text}>{this.props.clientText}</Text>
              <Text style={styles.header}>Opis administatora:</Text>
              <Text style={styles.text}>{this.props.adminText}</Text>
            </View>
          </ScrollView>
          <TouchableHighlight 
            style={styles.button}
            onPress={this.props.onClosePress}
          >
            <View>
              <Text style={styles.buttonText}>Zamknij</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styling = {
  button: {
    marginBottom: 40, 
    backgroundColor: "#777",
    borderRadius: 10,
    borderColor: '#AAA',
    borderWidth: 4,
  },

  buttonText: {
    color: '#FFF',
    padding: 6,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  icon: {
    position: 'absolute',
    zIndex: 500,
    top: 20,
    left: 0,
    padding: 7,
    borderRadius: 50,
    backgroundColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center'
  },

  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20
  },

  modal: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },

  header: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 18
  },

  text: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#CCC',
    borderRadius: 10,
    padding: 5
  },

  container: {
    flexDirection: 'column',
    justifyContent: 'center'
  }
}
