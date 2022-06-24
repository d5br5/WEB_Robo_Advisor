import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { strList } from "../../config/data/AS";
import { BackSelectionState } from "../../types/state";

const BackSelectionIS: BackSelectionState = {
	investList: [],
	strChecked: Array.from({ length: strList.length }, () => false),
	period: {
		start: "1985-01-01",
		end: dayjs().format("YYYY-MM-DD"),
	},
	rebalancing: 40,
};

export const backSelectionSlice = createSlice({
	name: "backSelect",
	initialState: BackSelectionIS,
	reducers: {
		//step1
		changeInvestList: (state: BackSelectionState, { payload }) => {
			state.investList = payload;
		},
		changePeriod: (state: BackSelectionState, { payload }) => {
			state.period = payload;
		},

		//step2
		toggleCheckStr: (state: BackSelectionState, { payload }) => {
			state.strChecked[payload] = !state.strChecked[payload];
		},

		allReset: (state: BackSelectionState) => {
			state.investList = BackSelectionIS.investList;
			state.strChecked = BackSelectionIS.strChecked;
			state.period = BackSelectionIS.period;
			state.rebalancing = BackSelectionIS.rebalancing;
		},
	},
});

export const { changeInvestList, changePeriod, toggleCheckStr, allReset } =
	backSelectionSlice.actions;
export default backSelectionSlice.reducer;
