import { createStore } from "redux";

function reducer(state, action) {
  // if (action.type === "add") {
  //   const { firstNameInput, lastNameInput, cardNumberInput, cvv, validThru } =
  //     action.payload;
  //   return {
  //     ...state,
  //     usersData: [
  //       ...state.usersData,
  //       {
  //         first_name: firstNameInput,
  //         last_name: lastNameInput,
  //         card_number: cardNumberInput,
  //         valid_thru: {
  //           month: validThru.month,
  //           year: validThru.year,
  //         },
  //         cvv: cvv,
  //       },
  //     ],
  //   };
  // }
  if (action.type === "set_users") {
    return {
      ...state,
      usersData: action.data,
    };
  } else if (action.type === "checkSender") {
    const { firstNameInput, lastNameInput, cardNumberInput, cvv, validThru } =
      action.payload;
    const userData = state.usersData.find(
      (user) => user.card_number === cardNumberInput
    );

    if (userData) {
      if (
        userData.first_name === firstNameInput &&
        userData.last_name === lastNameInput &&
        userData.valid_thru.month === validThru.month &&
        userData.valid_thru.year === validThru.year &&
        userData.cvv === cvv
      ) {
        return {
          ...state,
          currentUser: cardNumberInput,
          senderExists: true,
        };
      } else {
        return {
          ...state,
          senderExists: false,
        };
      }
    } else {
      return {
        ...state,
        senderExists: false,
      };
    }
  } else if (action.type === "send_money") {
    const { balance, sender, reciever } = action.payload;

    return {
      ...state,
      usersData: state.usersData.map((user) => {
        if (user.card_number === sender) {
          return {
            ...user,
            balance: +user.balance - balance,
          };
        } else if (user.card_number === reciever) {
          return {
            ...user,
            balance: +user.balance + balance,
          };
        } else {
          return { ...user };
        }
      }),
    };
  }
  return state;
}

const store = createStore(reducer, {
  usersData: [],
  currentUser: null,
  senderExists: false,
});

export default store;
