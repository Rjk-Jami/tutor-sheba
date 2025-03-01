const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  jobId: "",
};

const commonFilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setJobId: (state, action) => {
      state.jobId = action.payload;
    },
  },
});

export const { setJobId } = commonFilterSlice.actions;
export default commonFilterSlice.reducer;
