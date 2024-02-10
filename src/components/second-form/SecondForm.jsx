import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { notifyError } from "../../utiles/toast";
import { success } from "../../utiles/success";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { initialValues, validationSchema } from "./values";
import { sendMoney } from "../../redux/slices/usersData.slice";
import { checkBalance, senderIsReciever } from "../../helpers/helpers";
import style from "./SecondForm.module.css";
import "react-toastify/dist/ReactToastify.css";

const SecondForm = ({ sender }) => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.usersData.usersData);

  function changeData(data) {
    localStorage.setItem("usersData", JSON.stringify(data));
  }

  useEffect(() => {
    changeData(usersData);
  }, [usersData]);

  const handleSubmit = ({ balance_to_send, reciever_card_number }) => {
    reciever_card_number = reciever_card_number.toString();
    const { balance, card_number } = sender;
    if (!checkBalance(balance, balance_to_send)) {
      notifyError("Not Enogh Money");
    } else if (senderIsReciever(card_number, reciever_card_number)) {
      notifyError("Can Not Send Money To Yourself");
    } else {
      dispatch(
        sendMoney({ balance_to_send, card_number, reciever_card_number })
      );
      success("Succes");
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className={style.form} id="second-form">
          <div className={style.formContainer}>
            <label htmlFor="balance_to_send" className="label">
              Insert Amount of Money
            </label>
            <span className={style.error}>
              <ErrorMessage name="balance_to_send" />
            </span>
            <Field
              className={style.formInput}
              id="balance_to_send"
              type="number"
              name="balance_to_send"
              placeholder="15000"
            />
          </div>
          <div className={style.formContainer}>
            <label htmlFor="reciever_card_number" className="label">
              Reciever Card Number
            </label>
            <span className={style.error}>
              <ErrorMessage name="reciever_card_number" />
            </span>
            <Field
              className={style.formInput}
              id="reciever_card_number"
              type="number"
              name="reciever_card_number"
              placeholder="XXXX XXXX XXXX XXXX"
            />
          </div>
          <button type="submit" className={style.formButton}>
            Send Money
          </button>
        </Form>
      </Formik>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default SecondForm;
