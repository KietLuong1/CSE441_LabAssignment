import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10,
        paddingTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    productImage: {
        flex: 1,
    },

    image: {
        marginTop: 20,
        width: 100,
        height: 100,
    },

    productInfo: {
        flex: 2,
        padding: 10,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    button: {
        margin: 5,
    },

    deleteBtn: {
        position: 'absolute',
        top: 10,
        right: 15,
        padding: 0,
    },

    input: {
        marginBottom: 10,
    },

    searchContainer: {
        flex: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexDirection: 'row',
        marginTop: 30,
    },

    productCard:{
        marginBottom: 20,
        marginTop: 20,
    }
}
)