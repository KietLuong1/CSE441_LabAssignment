import React from "react";
import axios from "axios";
import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

const ServiceDetails = ({ route }) => {
    const { id } = route.params;
    const [data, setData] = useState('');
    const [name, setName] = useState('');


    useEffect(() => {
        axios.get(`https://kami-backend-5rs0.onrender.com/services/${id}`)
            .then(response => {
                setData(response.data);
                setName(response.data.user.name)
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }, [])
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Service name: {data.name}</Text>
            <Text style={styles.text}>Price: {data.price}</Text>
            <Text style={styles.text}>Creator: {name}</Text>
            <Text style={styles.text}>Time: {data.createdAt}</Text>
            <Text style={styles.text}>Final update: {data.updatedAt}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFD5C3',
    },

    text: {
        color: 'black',
        fontSize: 17,
    }


})
export default ServiceDetails;