//Asset

interface AssetCore {
	name: string;
	ticker: string;
}

export interface AssetIndexTicker {
	index: string;
	ticker: string;
}

export interface Asset extends AssetCore {
	id?: string;
	index: string;
	startDate: string;
	endDate: string;
}

export interface AssetInvested extends Asset {
	nameticker: string;
}

// BackTestForm

export interface BackTestForm {
	userId: string;
	rebalancingPeriod: number;
	startDate: string;
	endDate: string;
	assets: AssetIndexTicker[];
	strategies: Str[];
}

// Strategy

export type Str = "ew" | "iv" | "rp" | "gmv" | "mdp" | "mvo" | "snp" | "kospi" | "ppo-growth";

interface Strategy {
	name: Str;
	done: boolean;
}

interface EvalResults {
	[key: string]: number;
}

interface StrategyResult {
	name: Str;
	done: boolean;
	dailyPfWeights: Array<{ weights: number[]; date: string }>;
	dailyPfValues: Array<{ weight: number; date: string }>;
	recommendedPf: number[];
	evaluationResults: EvalResults;
	rebalancingWeights?: Array<{ date: string; weights: number[] }>;
}

// Simulation

export interface SimulationCore {
	simulationId: string;
	assets: AssetCore[];
	createdDatetime: string;
	startDate: string;
	endDate: string;
	done: boolean;
	rebalancingPeriod: number;
}

export interface Simulation extends SimulationCore {
	strategies: StrategyResult[];
}

export interface OngoingSimulation extends SimulationCore {
	assetName: string;
	strs: Strategy[];
}

// ETC

export interface Token {
	sub: string;
	iat: number;
	exp: number;
}

interface Calendar<T> {
	start: T;
	end: T;
}

// dashboard

export interface Ranker {
	ranking: number;
	simulationId: string;
	strategyName: string;
	cagr: number;
	userId: string;
	assets: Asset[];
}

// dashboard simdetail

export interface DashboardSimDetail {
	assets: Asset[];
	createdDate: string;
	done: boolean;
	startDate: string;
	endDate: string;
	rebalancingPeriod: number;
	simulationId: string;
	strategy: StrategyResult;
}

//

export interface Ranker {
	ranking: number;
	simulationId: string;
	strategyName: string;
	cagr: number;
	userId: string;
	assets: Asset[];
}
