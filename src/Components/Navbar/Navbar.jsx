import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#e1d4c7", textDecoration: "none" }}>
          <h2>TIME IS GOLD </h2>
        </Link>

        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            TODOS
          </Link>
          <Link to="/category/Analogicos" className={styles.navbarItem}>
            Analogicos
          </Link>
          <Link to="/category/Digitales" className={styles.navbarItem}>
            Digitales
          </Link>
          <Link to="/category/SmartWatchs" className={styles.navbarItem}>
            SmartWatch
          </Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
