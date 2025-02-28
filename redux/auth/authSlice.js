
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role: null

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // setUser
  
    Registration: (state, action) => {
      state.user = action.payload.user;
    },
    login: (state, action) => {
      state.user = action.payload.user;
    },
    setUserRole: (state, action) => {
      state.role = action.payload.role
    },
    // after logout
    logout: (state) => {
      state.user = null;
      state.role = null
    },
  },
});

export const { Registration, logout ,setUserRole, login} = authSlice.actions;

export default authSlice.reducer;
