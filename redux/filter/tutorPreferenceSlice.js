const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  tutorPreferenceType: {
      all: true,
      male: false,
      female: false,
    },
  };

const tutorPreferenceSlice = createSlice({
  name: "tutorPreference",
  initialState,
  reducers: {
    setTutorPreference: (state, action) => {
      const selectedType = action.payload;

      // Reset all filters to false
      for (const key in state.tutorPreferenceType) {
        state.tutorPreferenceType[key] = false;
      }

      // Enable only the selected tuition type
      state.tutorPreferenceType[selectedType] = true;
    },
  },
});

export const { setTutorPreference } = tutorPreferenceSlice.actions
export default tutorPreferenceSlice.reducer
