
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  jobId: "",
  district:"All",
  area:"All",
  medium:"All",
  classOfMedium:"All",
  pagination: {
    page: 1,
    limit: 10,
  },
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
    },
    setPage: (state, action) => {
      state.pagination.page = action.payload;
    },
    setLimit: (state, action) => {
      state.pagination.limit = action.payload;
    },
  },
});

export const { setJobId,setDistrict, setArea, setMedium, setClassOfMedium, setPage, setLimit } = commonFilterSlice.actions;
export default commonFilterSlice.reducer;
