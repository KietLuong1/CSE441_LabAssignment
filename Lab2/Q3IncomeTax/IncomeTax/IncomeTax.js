import { Button, Text, TextInput, View } from "react-native"
import style from "./Style"
import { useState } from "react"

export default incomeTax = () => {
    const [income, setIncome] = useState('');
    const [tax, setTax] = useState('');

    const calculateTax = () => {
        const incomeAmount = parseFloat(income);

        if (isNaN(incomeAmount) || incomeAmount < 0) {
            setTax('Please enter a valid number');
            return;
        }

        let taxAmount = 0;
        if (incomeAmount <= 10000000) {
            taxAmount = incomeAmount * 0.1;
        } else if (incomeAmount <= 50000000) {
            taxAmount = 1000000 * 0.1 + (incomeAmount - 10000) * 0.2;
        } else {
            taxAmount = 1000000 * 0.1 + 40000000 * 0.2 + (incomeAmount - 50000000) * 0.3;
        }

        setTax(`Income Tax:  ${taxAmount.toFixed(2)}đ`);
    };

        return (
            <View style={style.container}>
                <Text style={style.title}>Income Tax Calculator</Text>
                <TextInput
                    textAlign = 'right'
                    style={style.input}
                    placeholder='Enter your income'
                    keyboardType='numeric'
                    value={income}
                    onChangeText={income => setIncome(income)}
                />
                <Button title='Calculate' onPress={calculateTax} />
                <Text style={style.result}>{tax}</Text>
            </View>
        )
}