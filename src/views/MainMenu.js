import React from "react";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { TileButton } from "../components/TileButton";

export const MainMenu = props => {

  return (
    <View style={styles.container}>
        <TileButton 
            title='Awaria'
            onPress={() => console.log()}/>
        <TileButton 
            title='Reklamacja'
            onPress={() => console.log()}/>
        <TileButton 
            title='Funkcjonalność'
            onPress={() => console.log()}/>
        <TileButton 
            title='Status Zgłoszeń'
            onPress={() => console.log()}/>
        <TileButton 
            title='Zanane Awarie'
            onPress={() => console.log()}/>
        <TileButton 
            title='O nas'
            onPress={() => console.log()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
  }
});
