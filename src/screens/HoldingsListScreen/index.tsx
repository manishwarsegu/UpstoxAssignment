import { View, Text, FlatList } from 'react-native';
import HoldingCard from '../../components/HoldingsList/HoldingCard';
import { useGetHoldingsByUserId } from '../../api/holdings/get-holdings-by-user-id';
import { COMMON_STYLES } from '../../styles/common-styles';
import { Holding } from '../../api/holdings/types';
import { useHoldings } from '../../store/holdings';
import StickyBottomAccordion from '../../components/StickyBottomAccordion';
import AccordionFooter from '../../components/HoldingsList/AccordionFooter';
import AccordionBody from '../../components/HoldingsList/AccordionBody';

const HoldingListItems = ({ item }) => {
    return <HoldingCard cardData={item} />;
};

const HoldingsListScreen = () => {
    const { isLoading, error } = useGetHoldingsByUserId(
        'bde7230e-bc91-43bc-901d-c79d008bddc8',
    );
    const holdingsData = useHoldings();

    if (isLoading) {
        return (
            <View style={COMMON_STYLES.flexCenter}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={COMMON_STYLES.flexCenter}>
                <Text>Error in fetching data</Text>
            </View>
        );
    }

    return (
        <View style={COMMON_STYLES.flex}>
            <FlatList
                data={holdingsData}
                renderItem={HoldingListItems}
                keyExtractor={item => item.symbol}
            />
            <StickyBottomAccordion
                footerComponent={<AccordionFooter />}
                body={<AccordionBody />}
            />
        </View>
    );
};

export default HoldingsListScreen;
