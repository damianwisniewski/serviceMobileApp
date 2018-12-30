import React from "react";
import { Text, View, TextInput } from "react-native";

export const CustomInput = props => {
  return (
    <View>
      <Text>{ props.title }</Text>
      <TextInput
        placeholder = { props.placeholder || 'use placeholder attribute' }
        onChangeText = { props.onChangeText }
        value = { props.value } 
      />
    </View>
  );
};
