import React from "react";
import styles from "./Box.module.css";

const Box = ({ title, subtitle }) => {
  return (
    <div className="animeLeft">
      <h2 className={styles.title}>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Box;
