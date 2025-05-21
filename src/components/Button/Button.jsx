import React from "react";
import styles from "./Button.module.css";

const Button = ({ text }) => {
  return <button className={styles.buttonGeral}>{text}</button>;
};

export default Button;
