import React from "react";
import { Text, View, Picker, StyleSheet } from "react-native";

export const SelectInput = props => {
    const defaultValue = ['Wybierz kategorie zgłoszenia...']

    createOptions = (listOfItems = []) => {
        const items = [defaultValue, ...listOfItems]
        return(
            items.map((item, index) => <Picker.Item label={String(item)} value={item} key={index} />)
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h2}>{ props.title }</Text>
            <Picker
                mode='dropdown'
                selectedValue={ props.selectedValue }
                style={styles.input}
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
        height: 40,
        backgroundColor: '#FFF',
        elevation: 3,
        shadowOffset: { width: 20, height: 20 },
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowRadius: 1,
        borderWidth: 1,
        borderColor: '#CCC'
    }
})
