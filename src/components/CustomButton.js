import React from 'react';
import {TouchableHighlight, Text, View, StyleSheet} from 'react-native';

export const CustomButton = props => {
    
    return (
        <TouchableHighlight 
            style={styles.wrapperStyle}
            onPress={props.onPress}>

            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {props.title}
                </Text>
            </View>

        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: "#2c5cbd",
        padding: 10,
        borderRadius: 5,
        justifyContent: "center"
      },
    
      buttonText: {
        fontSize: 15,
        color: "#FFF",
        textAlign: "center"
      },
      
      wrapperStyle: {
        width: "80%", 
        justifyContent: "center" 
     }
})