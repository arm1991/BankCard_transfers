import * as Yup from "yup";

export const initialValues = {
  name: "",
  surname: "",
  card_number: "",
  valid_thru_month: "",
  valid_thru_year: "",
  cvv: "",
};

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too Short")
    .max(15, "Too Long")
    .required("Required"),
  surname: Yup.string()
    .min(3, "Too Short")
    .max(20, "Too Long")
    .required("Required"),
  card_number: Yup.string()
    .max(16, "Must be 16 characters")
    .min(16, "Must be 16 characters")
    .matches(/^\d{16}$/, "Invalid card number")
    .required("Required"),
  valid_thru_month: Yup.string()
    .max(2, "Must be 2 characters")
    .min(2, "Must be 2 characters")
    .matches(/^(0[1-9]|1[0-2])$/, "Invalid month")
    .required("Required"),
  valid_thru_year: Yup.string()
    .max(2, "Must be 2 characters")
    .min(2, "Must be 2 characters")
    .matches(/^(2[4-9]|3[0-5])$/, "Invalid year")
    .required("Required"),
  cvv: Yup.string()
    .max(3, "Must be 3 characters")
    .min(3, "Must be 3 characters")
    .matches(/^\d{3}$/, "Invalid card number")
    .required("Required"),
});
