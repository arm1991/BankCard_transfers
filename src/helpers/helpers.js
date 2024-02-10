export const checkBalance = (userBalance, balance) => {
  return userBalance - balance >= 0 && userBalance >= 0 && balance > 0;
};

export const removeSpaces = (value) => {
  return value.replace(/\s/g, "");
};

export const checkLocalData = (dataFromLocal) => {
  return !dataFromLocal || Object.keys(dataFromLocal).length === 0;
};

export const senderIsReciever = (sender, reciever) => {
  return sender === reciever;
};

export const findUser = (currentUser, usersData) => {
  return usersData.find((user) => {
    if (
      user.name === currentUser.name &&
      user.surname === currentUser.surname &&
      user.card_number === currentUser.card_number &&
      user.valid_thru_month === currentUser.valid_thru_month &&
      user.valid_thru_year === currentUser.valid_thru_year &&
      user.cvv === +currentUser.cvv
    ) {
      return user;
    }
  });
};
