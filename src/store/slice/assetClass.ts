import { createSlice } from "@reduxjs/toolkit";
import { AssetClassState } from "../../types/state";
import { assetClass } from "../../data/assetClass";

const AssetClassIS: AssetClassState = {
	assetClass,
	timerId: -1,
};

export const assetClassSlice = createSlice({
	name: "assetClass",
	initialState: AssetClassIS,
	reducers: {
		setTimerId: (state, { payload }) => {
			state.timerId = payload;
		},
	},
});

export const { setTimerId } = assetClassSlice.actions;
export default assetClassSlice.reducer;
