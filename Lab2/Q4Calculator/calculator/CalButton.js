import { Text, TouchableOpacity } from "react-native"
import Style from "./Style"

TouchableOpacity.defaultProps = { activeOpacity: 0.7 };

export const CalButton = ({ value, onPress }) => {
    return(
        <TouchableOpacity onPress={onPress} style={[Style.calButton, value == 'C' && {flex : 3}]}>
            <Text style = {{fontWeight: 'bold', fontSize : 18}}>{value}</Text>
        </TouchableOpacity>
    )
}