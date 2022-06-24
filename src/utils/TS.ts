import * as defaultValue from "../config/data/TS";
import day, { Dayjs } from "dayjs";
import { Dispatch } from "react";
import { getPFs } from "../api/trading";
import { setPFs } from "../store/slice/trading";
import { TradingConfig } from "../types/state";
import { getKoreanTime } from "./AS";

export function minValidDay(date: Dayjs) {
	const now = new Date(date.toDate());
	while (now.getDay() === 0 || now.getDay() === 6) {
		now.setDate(now.getDate() + 1);
	}
	return now;
}

export function maxValidDay(date: Dayjs) {
	const now = new Date(date.toDate());
	while (now.getDay() === 0 || now.getDay() === 6) {
		now.setDate(now.getDate() - 1);
	}
	return now;
}

export const validLastDay = maxValidDay(day().subtract(6, "month"));
export const validToday = maxValidDay(day().subtract(1, "day"));
export const validYesterday = maxValidDay(day().subtract(2, "day"));

export const ConditionName = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
];

export const inputJsonParser = (
	data: any,
	buyStrs: defaultValue.StringOption[],
	sellStrs: defaultValue.StringOption[],
	userId: string
) => {
	const start: day.Dayjs = day(data.PeriodStart || validLastDay);
	const end: day.Dayjs = day(data.PeriodEnd || validToday);
	const dateDiff = end.diff(start, "day") + 1;
	return {
		agent: {
			userId: userId,
			fee: data.Fee || defaultValue.fee[0].value,
			slippage: data.Slippage || defaultValue.slippage[0].value,
			initBalance: parseInt(data.InitBalance || 2000) * 10000,
			oneStockWeight: data.OneStockWeight / 100,
			maxHoldNum: parseInt(data.MaxHoldNum || 10),
		},
		info: {
			periods: [day(start).format("YYYY-MM-DD"), day(end).format("YYYY-MM-DD")],
			universe: data.Universe || defaultValue.universe[0].value,
		},
		order: {
			buyOrder: {
				lookback: -1,
				ptype: data.BuyOrder || defaultValue.targetPrice[0].value,
				tune: data.BuyOrderPercent === undefined ? -0.0 : data.BuyOrderPercent / 100,
			},
			sellOrder: {
				lookback: -1,
				ptype: data.SellOrder || defaultValue.targetPrice[0].value,
				tune: data.SellOrderPercent === undefined ? -0.0 : data.SellOrderPercent / 100,
			},
			timeOrder: {
				lookback: -1,
				ptype: data.TimeOrder || defaultValue.targetPrice[0].value,
				tune: data.TimeOrderPercent === undefined ? -0.0 : data.TimeOrderPercent / 100,
			},
		},
		trade: {
			buy: {
				condition: buyStrs.map((a: defaultValue.StringOption, i: number) => ({
					name: ConditionName[i],
					factor: a.value,
					lower: data[`buy ${a.value}`][0] / 100,
					upper: data[`buy ${a.value}`][1] / 100,
				})),
				logic: data.buyLogic || "",
			},
			sell: {
				condition: sellStrs.map((a: defaultValue.StringOption, i: number) => ({
					name: ConditionName[i],
					factor: a.value,
					lower: data[`sell ${a.value}`][0] / 100,
					upper: data[`sell ${a.value}`][1] / 100,
				})),
				logic: data.sellLogic || "",
				timeCuts: [data.holdMin || 1, data.holdMax || 5 || dateDiff],
			},
			priority: {
				condition: `${data.Priority_item || defaultValue.priorityItem[0].value}_${
					data.Priority_time || defaultValue.priorityTime[0].value
				}`,
				order: data.Priority_sort || defaultValue.prioritySort[0].value,
			},
		},
	};
};

export async function initTrading(dispatch: Dispatch<any>, userId: string, jwt: string) {
	const result = await getPFs(userId, jwt);
	const converted = result?.data?.data?.elements.map((a: TradingConfig) => ({
		...a,
		createdDate: getKoreanTime(a.createdDate),
	}));

	console.log(converted);
	dispatch(setPFs(converted));
}
