import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isActive = ({ isActive }) => {
    return clsx(isActive && styles.active);
  };

  return (
    <nav className={styles.nav}>
      <NavLink className={isActive} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={isActive} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
