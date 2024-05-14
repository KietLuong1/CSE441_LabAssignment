import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { Button, FAB, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Style from '../Style/Style';

const Products = () => {
    const [data, setData] = useState([]);
    const filePath = 'https://dummyjson.com/products';

    useEffect(() => {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(d => {
                setData(d.products);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    const Item = ({ data }) => (
        <View style={Style.row}>
            <FAB style={Style.deleteBtn} color = '#55A384' customSize = {40} background={'#fff'}
                    icon="delete"
                />
            <View style={Style.productImage}>
                <Image style={Style.image} source={{ uri: data.thumbnail }} />
            </View>
            <View style={Style.productInfo}>
                <Text style={Style.title}>{data.title}</Text>
                <Text>Desciption: {data.description}</Text>
                <Text>Price: {data.price}</Text>
                <Text>{data.discountPercentage}</Text>
                <Text>{data.rating}</Text>
                <Text>{data.stock}</Text>
                <Text>{data.brand}</Text>
                <Text>{data.category}</Text>
                <View style={Style.buttons}>
                    <Button style={Style.button} theme={{ colors: { primary: '#55A384' } }} mode="outlined" buttonColor='#fff'
                        textColor='#55A384'
                        onPress={() => console.log('Pressed')}>
                        Details
                    </Button>
                    <Button style={Style.button} mode="contained-tonal" buttonColor='#55A384'
                        textColor='#fff'
                        onPress={() => console.log('Pressed')}>
                        Add
                    </Button>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item data={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

export default Products;