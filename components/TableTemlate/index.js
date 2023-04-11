import React from "react";
import Source1 from "../Source1";
import Source2 from "../Source2";
import Source3 from "../Source3";


import styles from "./styles.module.scss";

const TableTeaamlate = () => {
  return (
    <>
      <div className={styles.table}>
        <div className={styles.table__column_shadow}>
          <div className={styles.table__currencyPairs}>
            <div className={styles.table__currencyPairs__title}>
              <p>Currency Pairs</p>
            </div>
            <div className={styles.table__currencyPairs__item}>
              <p>USD/Cupcakes</p>
            </div>
            <div className={styles.table__currencyPairs__item}>
              <p>EUR/Cupcakes</p>
            </div>
            <div className={styles.table__currencyPairs__item}>
              <p>RUB/Cupcakes</p>
            </div>
            <div className={styles.table__currencyPairs__item}>
              <p>USD/EUR</p>
            </div>
            <div className={styles.table__currencyPairs__item}>
              <p>USD/RUB</p>
            </div>
            <div className={styles.table__currencyPairs__item}>
              <p>EUR/RUB</p>
            </div>
          </div>
        </div>
        <div className={styles.table__column}>
            <Source1 />
        </div>
        <div className={styles.table__column}>
            <Source2 />
        </div>
        <div className={styles.table__column}>
            <Source3 />
        </div>
      </div>
    </>
  );
};
TableTeaamlate.defaultProps = {};

export default TableTeaamlate;
