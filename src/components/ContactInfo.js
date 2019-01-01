import React from 'react'
import {TouchableHighlight, Text, View, StyleSheet} from 'react-native'
import { Icon } from "react-native-elements"

export const ContactInfo = props => {
    
    return (
        <View 
            style={styles.container}>

            <Text style={styles.h2}>W przypadku jeśli któreś dane sie nie zgadzają prosimy o kontakt:</Text>
            <View style={styles.data}>
                <Icon name="telephone" type='foundation' size={30}/>
                <Text style={styles.text}>+99 111 222 333</Text>
            </View>
            <View style={styles.data}>
                <Icon name="email" type='entypo' size={30} />
                <Text style={styles.text}>testowy@email.com</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%", 
        padding: 20,
        justifyContent: "center"
    },

    data: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        marginLeft: 20,
        fontSize: 16
    },
    
    h2: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    }
})