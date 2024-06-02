import { FlatList, TouchableHighlight, TouchableOpacity, View } from "react-native"
import Style from "./Style"
import { FAB, Icon, Text } from "react-native-paper"
import axios from "axios"
import { useEffect, useState } from "react"

const Service = ({ data }) => {
    return (
        <TouchableOpacity>
            <View style={Style.serviceDetail}>
                <Text>{data.name}</Text>
                <Text>{data.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Home = ({navigation, route}) => {
    const [data, setData] = useState([]);
    const { authToken} = route.params;

    useEffect(() => {
        axios.get('https://kami-backend-5rs0.onrender.com/services')
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
                    <Text>Danh sách dịch vụ</Text>
                    <FAB
                        icon="plus"
                        onPress={() => console.log('Pressed')}
                    />
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Service data={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Home;