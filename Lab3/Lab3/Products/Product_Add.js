import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Style from "../Style/Style";

export default () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState('');

    const handleSubmit = () => {
        fetch('https://dummyjson.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                discountPercentage: discountPercentage,
                rating: rating,
                stock: stock,
                brand: brand,
                category: category,
                images: images,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
    };
    return (
        <SafeAreaView>
            <Text style={[Style.title, {textAlign: "center", marginBottom: 20, color: '#55A384'}]}>Add Product</Text>
            <TextInput theme={{ colors: { primary: '#55A384' } }}
                style={Style.input}
                placeholder='Title'
                onChangeText={text => setTitle(text)}
            />
            <TextInput theme={{ colors: { primary: '#55A384' } }}
                style={Style.input}
                placeholder='Description'
                onChangeText={text => setDescription(text)}
            />
            <TextInput theme={{ colors: { primary: '#55A384' } }}
                style={Style.input}
                placeholder='Price'
                onChangeText={text => setPrice(text)}
            />
            <TextInput theme={{ colors: { primary: '#55A384' } }}
                style={Style.input}
                placeholder='Discount Percentage'
                onChangeText={text => setDiscountPercentage(text)}
            />
            <TextInput theme={{ colors: { primary: '#55A384' } }}
                style={Style.input}
                placeholder='Rating'
                onChangeText={text => setRating(text)}
            />
            <TextInput theme={{ colors: { primary: '#55A384' } }}
                style={Style.input}
                placeholder='Stock'
                onChangeText={text => setStock(text)}
            />
            <TextInput theme={{ colors: { primary: '#55A384' } }}
                style={Style.input}
                placeholder='Brand'
                onChangeText={text => setBrand(text)}
            />
            <TextInput theme={{ colors: { primary: '#55A384' } }}
                style={Style.input}
                placeholder='Category'
                onChangeText={text => setCategory(text)}
            />
            <TextInput theme={{ colors: { primary: '#55A384' } }}
                style={Style.input}
                placeholder='Images URL'
                onChangeText={text => setImages(text)}
            />
            <Button style={Style.button} mode="contained-tonal" buttonColor='#55A384'
                textColor='#fff'
                onPress={handleSubmit}>
                Add
            </Button>
        </SafeAreaView>

    )
}