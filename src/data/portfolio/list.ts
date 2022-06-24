export const pflist = [
	{
		portfolioId: "62a192625d5f5676c657dee6",
		isExecuted: true,
		userId: "2",
		createdDate: "2022-06-09 06:25",
		agent: {
			userId: "2",
			fee: 0.00015,
			slippage: 0,
			initBalance: 50000000,
			oneStockWeight: 0.1,
			maxHoldNum: 10,
		},
		info: {
			periods: ["20200504", "20200630"],
			universe: "KOSPI",
		},
		order: {
			buyOrder: {
				lookback: -1,
				ptype: "CLOSE",
				tune: 0,
			},
			sellOrder: {
				lookback: -1,
				ptype: "BUYING",
				tune: 0,
			},
			timeOrder: {
				lookback: -1,
				ptype: "CLOSE",
				tune: -0.02,
			},
		},
		trade: {
			buy: {
				conditions: [
					{
						name: "A",
						factor: "RSI",
						upper: 0.7,
						lower: 0.1,
					},
					{
						name: "B",
						factor: "BOP",
						upper: 0.9,
						lower: 0.5,
					},
				],
				logic: "A|B",
			},
			sell: {
				conditions: [
					{
						name: "A",
						factor: "BOP",
						upper: 1,
						lower: 0.95,
					},
				],
				logic: "A",
				timeCuts: [1, 3],
			},
			priority: {
				condition: "MOM_1W",
				order: "descending",
			},
		},
	},
	{
		portfolioId: "62a192534947034eff112a9d",
		isExecuted: true,
		userId: "2",
		createdDate: "2022-06-09 06:25",
		agent: {
			userId: "2",
			fee: 0.00015,
			slippage: 0,
			initBalance: 50000000,
			oneStockWeight: 0.1,
			maxHoldNum: 10,
		},
		info: {
			periods: ["20200504", "20200630"],
			universe: "KOSPI",
		},
		order: {
			buyOrder: {
				lookback: -1,
				ptype: "CLOSE",
				tune: 0,
			},
			sellOrder: {
				lookback: -1,
				ptype: "BUYING",
				tune: 0,
			},
			timeOrder: {
				lookback: -1,
				ptype: "CLOSE",
				tune: -0.02,
			},
		},
		trade: {
			buy: {
				conditions: [
					{
						name: "A",
						factor: "RSI",
						upper: 0.7,
						lower: 0.1,
					},
					{
						name: "B",
						factor: "BOP",
						upper: 0.9,
						lower: 0.5,
					},
				],
				logic: "A|B",
			},
			sell: {
				conditions: [
					{
						name: "A",
						factor: "BOP",
						upper: 1,
						lower: 0.95,
					},
				],
				logic: "A",
				timeCuts: [1, 3],
			},
			priority: {
				condition: "MOM_1W",
				order: "descending",
			},
		},
	},
	{
		portfolioId: "62a191304947034eff112a9c",
		isExecuted: true,
		userId: "2",
		createdDate: "2022-06-09 06:20",
		agent: {
			userId: "2",
			fee: 0.00015,
			slippage: 0,
			initBalance: 50000000,
			oneStockWeight: 0.1,
			maxHoldNum: 10,
		},
		info: {
			periods: ["20200504", "20200630"],
			universe: "KOSPI",
		},
		order: {
			buyOrder: {
				lookback: -1,
				ptype: "CLOSE",
				tune: 0,
			},
			sellOrder: {
				lookback: -1,
				ptype: "BUYING",
				tune: 0,
			},
			timeOrder: {
				lookback: -1,
				ptype: "CLOSE",
				tune: -0.02,
			},
		},
		trade: {
			buy: {
				conditions: [
					{
						name: "A",
						factor: "RSI",
						upper: 0.7,
						lower: 0.1,
					},
					{
						name: "B",
						factor: "BOP",
						upper: 0.9,
						lower: 0.5,
					},
				],
				logic: "A|B",
			},
			sell: {
				conditions: [
					{
						name: "A",
						factor: "BOP",
						upper: 1,
						lower: 0.95,
					},
				],
				logic: "A",
				timeCuts: [1, 3],
			},
			priority: {
				condition: "MOM_1W",
				order: "descending",
			},
		},
	},
	{
		portfolioId: "62a190cd85be7e58645b3915",
		isExecuted: true,
		userId: "2",
		createdDate: "2022-06-09 06:18",
		agent: {
			userId: "2",
			fee: 0.00015,
			slippage: 0,
			initBalance: 50000000,
			oneStockWeight: 0.1,
			maxHoldNum: 10,
		},
		info: {
			periods: ["20200504", "20200630"],
			universe: "KOSPI",
		},
		order: {
			buyOrder: {
				lookback: -1,
				ptype: "CLOSE",
				tune: 0,
			},
			sellOrder: {
				lookback: -1,
				ptype: "BUYING",
				tune: 0,
			},
			timeOrder: {
				lookback: -1,
				ptype: "CLOSE",
				tune: -0.02,
			},
		},
		trade: {
			buy: {
				conditions: [
					{
						name: "A",
						factor: "RSI",
						upper: 0.7,
						lower: 0.1,
					},
					{
						name: "B",
						factor: "BOP",
						upper: 0.9,
						lower: 0.5,
					},
				],
				logic: "A|B",
			},
			sell: {
				conditions: [
					{
						name: "A",
						factor: "BOP",
						upper: 1,
						lower: 0.95,
					},
				],
				logic: "A",
				timeCuts: [1, 3],
			},
			priority: {
				condition: "MOM_1W",
				order: "descending",
			},
		},
	},
	{
		portfolioId: "62a18f9485be7e58645b3914",
		isExecuted: true,
		userId: "2",
		createdDate: "2022-06-09 06:13",
		agent: {
			userId: "2",
			fee: 0.00015,
			slippage: 0,
			initBalance: 50000000,
			oneStockWeight: 0.1,
			maxHoldNum: 10,
		},
		info: {
			periods: ["20200504", "20200630"],
			universe: "KOSPI",
		},
		order: {
			buyOrder: {
				lookback: -1,
				ptype: "CLOSE",
				tune: 0,
			},
			sellOrder: {
				lookback: -1,
				ptype: "BUYING",
				tune: 0,
			},
			timeOrder: {
				lookback: -1,
				ptype: "CLOSE",
				tune: -0.02,
			},
		},
		trade: {
			buy: {
				conditions: [
					{
						name: "A",
						factor: "RSI",
						upper: 0.7,
						lower: 0.1,
					},
					{
						name: "B",
						factor: "BOP",
						upper: 0.9,
						lower: 0.5,
					},
				],
				logic: "A|B",
			},
			sell: {
				conditions: [
					{
						name: "A",
						factor: "BOP",
						upper: 1,
						lower: 0.95,
					},
				],
				logic: "A",
				timeCuts: [1, 3],
			},
			priority: {
				condition: "MOM_1W",
				order: "descending",
			},
		},
	},
];
