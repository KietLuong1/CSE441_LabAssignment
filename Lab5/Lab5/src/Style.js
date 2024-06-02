import { StyleSheet } from "react-native";

const primaryColor = '#FFC5C2';
const secondaryColor = '#FCEDEC';

export default style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        width: '100%', 
        height: '100%',
    },

    login:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
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

    subtitle:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
    },
    
    textInput:{
        width: '80%',
        padding: 10,
        backgroundColor: secondaryColor,
        marginBottom: 20,
        borderRadius: 10
    },

    textInputFocused:{
        borderWidth: 1,
        borderColor: primaryColor
    },

    textButton:{
        color:'white',
        fontSize: 18
    },

    button:{
        width: '80%',
        padding: 15,
        backgroundColor: primaryColor,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20
    },

    forgotPassword:{
        color: primaryColor,
        marginTop: 0,
        marginBottom: 20,
        alignSelf: 'flex-end',
        marginRight: '10%'
    },

    serviceDetail:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        padding: 15,
        margin: 10,
        borderWidth: 1,
        borderColor: primaryColor,
        borderRadius: 10
    },

    details:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },  

    nav:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }
})   