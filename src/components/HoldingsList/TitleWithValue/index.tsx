import { Text, View } from "react-native";
import { COMMON_STYLES } from "../../../styles/common-styles";

const TitleWithValue = ({ title, value }: {title: string, value: string}) => {
    return (
        <View style={[COMMON_STYLES.rowContainer, COMMON_STYLES.colorOfBackground, {paddingHorizontal: 16}]}>
            <Text style={[COMMON_STYLES.fontStyle, COMMON_STYLES.weightOfFont]}>{title}</Text>
            <Text style={COMMON_STYLES.fontStyle}>{value}</Text>
        </View>
    );
};

export default TitleWithValue;