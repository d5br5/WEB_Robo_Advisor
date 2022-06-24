import { Str } from "../../types";

interface Index {
	value: string;
	title: string;
	desc: string;
	disabled?: boolean;
	count: number;
}

interface Strategy {
	value: Str;
	title: string;
	desc: string;
}

export const categoryOptions: Index[] = [
	{
		value: "none",
		title: "자산 종류를 선택해주세요.",
		desc: "",
		disabled: true,
		count: 0,
	},
	{
		value: "KOSPI",
		title: "KOSPI",
		desc: "한국 KOSPI 지수 증권",
		count: 807,
	},
	{
		value: "KOSDAQ",
		title: "KOSDAQ",
		desc: "한국 KOSDAQ 지수 증권",
		count: 1507,
	},
	{
		value: "ETF_KR",
		title: "한국 ETF",
		desc: "한국 시장에 상장된 ETF",
		count: 523,
	},
	{
		value: "ETF_US",
		title: "미국 ETF",
		desc: "미국 시장에 상장된 ETF",
		count: 3078,
	},
	{
		value: "IXIC",
		title: "NASDAQ",
		desc: "미국 NASDAQ 종합지수 증권",
		count: 3454,
	},
	{
		value: "SPX",
		title: "S&P 500",
		desc: "미국 S&P 500 지수 증권",
		count: 505,
	},
	{
		value: "GDAXI",
		title: "DAX 30",
		desc: "독일 DAX30지수 증권",
		count: 30,
	},
	{
		value: "NI225",
		title: "NIKKEI 225",
		desc: "일본 NIKKEI225 지수 증권",
		count: 225,
	},
	{
		value: "UKX",
		title: "FTSE",
		desc: "영국 FTSE 지수 증권",
		count: 605,
	},
	{
		value: "HSI",
		title: "HSI",
		desc: "홍콩 항셍지수 증권",
		count: 60,
	},
];

export const strList: Strategy[] = [
	{
		value: "ew",
		title: "EW",
		desc: "모든 자산의 투자 비중 동일",
	},
	{
		value: "iv",
		title: "IV",
		desc: "각 자산에 변동성의 역수를 투자하여 안정화",
	},
	{
		value: "rp",
		title: "RP",
		desc: "모든 자산의 위험 비중 동일",
	},
	{
		value: "gmv",
		title: "GMV",
		desc: "포트폴리오의 전체 변동성을 최소화",
	},
	{
		value: "mdp",
		title: "MDP",
		desc: "포트폴리오의 변동성에 자산별 가중평균하여 변동성 비율을 최대화",
	},
	{
		value: "mvo",
		title: "MVO",
		desc: "기대 수익률과 변동성의 균형을 고려",
	},
];

export const resultTableHeader = [
	{
		key: "totalReturn",
		label: "총 누적 수익률",
		desc: "Total Return",
	},
	{
		key: "cagr",
		label: "연환산 수익률",
		desc: "CAGR",
	},
	{
		key: "volatility",
		label: "변동성",
		desc: "Volatility",
	},
	{
		key: "mdd",
		label: "최대 낙폭",
		desc: "MDD",
	},
	{
		key: "sharpeRatio",
		label: "샤프지수",
		desc: "Sharpe Ratio",
	},
	{
		key: "sortinoRatio",
		label: "소르티노지수",
		desc: "Sortino Ratio",
	},
];

export const resultTableTooltip = [
	"자산 배분 전략",
	"시뮬레이션을 진행한 전체 기간 동안의 수익률",
	"전체 기간에 대한 수익률을 연 수익률로 환산한 값",
	"전체 기간의 변동성을 연 단위 변동성으로 환산하여 수익률의 변화 정도를 나타낸 값",
	"주가의 직전 고점 대비 하락의 폭이 가장 큰 값",
	"포트폴리오 가치의 변동성(위험) 대비 초과 수익\n* (연환산 수익률 - 무위험 수익률) / 연환산 변동성",
	"포트폴리오의 가치가 하락할 때만을 고려한 변동성(위험) 대비 초과수익\n* (연환산 수익률 - 무위험 수익률) / 연환산 음의 수익률의 변동성",
];

export const AIModel = [
	{
		assets: [
			{ name: "SPDR GOLD SHARES", ticker: "GLD", index: "ETF_US" },
			{ name: "ISHARES S&P GSCI CMOD.IDXD.TST", ticker: "GSG", index: "ETF_US" },
			{ name: "ISHARES 7-10 YR.TRSY.BD", ticker: "IEF.O", index: "ETF_US" },
			{ name: "ISHARES 20+ YR.TRSY.BOND", ticker: "TLT.O", index: "ETF_US" },
			{ name: "VANGD.TTL.STK.MIF.ETF", ticker: "VTI", index: "ETF_US" },
		],
		cal: {
			start: "2007-01-01",
			end: "2021-12-31",
		},
	},
	{
		assets: [
			{ name: "ISHARES 7-10 YR.TRSY.BD", ticker: "IEF.O", index: "ETF_US" },
			{ name: "SPDR S&P 500 ETF TRUST", ticker: "SPY", index: "ETF_US" },
		],
		cal: {
			start: "2003-01-01",
			end: "2021-12-31",
		},
	},
];
