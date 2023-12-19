import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notifyError } from "../../utiles/toast";
import { success } from "../../utiles/success";
import {
  checkBalance,
  checkValid,
  removeSpaces,
  senderIsReciever,
} from "../../helpers/helpers";
import "./SecondForm.scss";

const SecondForm = () => {
  const [recieverCardNumber, setRecieverCardNumber] = useState("");
  const [balance, setBalance] = useState("");
  const dispatch = useDispatch();

  const changeRecieverCardNumber = (value) => {
    let input = removeSpaces(value);

    // adding spaces
    input = input.replace(/(\d{4})/g, "$1 ").trim();
    setRecieverCardNumber(input);
  };

  const changeBalance = (value) => {
    setBalance(value);
  };

  function changeData(data) {
    localStorage.setItem("usersData", JSON.stringify(data));
  }

  const usersData = useSelector((state) => state.usersData);

  useEffect(() => {
    changeData(usersData);
  }, [usersData]);

  const handleClick = () => {
    if (Array.from(removeSpaces(recieverCardNumber)).length < 16) {
      notifyError("Something Went Wrong");
    } else if (
      senderIsReciever(sender.card_number, removeSpaces(recieverCardNumber))
    ) {
      notifyError("Can Not Send Money To Yourself");
    } else if (checkBalance(+sender.balance, +balance)) {
      dispatch({
        type: "send_money",
        payload: {
          balance: +balance,
          sender: sender.card_number,
          reciever: removeSpaces(recieverCardNumber),
        },
      });
      success("Transfer Confirmed");
    } else {
      notifyError("Not Enogh Money");
    }
  };

  const sender = useSelector((state) => {
    return state.usersData.find(
      (user) => user.card_number === state.currentUser
    );
  });

  return (
    <div className="second-form">
      <p>Insert Amount of Money</p>
      <input
        type="number"
        placeholder="15000"
        value={balance}
        onChange={(e) => {
          changeBalance(e.target.value);
        }}
      />
      <p>Insert Reciever Card Number</p>
      <input
        type="text"
        placeholder="XXXX XXXX XXXX XXXX"
        maxLength={19}
        value={recieverCardNumber}
        onChange={(e) => {
          if (checkValid(e.target.value, "card_number"))
            changeRecieverCardNumber(e.target.value);
        }}
      />
      <button onClick={handleClick}>Send Money</button>
    </div>
  );
};

export default SecondForm;
