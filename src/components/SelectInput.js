import React from "react";
import { Text, View, Picker, StyleSheet, Platform} from "react-native";
import { shadowStyle } from '../helpers/shadow'

export const SelectInput = props => {
    const defaultValue = [props.placeholder || 'Wybierz kategorie zgłoszenia...']

    createOptions = (listOfItems = []) => {
        const items = [...defaultValue, ...listOfItems]
        return(
            items.map((item, index) => <Picker.Item label={String(item)} value={index} key={index} />)
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h2}>{ props.title }</Text>
            <Picker
                selectedValue={ props.selectedValue }
                style={styles.input}
                itemStyle={{fontSize: 18}}
                onValueChange={ props.onValueChange }>
                { createOptions(props.itemsArray) }
            </Picker>
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
        ...(Platform.OS === 'android' && {height: 40}),
        backgroundColor: '#FFF',
        ...shadowStyle,
        borderWidth: 1,
        borderColor: '#CCC'
    }

    
})
