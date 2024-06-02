
import 'react-native-gesture-handler';
import { StyleSheet, View, Text, Alert, Button } from 'react-native';
import ContactThum from './ContactThum';
import { IconButton, } from 'react-native-paper';
import styles from './styles';
import DetailListItem from './DetailListItem';
import { useState } from 'react';

const ProfileContact = ({ route }) => {
    const { contact } = route.params;
    const { id, avatar, name, email, phone, cell, favorite } = contact;
    const [contactState, setContactState] = useState(contact);

        return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThum avatar={avatar} name={name} phone={phone} />
            </View>
            <View style={styles.detailsSection}>
                <DetailListItem icon="mail" title="Email" subtitle={email} />
                <DetailListItem icon="phone" title="Work" subtitle={phone} />
                <DetailListItem icon="cellphone" title="Personal" subtitle={cell} />
                <View style={{ alignItems: 'center' }}>
                    <IconButton
                        icon={favorite == true ? "star-check" : "star-check-outline"}
                        iconColor="#663399"
                        size={20}
                        onPress={() => {
                        }}
                    />
                </View>
            </View>
        </View>
    );
};
export default ProfileContact;

