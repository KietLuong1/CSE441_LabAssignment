import { Image, TouchableHighlight, View } from "react-native";
import styles from "./styles";
import { Text } from "react-native-paper";

export default ContactListItem = ({name, avatar, phone, onPress}) =>{
    return(
        <TouchableHighlight underlayColor={"grey"} onPress={onPress} style={styles.container}>
            <View style={styles.contactInfo}>
                <Image source={{uri: avatar}} style = {styles.avatar}/>
                <View style = {styles.details}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{phone}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}