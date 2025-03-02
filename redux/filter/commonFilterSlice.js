
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  jobId: "",
  district:"All",
  area:"All"
};

const commonFilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setJobId: (state, action) => {
      state.jobId = action.payload;
    },
    setDistrict: (state, action) => {
      state.district = action.payload;
    },

    setArea: (state, action) => {
      state.area = action.payload;
    }
  },
});

export const { setJobId,setDistrict, setArea } = commonFilterSlice.actions;
export default commonFilterSlice.reducer;
