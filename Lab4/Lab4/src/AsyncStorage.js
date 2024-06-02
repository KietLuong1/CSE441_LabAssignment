import { v4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const mapContactsUsingAsync = (contact) => {
    const { name, picture, phone, cell, email } = contact;
    console.log(contact);
    return {
        id: v4(),
        name: name.first + '' + name.last,
        avatar: picture.large,
        phone,
        cell,
        email,
        favorite: Math.random() < 0.1 ? true : false,
    };
};

export const fetchContactsSuccessUsingAsync = async () => {
    try {
        const mappedContacts = mapContactsUsingAsync;
        await AsyncStorage.setItem('contacts', JSON.stringify(mappedContacts));
        console.log('Contacts saved successfully');
    } catch (error) {
        console.error('Failed to save contacts:', error);
    }
};

export const getContacts = async () => {
    try {
        const contacts = await AsyncStorage.getItem('contacts');
        return contacts != null ? JSON.parse(contacts) : null;
    } catch (error) {
        console.error('Failed to load contacts:', error);
    }
};