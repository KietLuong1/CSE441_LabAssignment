import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import style from "./Style"
import { useState } from "react"

export default Login = () => {
    const [isFocused, setIsFocused] = useState('');

    return (
        <ImageBackground source={require('../images/background.jpg')} style={style.background}>
            <View style={style.container}>
                <Text style={style.title}>Login</Text>
                <TextInput placeholder="Username"
                    style={[style.textInput, isFocused == 'username' && style.textInputFocused]}
                    onBlur={() => setIsFocused('')}
                    onFocus={() => setIsFocused('username')}></TextInput>
                <TextInput placeholder="Password" secureTextEntry={true} textContentType="password "
                    style={[style.textInput, isFocused == 'password' && style.textInputFocused]}
                    onBlur={() => setIsFocused('')}
                    onFocus={() => setIsFocused('password')}></TextInput>
                <Text style = {style.forgotPassword}>Forgot password?</Text>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Log In</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}