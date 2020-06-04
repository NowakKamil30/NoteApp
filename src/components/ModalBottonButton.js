import React from 'react';
import { View, TouchableNativeFeedback, Text, StyleSheet } from 'react-native';


export const ModalBottonButton = ({ onPress, title }) => (
    <View style={styles.buttonContainerStyle}>
        <TouchableNativeFeedback
            onPress={onPress}
        >
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableNativeFeedback>
    </View>
)

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        textAlign: "center"
    },
    buttonContainerStyle: {
        borderTopColor: "black",
        borderTopWidth: 1,
        paddingBottom: 10,
        paddingTop: 10
    }
});