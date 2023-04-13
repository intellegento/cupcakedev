import React from "react";
import styles from "./styles.module.scss";

const Cell = ({ rate, currency, className }) => {
  return (
    <div className={`${styles.cell} ${className}`}>
      <p>{rate[currency].toFixed(2)}</p>
    </div>
  );
};

export default Cell;