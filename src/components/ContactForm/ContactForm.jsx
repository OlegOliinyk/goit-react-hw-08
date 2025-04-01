import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./ContactForm.module.css";

const ContactForm = () => {
  const validationSchema = Yup.object({
    contactName: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Required field"),
    contactNumber: Yup.string()
      .max(50, "Maximum 50 characters")
      .matches(/^\+?\d{10,15}$/, "The phone number is incorrect")
      .required("Required field"),
  });
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.contactName,
        number: values.contactNumber,
      })
    );
  };
  return (
    <Formik
      initialValues={{
        contactName: "",
        contactNumber: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}>
      <Form className={style.contactForm}>
        <label htmlFor="contactName">Name</label>
        <Field
          className={style.input}
          type="text"
          id="contactName"
          name="contactName"
        />
        <ErrorMessage
          className={style.errorMessage}
          name="contactName"
          component="div"
        />
        <label className={style.contactNumber} htmlFor="contactNumber">
          Number
        </label>
        <Field
          className={style.input}
          type="tel"
          id="contactNumber"
          name="contactNumber"
        />
        <ErrorMessage
          className={style.errorMessage}
          name="contactNumber"
          component="div"
        />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
