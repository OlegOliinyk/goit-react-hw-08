import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  const isActive = ({ isActive }) => {
    return clsx(isActive && styles.active);
  };

  return (
    <div className={styles.div}>
      <NavLink to="/register" className={isActive}>
        Register
      </NavLink>
      <NavLink to="/login" className={isActive}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
