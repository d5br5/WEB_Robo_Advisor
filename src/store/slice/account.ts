import jwt_decode from "jwt-decode";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "../../types";
import { AccountState } from "../../types/state";

const AccountIS: AccountState = {
	userId: "",
	isAuthenticated: false,
	jwt: "",
};

export const accountSlice = createSlice({
	name: "account",
	initialState: AccountIS,
	reducers: {
		login: (state: AccountState, action: PayloadAction<string>) => {
			const token: string = action.payload;
			state.jwt = token;
			state.userId = jwt_decode<Token>(token).sub;
			state.isAuthenticated = true;
		},
		logout: (state: AccountState) => {
			state.jwt = "";
			state.userId = "";
			state.isAuthenticated = false;
		},
	},
});

export const { login, logout } = accountSlice.actions;
export default accountSlice.reducer;
