import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native"



export const FooterNavBar = props => {
    console.log(props)
  return (
    <View style={styles.container}>
        <TouchableHighlight 
            underlayColor='transparent'
            style={styles.buttonWrapper}
            onPress={props.onPressButtonOne}>

            <View style={{...styles.button, backgroundColor: '#599eff'}}>
                <Text style={styles.buttonText}>
                    {props.buttonOne}
                </Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight 
            underlayColor='transparent'
            style={styles.buttonWrapper}
            onPress={props.onPressButtonTwo}>

            <View style={{...styles.button, backgroundColor: '#217dff'}}>
                <Text style={styles.buttonText}>
                    {props.buttonTwo}
                </Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight 
            underlayColor='transparent'
            style={styles.buttonWrapper}
            onPress={props.onPressButtonThree}>

            <View style={{...styles.button, backgroundColor: '#0056d1'}}>
                <Text style={styles.buttonText}>
                    {props.buttonThree}
                </Text>
            </View>
        </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 5
  },

  buttonWrapper: {
    flex: 1
  },

  button: {
    backgroundColor: '#CCC',
    width: '100%'
  },

  buttonText: {
      padding: 10,
      paddingTop: 20,
      paddingBottom: 20,
      textAlign: 'center',
      fontSize: 18,
      color: '#FFF'
  }
})
