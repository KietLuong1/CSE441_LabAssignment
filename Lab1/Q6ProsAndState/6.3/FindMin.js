import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import style from '../style';

export default function FindMin() {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const min = Math.min(value, value2, value3);

    return(
        <View style={style.container}>
            <TextInput style={style.textInput} keyboardType="numeric" 
            onChangeText={number => {setValue(number)}} placeholder="Enter a number"></TextInput>
            <TextInput style={style.textInput} keyboardType="numeric" 
            onChangeText={number => {setValue2(number)}} placeholder="Enter a number"></TextInput>
            <TextInput style={style.textInput} keyboardType="numeric" 
            onChangeText={number => {setValue3(number)}} placeholder="Enter a number"></TextInput>
            <Text>Min value is {min}</Text>
        </View>
    )
}