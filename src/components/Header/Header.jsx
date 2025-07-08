import React from "react";
import styles from "./Header.module.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <NavLink to={"/"}>
      <div className={styles.headerContainer}>
        <h1>Fluenzi</h1>
      </div>
    </NavLink>
  );
};

export default Header;
