
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  jobId: "",
  district:"All",
  area:"All",
  medium:"All",
  classOfMedium:"All"

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
    },
    setMedium: (state, action) => {
      state.medium = action.payload;
    },
    setClassOfMedium: (state, action) => {
      state.classOfMedium = action.payload;
    }
  },
});

export const { setJobId,setDistrict, setArea, setMedium, setClassOfMedium } = commonFilterSlice.actions;
export default commonFilterSlice.reducer;
