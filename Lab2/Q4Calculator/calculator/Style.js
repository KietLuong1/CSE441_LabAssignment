import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    display: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
    },

    displayText: {
        fontSize: 50,
        margin: 10,
        color: 'black',
    },

    buttons: {
        flex: 1,
        width: '100%',
        alignItems: 'space-around',
        justifyContent: 'space-around',
    },

    row: {
        flex: 1,
        flexDirection: 'row',
    },

    calButton: {
        backgroundColor: '#55A384',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10
    },

    centerButton:{
        backgroundColor: '#ccc'
    },

    operator: {
        backgroundColor: '#55A384'
    }
})