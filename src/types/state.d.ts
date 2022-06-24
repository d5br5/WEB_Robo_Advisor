import { Simulation, Asset, AssetInvested, Calendar } from ".";

export interface AccountState {
	userId: string;
	isAuthenticated: boolean;
	jwt: string;
}

export interface SimulationState {
	simulations: Simulation[];
	isSimulating: boolean;
	selectedSimulation: number;
	simDetail: Simulation;
}

export interface AssetClassState {
	assetClass: Asset[];
	timerId: number;
}

export interface ModalState {
	src: string;
	isActive: boolean;
	isImg: boolean;
	isDiv: boolean;
}

export interface BackSelectionState {
	investList: AssetInvested[];
	strChecked: boolean[];
	period: Calendar<string>;
	rebalancing: number;
}

export interface AISelectionState {
	selectedModelNum: number;
	calendar: {
		start: string;
		end: string;
	};
	rebalancing: number;
}

export interface PageState {
	mode: "AS" | "TS";
}

interface TradingConfig {
	portfolioId: string;
	createdDate: string;
	isExecuted: boolean;
	agent: any;
	info: any;
	order: any;
	trade: any;
}

interface TradingResult {
	[key: string]: any;
}

export interface TradingState {
	PFs: TradingConfig[];
	isExecuted: boolean;
	selectedPF: number;
	pfResult: TradingResult;
}
