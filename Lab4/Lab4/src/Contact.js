import { FlatList, View } from "react-native";
import { fetchContactsSuccess, mapContacts } from "./Store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'react-native-get-random-values';
import styles from "./styles";
import ContactListItem from "./ContactListItem";
import { fetchContactsSuccessUsingAsync, getContacts, mapContactsUsingAsync } from "./AsyncStorage";

const keyExtractor = ({ phone }) => phone;

const fetchContacts = async () => {
    const data = await fetch('https://randomuser.me/api/?results=50');
    const ContactData = await data.json();
    console.log(ContactData);
    // return ContactData.results.map(mapContacts);
    return ContactData.results.map(mapContactsUsingAsync);
}

const Contacts = ({ navigation }) => {
    // using redux toolkit

    // const{contacts} = useSelector((state) => state);
    // const dispatch = useDispatch();
    // useEffect(() =>{
    //     fetchContacts()
    //     .then((contacts) =>{
    //         dispatch(fetchContactsSuccess(contacts));
    //         console.log("success");
    //     })
    //     .catch((error) =>{console.log(error)});
    // }, []);

    // using async storage
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts()
            .then(() => {
                fetchContactsSuccessUsingAsync();
                setContacts(getContacts());
                console.log("success");
            })
            .catch((error) => { console.log(error) });
    }, [])

    const renderContacts = ({ item }) => {
        const { name, avatar, phone } = item;

        return (
            <ContactListItem
                name={name}
                avatar={avatar}
                phone={phone}
                onPress={() => {
                    navigation.navigate('ProfileContact', { contact: item });
                }}
            />
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                keyExtractor={keyExtractor}
                renderItem={renderContacts}
            />
        </View>
    )
}

export default Contacts;