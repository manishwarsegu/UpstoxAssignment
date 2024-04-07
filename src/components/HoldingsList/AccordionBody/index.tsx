import { View } from "react-native";
import { useHoldingTotals } from "../../../store/holdings";
import { formatRupee } from "../../../utils/helper";
import TitleWithValue from "../TitleWithValue";
import { COMMON_STYLES } from "../../../styles/common-styles";

const AccordionBody = () => {
    const {
        currentValueTotal,
        totalInvestment,
        todayPnl,
    } = useHoldingTotals();

    return (
        <View style={[COMMON_STYLES.colorOfBackground, {gap: 12}]}>
            <TitleWithValue title="Current Value:" value={formatRupee(currentValueTotal)} />
            <TitleWithValue title="Total Investment:" value={formatRupee(totalInvestment)} />
            <TitleWithValue title="Today's Profit & Loss:" value={formatRupee(todayPnl)} />
        </View>
    );
};

export default AccordionBody;