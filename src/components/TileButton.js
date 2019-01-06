import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';
import { Icon } from "react-native-elements"
import { shadowStyle } from '../helpers/shadow'

export const TileButton = props => {
    
    return (
        <TouchableHighlight 
            style={{margin: 0, padding: 0}}
            underlayColor='transparent'
            onPress={props.onPress}>

            <View style={styles.TileButton}>
                <Text style={styles.text}>
                    {props.title}
                </Text>
                <Icon
                    name={props.iconName}
                    type={props.iconType}
                    color={props.iconColor}
                    size={props.iconSize}
                />
            </View>

        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    TileButton: {
      width: 160,
      height: '25%',
      minHeight: 100,
      margin: 20,
      backgroundColor: '#FFF',
      borderRadius: 5,
      ...shadowStyle,
      justifyContent: 'center',
      alignContent: 'center'
    },
  
    text: {
      textAlign: 'center',
      fontSize: 18,
      marginBottom: 15
    }
});