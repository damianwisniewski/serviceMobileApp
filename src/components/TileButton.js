import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';

export const TileButton = props => {
    
    return (
        <TouchableHighlight 
            style={{margin: 0, padding: 0}}
            onPress={props.onPress}>

            <View style={styles.TileButton}>
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </View>

        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    TileButton: {
      width: 160,
      height: '25%',
      margin: 20,
      backgroundColor: '#FFF',
      borderRadius: 5,
      elevation: 3,
      shadowOffset: { width: 20, height: 20 },
      shadowColor: "#000",
      shadowOpacity: 0.4,
      shadowRadius: 1,
      justifyContent: 'center',
      alignContent: 'center'
    },
  
    text: {
      textAlign: 'center',
      fontSize: 20
    }
});