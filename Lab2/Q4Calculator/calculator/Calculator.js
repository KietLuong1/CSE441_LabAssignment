import { Alert, Button, Text, View } from "react-native"
import Style from "./Style";
import { useState } from "react";
import { CalButton } from "./CalButton";

export default () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState('');

    const handleNumberInput = (num) => {
        if (num === '.' && displayValue.includes('.')) {
            return;
        }

        if (displayValue === '0') {
            setDisplayValue(num.toString());
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    const handleOperatorInput = (operator) => {
        setOperator(operator);
        setFirstValue(displayValue);
        setDisplayValue('0');
    };

    const handleEqual = () => {
        let num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);

        if (firstValue.endsWith('.')) {
            num1 += 0.0;
        }

        if (operator === '+') {
            setDisplayValue((num1 + num2).toString());
        } else if (operator === '-') {
            setDisplayValue((num1 - num2).toString());
        } else if (operator === '*') {
            setDisplayValue((num1 * num2).toString());
        } else if (operator === '/') {
            setDisplayValue((num1 / num2).toString());
        }

        setOperator(null);
        setFirstValue('');
    };

    const handleClear = () => {
        setDisplayValue('0');
        setOperator(null);
        setFirstValue('');
    };

    const handleDelete = () => {
        if (displayValue.length === 1) {
            setDisplayValue('0');
        } else {
            setDisplayValue(displayValue.slice(0, displayValue.length - 1));
        }
    };

    return (
        <View style={Style.container}>
            <View style={Style.display}>
                <Text style={[Style.displayText, { fontSize: 20 }]}>{firstValue} {operator}</Text>
                <Text style={Style.displayText}>{displayValue}</Text>
            </View>
            <View style={Style.buttons}>
                <View style={Style.row}>
                    <CalButton value="C" onPress={() => { handleClear() }} />
                    <CalButton value="÷" onPress={() => { handleOperatorInput('/') }} />
                </View>
                <View style={Style.row}>
                    <CalButton value="7" onPress={() => { handleNumberInput('7') }} />
                    <CalButton value="8" onPress={() => { handleNumberInput('8') }} />
                    <CalButton value="9" onPress={() => { handleNumberInput('9') }} />
                    <CalButton value="×" onPress={() => { handleOperatorInput('*') }} />
                </View>
                <View style={Style.row}>
                    <CalButton value="4" onPress={() => { handleNumberInput('4') }} />
                    <CalButton value="5" onPress={() => { handleNumberInput('5') }} />
                    <CalButton value="6" onPress={() => { handleNumberInput('6') }} />
                    <CalButton value="-" onPress={() => { handleOperatorInput('-') }} />
                </View>
                <View style={Style.row}>
                    <CalButton value="1" onPress={() => { handleNumberInput('1') }} />
                    <CalButton value="2" onPress={() => { handleNumberInput('2') }} />
                    <CalButton value="3" onPress={() => { handleNumberInput('3') }} />
                    <CalButton value="+" onPress={() => { handleOperatorInput('+') }} />
                </View>
                <View style={Style.row}>
                    <CalButton value="." onPress={() => { handleNumberInput('.') }} />
                    <CalButton value="0" onPress={() => { handleNumberInput('0') }} />
                    <CalButton value="DEL" onPress={() => { handleDelete() }} />
                    <CalButton value="=" onPress={() => { handleEqual() }} />
                </View>
            </View>
        </View>
    )
}