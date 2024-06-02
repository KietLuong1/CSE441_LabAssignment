import { View } from "react-native"
import styles from "./styles"
import { Icon, Text } from "react-native-paper"

export default DetailListItem = ({icon, title, subtitle}) =>{
    return(
        <View style = {[styles.container, {padding: 10, borderBottomWidth: 1, flexDirection: "row", alignItems:"center"}]}>
            <Icon style={{flex: 1}} source={icon} size={30} color={"#663399"}/>
            <View style={[styles.details, {flex: 4}]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    )
}