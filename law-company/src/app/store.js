import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import rootReducer from "./index.js";
import localforage from "localforage";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const persistConfig = {
    key: "eev_law_company",
    version: 1,
    storage: localforage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
    devTools: false,
});

let persistor = persistStore(store);

export { persistor };
