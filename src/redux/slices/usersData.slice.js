import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: [],
};

const slice = createSlice({
  name: "usersData",
  initialState,
  reducers: {
    sendMoney(state, { payload }) {
      const { balance_to_send, card_number, reciever_card_number } = payload;
      const sender = state.usersData.find(
        (user) => user.card_number === card_number
      );
      const reciever = state.usersData.find(
        (user) => user.card_number === reciever_card_number
      );

      sender.balance = +sender.balance - balance_to_send;
      reciever && (reciever.balance = +reciever.balance + balance_to_send);
    },

    setUsersData(state, { payload }) {
      state.usersData = payload;
    },
  },
});

export const { addUser, sendMoney, setUsersData } = slice.actions;
export default slice.reducer;
