import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const validationSchema = Yup.object({
    contactName: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required field'),
    contactNumber: Yup.string()
      .max(50, 'Maximum 50 characters')
      .matches(/^\+?\d{10,15}$/, 'The phone number is incorrect')
      .required('Required field'),
  });
  const dispatch = useDispatch();
  const onSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        name: values.contactName,
        number: values.contactNumber,
      })
    );
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        contactName: '',
        contactNumber: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, resetForm) => onSubmit(values, resetForm)}
    >
      <Form className={styles.form}>
        <label className={styles.labelForm} htmlFor="contactName">
          Name
        </label>
        <Field
          className={styles.fieldForm}
          type="text"
          id="contactName"
          name="contactName"
        />
        <ErrorMessage
          className={styles.errorMessage}
          name="contactName"
          component="div"
        />
        <label
          className={styles.labelForm}
          id="labelNumber"
          htmlFor="contactNumber"
        >
          Number
        </label>
        <Field
          className={styles.fieldFormNumber}
          type="tel"
          id="contactNumber"
          name="contactNumber"
        />
        <ErrorMessage
          className={styles.errorMessage}
          name="contactNumber"
          component="div"
        />
        <button className={styles.buttonForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
