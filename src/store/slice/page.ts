import { createSlice } from "@reduxjs/toolkit";
import { PageState } from "../../types/state";

const PageIS: PageState = {
	mode: "AS",
};

export const pageSlice = createSlice({
	name: "page",
	initialState: PageIS,
	reducers: {
		changeMode: (state, { payload }) => {
			state.mode = payload;
		},
	},
});

export const { changeMode } = pageSlice.actions;
export default pageSlice.reducer;
