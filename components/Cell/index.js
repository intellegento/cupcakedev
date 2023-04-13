import React from "react";
import styles from "./styles.module.scss";

const Cell = ({ rate, currency, isMin }) => {
  const value = rate[currency];

  return (
    <div className={`${styles.cell} ${isMin ? styles.min : ""}`}>
      <p>{value.toFixed(2)}</p>
    </div>
  );
};

export default Cell;
