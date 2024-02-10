import { configureStore } from "@reduxjs/toolkit";
import usersDataReducer from "./slices/usersData.slice";
import currentUserReducer from "./slices/currentUser.slice";

const store = configureStore({
  reducer: {
    usersData: usersDataReducer,
    currentUser: currentUserReducer,
  },
});

export default store;
