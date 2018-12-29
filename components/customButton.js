import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';

export const CustomButton = (props) => {
    
    return (
        <TouchableHighlight 
            style={props.wrapperStyle}
            onPress={props.onPress}>

            <View style={props.buttonStyle}>
                <Text style={props.textStyle}>
                    {props.title}
                </Text>
            </View>

        </TouchableHighlight>
    )
}