import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../auth/register/registerSlice";
import loginReducer from "../auth/login/loginSlice";
import authReducer from "../auth/authSlice";
import { rootApi } from "../api/rootApi";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Correct import

// Persist configuration for auth
const persistConfigForAuth = {
  key: "auth",
  storage, 
  whitelist: ["user"], 
};

// Wrap authReducer with persistReducer
const persistedAuthReducer = persistReducer(persistConfigForAuth, authReducer);

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    auth: persistedAuthReducer,
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }).concat(rootApi.middleware),
});

export const persistor = persistStore(store);
