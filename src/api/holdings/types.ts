export interface Holding {
    symbol: string;
    quantity: number;
    ltp: number;
    avgPrice: number;
    close: number;
    pnl: number;
  }

  export interface Holdings {
    userHolding: Array<Holding>;
  }