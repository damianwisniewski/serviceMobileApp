import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';
import { Icon } from "react-native-elements";

export const NavBar = (props) => {
    
    return (
        <View>
            <Icon name="lock" color="#00aced" size={40} />
            <Text>SmallService</Text>
            <Icon name="lock" color="#00aced" size={40} />
        </View>
    )
}