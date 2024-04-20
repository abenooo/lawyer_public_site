import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Only alphabetic characters are allowed")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Only numeric characters are allowed")
    .required("Phone number is required"),
  subject: Yup.string()
    .required("Subject is required"),
  typeofenquires: Yup.string()
    .required("Type of enquiries is required"),
  address: Yup.string()
    .required("Address is required"),
  message: Yup.string()
    .required("Message is required")
});
