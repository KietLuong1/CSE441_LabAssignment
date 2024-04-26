import React, {useState }from "react";
import { Text, TextInput, View } from "react-native";
import style from "../style";

export default function SumTwoDigits() {
    let [number, setNumber] = useState(0);
    const arr = [];

    while (number > 0) {
        arr.unshift(number % 10);
        number = Math.floor(number / 10);
    }

    const sum = (arr.length > 1) ? arr[0] + arr[arr.length - 1] : arr[0];

    return (
        <View style = {style.container}>
            <Text style ={style.tilte}>Sum Two Digits</Text>
            <TextInput style={style.textInput} keyboardType="numeric" value = {number} onChangeText = {text =>{setNumber(text)}} 
            placeholder="Enter a number"></TextInput>
            <Text>Sum of first and last digit is {sum}</Text>
        </View>
    );
}