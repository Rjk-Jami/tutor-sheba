const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tuitionTypes: {
      allTuition: false,
      homeTuition: false,
      onlineTuition: false,
    },
  };

const tuitionTypeSlice = createSlice({
  name: "tuitionType",
  initialState,
  reducers: {
    setTuitionType: (state, action) => {
      const selectedType = action.payload;

      // Reset all filters to false
      for (const key in state.tuitionTypes) {
        state.tuitionTypes[key] = false;
      }

      // Enable only the selected tuition type
      state.tuitionTypes[selectedType] = true;
    },
  },
});

export const { setTuitionType } = tuitionTypeSlice.actions
export default tuitionTypeSlice.reducer
