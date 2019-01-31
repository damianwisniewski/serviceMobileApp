import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { dateParser } from "../helpers/dateParser";


export const DataListElement = props => {
  const data = (typeof props.items === 'object') ? Object.values(props.items).slice(0,4) : null
  
  return (
    <TouchableHighlight
      underlayColor='transparent'
      onPress={props.onPress}
    >
      <View style={styles.container}>
        {
          (data === null)
          ?
          <Text>Loading...</Text>
          :
          data.map(value => {
            return (
              <Text
                key={props.key * Math.random()}
                style={styles.dataOutput} >
                {/\d{4}\-\d{2}\-\d{2}/.test(value) ? dateParser(value) : value}
              </Text>
            )
          })
        }
      </View>
    </TouchableHighlight> 
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('95%'),
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#CCC',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5
  },

  dataOutput: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    overflow: 'hidden',
    width: wp('95%')/4,
    flexWrap: 'nowrap'
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
