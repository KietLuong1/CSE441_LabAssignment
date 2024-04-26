import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from "../style";

export default function Display(props){
    function onPress(){
        alert("Success!");
    }

    return(
        <View style={styles.container}>
            <Text style = {styles.tilte}>{props.tilte}</Text>
            <Text>Name: {props.name}</Text>
            <Text>Age: {props.age}</Text>
            <Text>Occupation: {props.occupation}</Text>
            <Button title="Submit" onPress={() =>{onPress()}}/>
        </View>
    );
}
