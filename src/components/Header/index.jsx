import React from "react";
import styles from "./Header.module.css";
import { getImageURL } from "../../utils/functions";

const Header = ({ img }) => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.headerImg} src={getImageURL(img)} alt={img} />
      </div>
      <div className={styles.mainHeader}>
        <h1> Paradise Zoo</h1>
      </div>
    </header>
  );
};

export default Header;