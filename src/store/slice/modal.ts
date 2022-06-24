import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../../types/state";

const ModalIS: ModalState = {
	src: "",
	isActive: false,
	isImg: false,
	isDiv: false,
};

export const modalSlice = createSlice({
	name: "modal",
	initialState: ModalIS,
	reducers: {
		onImgModal: (state: ModalState, action) => {
			state.isDiv = false;
			state.isImg = true;
			state.src = action.payload;
			state.isActive = true;
		},
		onDivModal: (state: ModalState) => {
			state.isImg = false;
			state.isDiv = true;
			state.src = "";
			state.isActive = true;
		},
		offModal: (state: ModalState) => {
			state.isActive = false;
			state.isImg = false;
			state.isDiv = false;
			state.src = "";
		},
	},
});

export const { onDivModal, onImgModal, offModal } = modalSlice.actions;
export default modalSlice.reducer;
