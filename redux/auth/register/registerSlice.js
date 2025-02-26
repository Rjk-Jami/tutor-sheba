import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userOption:{
        tutor:true,
        student:false
    }

    
}

export const registerSlice= createSlice({
    name:"register",
    initialState,
    reducers:{
        setUserType: (state, action) => {
            const userType = action.payload.userType;
            // Toggle the user option based on the userType passed in the action payload
            if (userType === "tutor") {
              state.userOption.tutor = !state.userOption.tutor;
              state.userOption.student = false;
            } else if (userType === "student") {
              state.userOption.student = !state.userOption.student;
              state.userOption.tutor = false; 
            }
          }
    }
})

export const {setUserType}= registerSlice.actions
export default registerSlice.reducer