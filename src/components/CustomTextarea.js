import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

export const CustomTextarea = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>{ props.title }</Text>
      <TextInput
        style={styles.input}
        multiline = { true }
        numberOfLines = { props.numberOfLines || 4 }
        placeholder = { props.placeholder || 'use placeholder attribute' }
        onChangeText = { props.onChangeText }
        value = { props.value } 
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
      backgroundColor: '#FFF',
      elevation: 3,
      shadowOffset: { width: 20, height: 20 },
      shadowColor: "#000",
      shadowOpacity: 0.4,
      shadowRadius: 1,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#CCC',
      padding: 5,
      fontSize: 17,
      marginBottom: 30
  }
})
