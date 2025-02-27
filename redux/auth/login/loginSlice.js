import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userOption:{
        tutor:false,
        student:false
    }

    
}

export const loginSlice= createSlice({
    name:"login",
    initialState,
    reducers:{
        setLoginUserType: (state, action) => {
            const userType = action.payload.userType;
            // Toggle the user option based on the userType passed in the action payload
            if (userType === "tutor") {
              state.userOption.tutor = !state.userOption.tutor;
              state.userOption.student = false;
            } else if (userType === "student") {
              state.userOption.student = !state.userOption.student;
              state.userOption.tutor = false; 
            }
          },
          // login :
          login: (state, action) => {
            setUser(action.payload.user);
          },
    }
})

export const {setLoginUserType, login}= loginSlice.actions
export default loginSlice.reducer