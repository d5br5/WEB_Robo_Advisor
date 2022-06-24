import { createSlice } from "@reduxjs/toolkit";
import { TradingState } from "../../types/state";

const TradingIS: TradingState = {
	PFs: [],
	isExecuted: false,
	selectedPF: 0,
	pfResult: {},
};

export const tradingSlice = createSlice({
	name: "trading",
	initialState: TradingIS,
	reducers: {
		setPFs: (state, { payload }) => {
			state.PFs = payload;
		},
		setIsExecuted: (state, { payload }) => {
			state.isExecuted = payload;
		},
	},
});

export const { setPFs, setIsExecuted } = tradingSlice.actions;

export default tradingSlice.reducer;
