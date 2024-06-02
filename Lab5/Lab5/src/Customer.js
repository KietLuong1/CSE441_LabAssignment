import { FlatList, TouchableHighlight, TouchableOpacity, View } from "react-native"
import Style from "./Style"
import { FAB, Icon, Text } from "react-native-paper"
import axios from "axios"
import { useEffect, useState } from "react"

const CustomerDetail = ({ data }) => {
    return (
        <TouchableOpacity>
            <View>
                <Text>Customer: <Text>{data.name}</Text></Text>
                <Text>Phone: {data.price}</Text>
                <Text>Total Money: {data.totalSpent}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Customer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://kami-backend-5rs0.onrender.com/customers')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    })

    return (
        <View style={Style.container}>
            <View style={Style.nav}>
                <Text style={[Style.subtitle, { marginLeft: 20 }]}>Chill Spa</Text>
                <Icon style={{ marginRight: 10 }} source={"account-circle"} size={40} color="#FFC5C2" />
            </View>
            <View >
                <View >
                    <FAB
                        icon="plus"
                        onPress={() => console.log('Pressed')}
                    />
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <CustomerDetail data={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Customer;