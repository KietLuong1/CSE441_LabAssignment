import { useEffect, useState } from "react";
import { Avatar, Button, Card, FAB, Text } from "react-native-paper";
import Style from "../Style/Style";

export default ProductDetails = () => {
    const [data, setData] = useState([]);
    const filePath = 'https://dummyjson.com/products/2';

    useEffect(() => {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    const LeftContent = props => <Avatar.Icon {...props} icon="star" size={30} theme={{ colors: { primary: 'yellow' } }} />
    const RightContent = ({ val }) =>
        <FAB
            color='#FF0000'
            customSize={40}
            icon="sale"
            variant='tertiary'
            label={val + "% off"}
        />

    const Details = ({ data }) => {
        return (
            <Card style={Style.productCard}>
                <Card.Cover source={{ uri: data.images[3] }} />
                <Card.Title titleStyle={{ fontWeight: 'bold', justifyContent: 'center' }} title={data.rating} left={LeftContent} right={() =>
                    <RightContent val={data.discountPercentage} />} />
                <Card.Content>
                    <Text style={{ fontWeight: 'bold' }} variant="titleLarge">{data.title}</Text>
                    <Text style={{ marginBottom: 20 }} variant="labelMedium">{data.brand}, {data.category}</Text>
                    <Text style={{ textDecorationLine: 'line-through', color: '#ccc' }} variant="titleMedium">${data.price + (data.price * data.discountPercentage /100)}</Text>
                    <Text style={{ marginBottom: 20, color: '#FF0000' }} variant="displayMedium">${data.price}</Text>
                    <Text variant="bodyMedium">Available: {data.stock} units</Text>
                    <Text variant="bodyMedium">{data.description}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button mode="outlined">Cancel</Button>
                    <Button mode="contained" theme={{ colors: { primary: '#FF0000' } }} textColor="#fff">Delete</Button>
                </Card.Actions>
            </Card>
        )
    }

    return(
        <Details data={data} />
    )
}