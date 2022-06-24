export interface Option {
	label: string;
}

export interface NumberOption extends Option {
	value: number;
}

export interface StringOption extends Option {
	value: string;
}

export const fee: NumberOption[] = [
	{
		label: "0.015%",
		value: 0.00015,
	},
	{
		label: "0.005%",
		value: 0.00005,
	},
	{
		label: "0.001%",
		value: 0.00001,
	},
];

export const slippage: NumberOption[] = [
	{
		label: "0%",
		value: 0,
	},
	{
		label: "0.05%",
		value: 0.0005,
	},
	{
		label: "0.1%",
		value: 0.001,
	},
	{
		label: "0.15%",
		value: 0.0015,
	},
	{
		label: "0.2%",
		value: 0.002,
	},
];

export const universe: StringOption[] = [
	{ label: "KOSPI", value: "KOSPI" },
	{ label: "KOSDAQ", value: "KOSDAQ" },
	{ label: "TOTAL", value: "TOTAL" },
];

export const targetPrice: StringOption[] = [
	{ label: "전일 종가", value: "CLOSE" },
	{ label: "전일 고가", value: "HIGH" },
	{ label: "전일 저가", value: "LOW" },
	{ label: "전일 시가", value: "OPEN" },
	{ label: "매수가", value: "BUYING" },
];

export const strs: Array<{ name: string; str: StringOption[] }> = [
	{
		name: "가격",
		str: [
			{ label: "종가", value: "CLOSE" },
			{ label: "이동평균 종가", value: "MACLOSE" },
			{ label: "지수이동평균 종가", value: "EMACLOSE" },
		],
	},
	{
		name: "모멘텀",
		str: [
			{ label: "RSI", value: "RSI" },
			{ label: "BOP", value: "BOP" },
			{ label: "ADX", value: "ADX" },
			{ label: "ADXR", value: "ADXR" },
			{ label: "CCI", value: "CCI" },
			{ label: "DX", value: "DX" },
			{ label: "MACD", value: "MACD" },
			{ label: "MFI", value: "MFI" },
		],
	},
	{
		name: "거래량",
		str: [
			{ label: "단기 거래량 이격도", value: "STVD" },
			{ label: "장기 거래량 이격도", value: "LTVD" },
			{ label: "OBV", value: "OBV" },
		],
	},
];

export const tradeCut: NumberOption[] = [
	{
		value: -10,
		label: "-10%",
	},
	{
		value: -5,
		label: "-5%",
	},
	{
		value: 0,
		label: "0%",
	},
	{
		value: 5,
		label: "5%",
	},
	{
		value: 10,
		label: "10%",
	},
];

export const buyPortion: NumberOption[] = [
	{ value: 5, label: "5%" },
	{ value: 25, label: "25%" },
	{ value: 50, label: "50%" },
	{ value: 75, label: "75%" },
	{ value: 100, label: "100%" },
];

export const strPortion: NumberOption[] = [
	{ value: 0, label: "0%" },
	{ value: 25, label: "25%" },
	{ value: 50, label: "50%" },
	{ value: 75, label: "75%" },
	{ value: 100, label: "100%" },
];

export const priorityItem: StringOption[] = [
	{ value: "MOM", label: "모멘텀" },
	{ value: "VLM", label: "거래량" },
	{ value: "VLT", label: "변동성" },
];

export const priorityTime: StringOption[] = [
	{ value: "1W", label: "1주" },
	{ value: "2W", label: "2주" },
	{ value: "1M", label: "1개월" },
	{ value: "3M", label: "3개월" },
	{ value: "6M", label: "6개월" },
];

export const prioritySort: StringOption[] = [
	{ value: "nsmallest", label: "오름차순" },
	{ value: "nlargest", label: "내림차순" },
];
