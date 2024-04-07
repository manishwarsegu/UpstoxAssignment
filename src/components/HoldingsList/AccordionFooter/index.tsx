import { View } from "react-native";
import { useHoldingTotals } from "../../../store/holdings";
import { formatRupee } from "../../../utils/helper";
import TitleWithValue from "../TitleWithValue";
import { COMMON_STYLES } from "../../../styles/common-styles";


const AccordionFooter = () => {
    const { totalPnl } = useHoldingTotals();
    return (
        <View style={[COMMON_STYLES.colorOfBackground, {paddingVertical: 24}]}>
            <TitleWithValue title='Profit & Loss:' value={formatRupee(totalPnl)} />
        </View>
    );
}

export default AccordionFooter;