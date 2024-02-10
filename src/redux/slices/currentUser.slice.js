import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const slice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.currentUser = payload;
    },
  },
});

export const { setUser } = slice.actions;
export default slice.reducer;
