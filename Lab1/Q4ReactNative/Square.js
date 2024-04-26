import React from 'react';
import { Alert, Button, Text, View } from "react-native";
import styles from "./style";

function clickOnSquare(value) {
    Alert.alert(`You clicked on ${value}`);
}

export default Square = ({ text }) => (
    <View style={[styles.box, { backgroundColor: "#7ce0f9" }]}>
        <Text>{text}</Text>
        <Button title="Click Me" onPress={() => clickOnSquare(text)} />
    </View>
);