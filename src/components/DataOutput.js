import React from "react";
import { Text, View, StyleSheet } from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'


export const DataOutput = props => {
    console.log(props)
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>{ props.title }</Text>
      <Text
        style={styles.output}
        {...props }
      >
        {props.value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    flexDirection: 'row',
    margin: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#555'
  },

  h2: {
    flex: 1,
    textAlign: 'right',
    paddingRight: 20,
    fontSize: Math.min(wp('4.5%'), 20),
    marginBottom: 5,
    marginTop: 20,
    fontWeight: 'bold'
  },

  output: {
    flex: 1,
    fontSize: Math.min(wp('4.5%'), 20),
    paddingLeft: 20,
    marginBottom: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
