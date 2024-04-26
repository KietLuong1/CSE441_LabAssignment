import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from "../style";

export default function Display(props){
    function onPress(){
        alert("Success!");
    }
    return(
        <View style={styles.box}>
            <Text>Name: {props.name}</Text>
            <Text>Age: {props.age}</Text>
            <Text>Occupation: {props.occupation}</Text>
            <Button title="Click me" onPress={() =>{onPress()}}/>
        </View>
    );
}
