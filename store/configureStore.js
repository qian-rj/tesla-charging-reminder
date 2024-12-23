import {persistStore, persistReducer} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import settingsReducer from "./settingsSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const settings = persistReducer(persistConfig, settingsReducer);

export const store = configureStore({
  reducer: combineReducers({settings}),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
