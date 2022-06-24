import { createSlice } from "@reduxjs/toolkit";
import { AssetClassState } from "../../types/state";

const AssetClassIS: AssetClassState = {
	assetClass: [],
	timerId: -1,
};

export const assetClassSlice = createSlice({
	name: "assetClass",
	initialState: AssetClassIS,
	reducers: {
		fetchAssets: (state, { payload }) => {
			state.assetClass = payload;
		},
		setTimerId: (state, { payload }) => {
			state.timerId = payload;
		},
	},
});

export const { fetchAssets, setTimerId } = assetClassSlice.actions;
export default assetClassSlice.reducer;
