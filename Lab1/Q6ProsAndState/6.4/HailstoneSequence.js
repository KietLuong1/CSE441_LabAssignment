import React ,{ useState } from "react";
import { Text, TextInput, View } from "react-native";
import style from "../style";

export default function HailstoneSequence() {
    let str ="";
    let [number, setNumber] = useState(0);

    while(number !== 1 && number !== 0){
        number = (number % 2 === 0) ? number / 2 :  number * 3 + 1;
        str += number + " ";
    }

    return(
        <View style = {style.container}>
            <Text style ={style.tilte}>Hailstone Finder</Text>
            <TextInput style ={style.textInput} keyboardType="numeric" placeholder="Enter a number"
            onChangeText={number => setNumber(Number(number))}></TextInput>
            <Text>The Hailstone Sequence is:</Text>
            <Text>{str}</Text>
        </View>
    )
}
