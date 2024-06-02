import React from "react";
import { View, Text, Alert } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { StyleSheet } from "react-native";
import axios from "axios";

const Delete = ({ route }) => {

  const { id } = route.params;
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteFile = async () => {
    try {
      const response = await axios.delete(`https://kami-backend-5rs0.onrender.com/services/${id}`, {
        headers: {
          //      Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      })

      console.log('DELETE Response:', response.data);
      Alert.alert("Success", "Service deleted successfully!");

    } catch (error) {
      console.error('Error deleting data:', error);
      Alert.alert("Error", "Failed to delete service. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <View>
      {isDeleting ? (
        <Text>Deleting...</Text>
      ) : (
        <Menu>
          <MenuTrigger text="Confirm Delete" />
          <MenuOptions>
            <MenuOption onSelect={deleteFile} text="Delete" disabled={isDeleting}>
              <Text style={{ color: 'red' }}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={() => navigation.goBack()} text="Cancel">
              <Text>Cancel</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      )}
    </View>
  )
}




export default Delete;