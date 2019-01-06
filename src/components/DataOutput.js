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
    margin: 15
  },

  h2: {
    flex: 1,
    textAlign: 'right',
    paddingRight: 20,
    fontSize: Math.min(wp('4.6%'), 20),
    // marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold'
  },

  output: {
    flex: 1,
    fontSize: Math.min(wp('4.6%'), 20),
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingLeft: 20,
    overflow: 'hidden',
    // marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  }
})
