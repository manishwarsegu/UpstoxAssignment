import { StyleSheet, View, Text } from "react-native";
import { Holding } from "../../api/holdings/types";
import { COMMON_STYLES } from "../../styles/common-styles";
import { formatRupee } from "../../utils/helper";
import Card from "../Card";

const HoldingCard = ({ cardData }: { cardData: Holding }) => {
    const { symbol, quantity, ltp, pnl, avgPrice, close } = cardData;
    return (
        <Card>
            <View style={[COMMON_STYLES.rowContainer]}>
                <Text style={[COMMON_STYLES.weightOfFont, COMMON_STYLES.fontStyle]}>{symbol}</Text>
                <Text style={[COMMON_STYLES.fontStyle]}>LTP: <Text style={[COMMON_STYLES.weightOfFont]}>{formatRupee(ltp)}</Text> </Text>
            </View>
            <View style={[COMMON_STYLES.rowContainer]}>
                <Text style={[COMMON_STYLES.fontStyle]}>{quantity}</Text>
                <Text style={[COMMON_STYLES.fontStyle]}>P/L: <Text style={[COMMON_STYLES.weightOfFont]}>{formatRupee(pnl)}</Text> </Text>
            </View>
        </Card>
    );
}

export default HoldingCard;