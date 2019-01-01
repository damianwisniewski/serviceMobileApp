import React from "react";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

export const SmallNavBar = props => {
  return (
    <View style={styles.container}
        style={styles.smallNav} >
        <Text
          style={styles.h2} >
          {props.title}    
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1
  },

  smallNav: {
    backgroundColor: '#6C9BD1',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  h2: {
    color: '#FFF',
    fontSize: 18
  }

});
