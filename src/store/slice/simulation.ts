import { createSlice } from "@reduxjs/toolkit";
import { SimulationState } from "../../types/state";

const SimulationIS: SimulationState = {
	simulations: [],
	isSimulating: false,
	selectedSimulation: 0, //
	simDetail: {
		simulationId: "",
		createdDatetime: "not yet",
		assets: [],
		startDate: "not yet",
		endDate: "not yet",
		rebalancingPeriod: 40,
		done: false,
		strategies: [],
	},
};

export const simulationSlice = createSlice({
	name: "simulation",
	initialState: SimulationIS,
	reducers: {
		setSelectedSimulation: (state, { payload }) => {
			state.selectedSimulation = payload;
		},
		setSimulations: (state, { payload }) => {
			state.simulations = payload;
		},
		setIsSimulating: (state, { payload }) => {
			state.isSimulating = payload;
		},
		setSimDetail: (state, { payload }) => {
			state.simDetail = payload;
		},
		deleteSimuById: (state, { payload }) => {
			state.simulations = state.simulations.filter((a) => a.simulationId !== payload);
		},
	},
});

export const {
	setSelectedSimulation,
	setSimulations,
	deleteSimuById,
	setSimDetail,
	setIsSimulating,
} = simulationSlice.actions;

export default simulationSlice.reducer;
