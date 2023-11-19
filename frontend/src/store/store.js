import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // Другие редюсеры, если они есть
});

export const store = configureStore({ reducer: rootReducer });
