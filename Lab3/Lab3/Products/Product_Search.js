import { useState } from "react"
import { FlatList, View } from "react-native"
import { Avatar, Button, Card, FAB, Searchbar, Text } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import Style from "../Style/Style"

export default ProductSearch = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')

    const searchProduct = () => {
        const filePath = 'https://dummyjson.com/products/search?q=' + value;
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json()
            })
            .then((data) => {
                setData(data.products)
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    const LeftContent = props => <Avatar.Icon {...props} icon="star" size={30} theme={{ colors: { primary: 'yellow' } }} />
    const RightContent = ({ val }) =>
        <FAB
            color='#FF0000'
            customSize={40}
            icon="sale"
            variant='tertiary'
            label={val.toString() + "% off"}
        />

    const SearchedProduct = ({ data }) => {
        return (
            <Card style={Style.productCard}>
                <Card.Cover source={{ uri: data.images[0] }} />
                <Card.Title titleStyle={{ fontWeight: 'bold', justifyContent: 'center' }} title={data.rating} left={LeftContent} right={() =>
                    <RightContent val={data.discountPercentage} />} />
                <Card.Content>
                    <Text style={{ fontWeight: 'bold' }} variant="titleLarge">{data.title}</Text>
                    <Text style={{ marginBottom: 20 }} variant="labelMedium">{data.brand}, {data.category}</Text>
                    <Text style={{ textDecorationLine: 'line-through', color: '#ccc' }} variant="titleMedium">${data.price + (data.price * data.discountPercentage / 100)}</Text>
                    <Text style={{ marginBottom: 20, color: '#FF0000' }} variant="displayMedium">${data.price}</Text>
                    <Text variant="bodyMedium">Available: {data.stock} units</Text>
                    <Text variant="bodyMedium">{data.description}</Text>
                </Card.Content>
            </Card>
        )
    }

    return (
        <SafeAreaView>
            <View >
                <Searchbar
                    placeholder="Search"
                    onChangeText={(value) => setValue(value)}
                    value={value}
                    onIconPress={() => searchProduct}
                />
                <Button
                    style={Style.button}
                    theme={{ colors: { primary: '#55A384' } }}
                    mode="elevated"
                    buttonColor='#55A384'
                    textColor='#fff'
                    onPress={() => searchProduct()}>
                    Search
                </Button>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <SearchedProduct data={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}