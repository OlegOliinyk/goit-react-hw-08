import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.LoginPage}>
      <h1>Please log in</h1>
      <LoginForm />
      <Link to="/register">Registration</Link>
    </div>
  );
};

export default LoginPage;
