import { roundToTwoDecimals } from "../../utils/helper";
import { Holding, Holdings } from "./types";

const calculateHoldingsValuesAndTotals = (holdings: Holdings) => {
  let currentValueTotal = 0;
  let totalInvestment = 0;
  let todayPnl = 0;

  const updatedHoldings = holdings?.map((holding: Holding) => {
    const currentValue = holding.ltp * holding.quantity;
    const investmentValue = holding.avgPrice * holding.quantity;
    const pnl = currentValue - investmentValue;

    currentValueTotal += currentValue;
    totalInvestment += investmentValue;
    todayPnl += (holding.close - holding.ltp) * holding.quantity;

    return {
      ...holding,
      currentValue,
      investmentValue,
      pnl: roundToTwoDecimals(pnl),
    };
  });

  const totalPnl = currentValueTotal - totalInvestment;

  return {
    holdings: updatedHoldings,
    currentValueTotal: roundToTwoDecimals(currentValueTotal),
    totalInvestment: roundToTwoDecimals(totalInvestment),
    totalPnl: roundToTwoDecimals(totalPnl),
    todayPnl: roundToTwoDecimals(todayPnl),
  };
};


export default calculateHoldingsValuesAndTotals;