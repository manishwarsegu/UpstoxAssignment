import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';
import { api } from '../axios.instance';
import { apiKeys } from '../key-constants';
import { Holdings } from './types';
import useHoldingStore from '../../store/holdings';
import calculateHoldingsValuesAndTotals from './calculateHoldingsValuesAndTotals';

export const getHoldingsByUserId = async (productId: string) => {
    return (await api.get<Holdings>(`/v3/${productId}`)).data;
};

export const useGetHoldingsByUserId = (
    productId: string,
    options?: UseQueryOptions<
        Holdings,
        AxiosError,
        Holdings,
        readonly (string | number)[]
    >,
) => {
    const { setData, setHoldingTotals } = useHoldingStore();

    const { data: holdingsData, isLoading, refetch, isSuccess, error, } = useQuery({
        queryFn: () => getHoldingsByUserId(productId),
        queryKey: [...apiKeys.holdingsByUserId(productId)],

        select: (data) => data.userHolding,
        //setting to store is not required, just did it to demonstrate how zustand and react-query can be used together
        onSuccess: (data) => {
            const {
                holdings,
                currentValueTotal,
                totalInvestment,
                totalPnl,
                todayPnl,
            } = calculateHoldingsValuesAndTotals(data);

            setData(holdings);
            setHoldingTotals({
                currentValueTotal,
                totalInvestment,
                totalPnl,
                todayPnl,
            });
        },
        ...options,
    });

    return {
        holdingsData, isLoading, refetch, isSuccess, error
    }
};
