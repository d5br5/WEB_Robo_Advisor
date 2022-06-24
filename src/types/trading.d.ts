export interface TradingOrder {
	BuyOrder: string;
	BuyOrderPercent: number;
	Fee: number;
	initBalance: number;
	oneStockWeight: number;
	PeriodEnd: Date;
	PeriodStart: Date;
	Priority_item: string;
	Priority_sort: string;
	Priority_time: string;
	SellOrder: string;
	SellOrderPercent: number;
	Slippage: number;
	TimeOrder: string;
	TimeOrderPercent: number;
	Universe: string;
	buyLogic?: string;
	holdMax: number;
	holdMin: number;
	sellLogic?: string;
}
