import * as Yup from "yup";

export const initialValues = {
  reciever_card_number: "",
  balance_to_send: "",
};

export const validationSchema = Yup.object({
  balance_to_send: Yup.string().required("Required"),
  reciever_card_number: Yup.string()
    .max(16, "Must be 16 characters")
    .min(16, "Must be 16 characters")
    .required("Required"),
});
