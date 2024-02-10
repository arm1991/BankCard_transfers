import { useContext } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "./values";
import { useDispatch, useSelector } from "react-redux";
import { Context } from "../context/Context";
import { setUser } from "../../../redux/slices/currentUser.slice";
import { findUser, removeSpaces } from "../../../helpers/helpers";
import logo from "../../../assets/logo.png";
import style from "./FormContainer.module.css";

const FormContainer = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.usersData.usersData);
  const { changeFormValues, toggle, toggleCard } = useContext(Context);

  const handleSubmit = (values) => {
    const user = findUser(values, usersData);
    dispatch(setUser(user));
  };

  const handleChange = (e, formik) => {
    const { name, value } = e.target;

    if (!(name === "name" || name === "surname")) {
      if (!/^\d*$/.test(value)) {
        return;
      }
    }

    const updatedValues = {
      ...formik.values,
      [name]: removeSpaces(value),
    };

    if (name === "cvv" && toggle) {
      toggleCard();
    } else if (!toggle && name !== "cvv") {
      toggleCard();
    }

    formik.setValues(updatedValues);
    changeFormValues(updatedValues);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(formik) => (
          <Form className={style.form} id="form">
            <div className={style.formImg}>
              <img className={style.logo} src={logo} alt="logo" />
            </div>
            <div className={style.formContainer}>
              <label htmlFor="name" className={style.label}>
                Name
              </label>
              <span className={style.error}>
                <ErrorMessage name="name" />
              </span>
              <Field
                className={style.formInput}
                id="name"
                type="text"
                name="name"
                placeholder="Joe"
                onChange={(e) => handleChange(e, formik)}
              />
            </div>
            <div className={style.formContainer}>
              <label htmlFor="surname" className={style.label}>
                Surname
              </label>
              <span className={style.error}>
                <ErrorMessage name="surname" />
              </span>
              <Field
                className={style.formInput}
                id="surname"
                type="text"
                name="surname"
                placeholder="Jackson"
                onChange={(e) => handleChange(e, formik)}
              />
            </div>
            <div className={style.formContainer}>
              <label htmlFor="card_number" className={style.label}>
                Card Number
              </label>
              <span className={style.error}>
                <ErrorMessage name="card_number" />
              </span>
              <Field
                className={style.formInput}
                id="card_number"
                type="text"
                name="card_number"
                placeholder="XXXX XXXX XXXX XXXX"
                onChange={(e) => handleChange(e, formik)}
              />
            </div>
            <div className={style.formValid}>
              <div className={style.formContainer}>
                <label htmlFor="valid_thru_month" className={style.label}>
                  Exp Date
                </label>
                <span className={style.error}>
                  <ErrorMessage name="valid_thru_month" />
                </span>
                <Field
                  className={style.formSmallInput}
                  id="valid_thru_month"
                  type="text"
                  name="valid_thru_month"
                  placeholder="MM"
                  onChange={(e) => handleChange(e, formik)}
                />
              </div>
              <div className={style.formContainer}>
                <label
                  htmlFor="valid_thru_year"
                  className={style.label}
                ></label>
                <span className={style.error}>
                  <ErrorMessage name="valid_thru_year" />
                </span>
                <Field
                  className={style.formSmallInput}
                  id="valid_thru_year"
                  type="text"
                  name="valid_thru_year"
                  placeholder="YY"
                  onChange={(e) => handleChange(e, formik)}
                />
              </div>
            </div>
            <div className={style.formContainer}>
              <label htmlFor="cvv" className={style.label}>
                CVV
              </label>
              <span className={style.error}>
                <ErrorMessage name="cvv" />
              </span>
              <Field
                className={style.formInput}
                id="cvv"
                type="text"
                name="cvv"
                placeholder="***"
                onChange={(e) => handleChange(e, formik)}
              />
            </div>

            <button className={style.formButton} type="submit">
              Confirm
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormContainer;
