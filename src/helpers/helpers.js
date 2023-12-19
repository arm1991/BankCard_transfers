export const checkValid = (val, type) => {
  if (type === "month") {
    return (Number(val) || val === "") && Number(val) < 13;
  } else if (type === "card_number") {
    return Number(removeSpaces(val)) || removeSpaces(val) === "";
  }
  return Number(val) || val === "";
};

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
