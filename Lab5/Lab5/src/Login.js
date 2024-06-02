import { Alert, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import style from "./Style"
import { useState } from "react"
import axios from 'axios';

const Login = ({navigation}) => {
    const [isFocused, setIsFocused] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    var authToken;

    const handleLogin = () => {
        const loginData = {
            phone: phone,
            password: password
        }

        axios.post('https://kami-backend-5rs0.onrender.com/auth', loginData)
            .then((response) => {
                authToken = response.data.token;
                Alert.alert("Login successfully");;

                console.log(authToken);

                navigation.navigate('Home', {authToken: authToken});
            })
            .catch(() => {
                Alert.alert("Login failed", "Invalid phone or password");
            })
    }

    return (
        <View style={style.login}>
            <Text style={style.title}>Login</Text>
            <TextInput placeholder="Phone"
                style={[style.textInput, isFocused == 'username' && style.textInputFocused]}
                keyboardType="numeric"
                onBlur={() => setIsFocused('')}
                onFocus={() => setIsFocused('username')}
                onChangeText={text => { setPhone(text) }}></TextInput>
            <TextInput placeholder="Password" secureTextEntry={true} textContentType="password"
                style={[style.textInput, isFocused == 'password' && style.textInputFocused]}
                onBlur={() => setIsFocused('')}
                onFocus={() => setIsFocused('password')}
                onChangeText={text => { setPassword(text) }}></TextInput>
            <Text style={style.forgotPassword}>Forgot password?</Text>
            <TouchableOpacity style={style.button} onPress={() => { handleLogin() }}>
                <Text style={style.textButton}>Log In</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Login;