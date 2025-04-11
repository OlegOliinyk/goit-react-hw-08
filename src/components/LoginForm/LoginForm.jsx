import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const validationSchema = Yup.object({
    userEmail: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    userPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(128, 'Password cannot exceed 128 characters')
      .required('Password is required'),
  });

  const dispatch = useDispatch();
  const onSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.userEmail,
        password: values.userPassword,
      })
    );
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        userEmail: '',
        userPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, resetForm) => onSubmit(values, resetForm)}
    >
      <Form className={styles.form}>
        <label className={styles.labelForm} htmlFor="userEmail">
          Email
        </label>
        <Field
          className={styles.fieldForm}
          type="email"
          id="userEmail"
          name="userEmail"
        />
        <ErrorMessage
          className={styles.errorMessage}
          name="userEmail"
          component="div"
        />
        <label className={styles.labelForm} htmlFor="userPassword">
          Password
        </label>
        <Field
          className={styles.fieldForm}
          type="password"
          id="userPassword"
          name="userPassword"
        />
        <ErrorMessage
          className={styles.errorMessage}
          name="userPassword"
          component="div"
        />
        <button className={styles.buttonForm} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
