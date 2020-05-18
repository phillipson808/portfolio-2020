import React, { Link } from "react";
import styles from "../styles/nav.module.scss";

const Nav = (props) => {
  console.log(props.isOpen);
  return (
    <div>
      <div className={styles.container}>
        {/*Desktop Nav */}
        <div className={styles.linkContainer}>
          <div className={styles.branding}>Logo</div>
          <ul className={styles.navLinks}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Mobile Nav */}
      <div className={styles.mobileContainer}>
        <div className={styles.mobileLinkContainer}>
          <div className={styles.mobileBranding}>Logo</div>
          <div className={props.isOpen ? styles.mobile : styles.mobileNavLinksContainer}>
          <div className={styles.close} onClick={props.toggleNav}>
            <p>X</p>
          </div>
            <ul className={styles.mobileNavLinks}>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
