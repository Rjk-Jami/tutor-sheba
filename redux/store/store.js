import { configureStore } from "@reduxjs/toolkit";
import  registerReducer  from "../auth/register/registerSlice";

export const store = configureStore({
    reducer:{
        register: registerReducer
    },
    
})