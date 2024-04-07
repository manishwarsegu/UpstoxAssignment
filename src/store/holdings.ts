import { create } from 'zustand';
import { Holdings } from '../api/holdings/types';

interface HoldingTotals {
    currentValueTotal: number;
    totalInvestment: number;
    totalPnl: number;
    todayPnl: number;
  }
  
interface HoldingStore {
    data: Array<Holdings>;
    holdingTotals: HoldingTotals | {};
    setData: (data: any) => void;
    setHoldingTotals: (data: any) => void;
}

const useHoldingStore = create<HoldingStore>((set, get) => ({
    data: [],
    holdingTotals: {},
    setData: (data) => set({ data }),
    setHoldingTotals: (data) => set({ holdingTotals: data }),
}));

export const useHoldings = () => useHoldingStore(state => state.data);

export const useHoldingTotals = () => useHoldingStore(state => state.holdingTotals);

export default useHoldingStore;
