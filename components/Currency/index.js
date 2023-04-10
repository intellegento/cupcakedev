import React from "react";
import styles from "./styles.module.scss";

const Currency = () => {
  return (
    <div className={styles.row}>
      <div className={styles.row__currencyPairs}>
        <div className={styles.row__currencyPairs__item}>
          <p>Currency Pairs</p>
        </div>
      </div>

      <div className={styles.row__source}>
        <div className={styles.row__source__item}>
          <p>Source 1</p>
        </div>
      </div>

      <div className={styles.row__source}>
        <div className={styles.row__source__item}>
          <p>Source 2</p>
        </div>
      </div>

      <div className={styles.row__source}>
        <div className={styles.row__source__item}>
          <p>Sourse 3</p>
        </div>
      </div>
    </div>
  );
};
Currency.defaultProps = {};

export default Currency;


