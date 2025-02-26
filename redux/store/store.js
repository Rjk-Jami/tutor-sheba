import { configureStore } from "@reduxjs/toolkit";
import  registerReducer  from "../auth/register/registerSlice";
import  loginReducer from "../auth/login/loginSlice";

export const store = configureStore({
    reducer:{
        register: registerReducer,
        login:loginReducer
    },
    
})