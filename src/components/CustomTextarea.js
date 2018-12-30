import React from "react";
import { Text, View, TextInput } from "react-native";

export const CustomTextarea = props => {
  return (
    <View>
      <Text>{ props.title }</Text>
      <TextInput
        multiline = { true }
        numberOfLines = { props.numberOfLines || 4 }
        placeholder = { props.placeholder || 'use placeholder attribute' }
        onChangeText = { props.onChangeText }
        value = { props.value } 
      />
    </View>
  );
};
