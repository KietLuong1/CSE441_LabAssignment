import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        // backgroundColor: 'white',
        marginBottom: 20,  
        height: '20%'
    },
    background:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },

    title:{
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20
    },
    
    textInput:{
        width: '80%',
        padding: 10,
        backgroundColor: '#F1F4FF',
        marginBottom: 20,
        borderRadius: 10
    },

    textInputFocused:{
        borderWidth: 1,
        borderColor: '#2042BB'
    },

    textButton:{
        color:'white',
        fontSize: 18
    },

    button:{
        width: '80%',
        padding: 15,
        backgroundColor: '#2042BB',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20
    },

    forgotPassword:{
        color: '#2042BB',
        marginTop: 0,
        marginBottom: 20,
        alignSelf: 'flex-end',
        marginRight: '10%'
    }

})   