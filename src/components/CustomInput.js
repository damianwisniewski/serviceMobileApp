import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { shadowStyle } from '../helpers/shadow'

export const CustomInput = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>{ props.title }</Text>
      <TextInput
        style={{...styles.input, backgroundColor: props.editable ? '#FFF' : '#CCC', color: '#000'}}
        placeholder = { props.placeholder || 'use placeholder attribute' }
        onChangeText = { props.onChangeText }
        value = { props.value }
        {...props }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%'
  },

  h2: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 20
  },

  input: {
      width: '100%',
      ...shadowStyle,
      borderWidth: 1,
      borderColor: '#CCC',
      padding: 5,
      fontSize: 17
  }
})
