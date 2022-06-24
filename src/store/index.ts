import assetClassReducer from "./slice/assetClass";
import simulationReducer from "./slice/simulation";
import modalReducer from "./slice/modal";
import backSelectionReducer from "./slice/backSelection";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
	assetClass: assetClassReducer,
	simulation: simulationReducer,
	modal: modalReducer,
	backSelection: backSelectionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["account", "simulation", "page"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
