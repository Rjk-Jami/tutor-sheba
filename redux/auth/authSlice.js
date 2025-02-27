
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
    setUserRole: (state, action) => {
      state.role = action.payload.role
    },
    // after logout
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { Registration, logout } = authSlice.actions;

export default authSlice.reducer;
