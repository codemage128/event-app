import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "app",
  initialState: {
    location: null,
    filteredEvents: null,
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setFilteredEvents: (state, action) => {
      state.filteredEvents = action.payload;
    },
  },
});

export const { reducer, actions } = slice;
export const {setLocation, setFilteredEvents} = slice.actions
export default slice;
