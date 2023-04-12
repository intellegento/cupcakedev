import React from "react";
import Source2 from "../Source2";
import Source3 from "../Source3";
import Row1 from "../Row1";
import styles from "./styles.module.scss";

const TableTemplate = ({ data1, data2, data3 }) => {
  const rates1 = data1.USD;
  const rates2 = data2.USD;
  const rates3 = data3.USD;

  const allRates = [parseFloat(rates1.toFixed(2)), parseFloat(rates2.toFixed(2)), parseFloat(rates3.toFixed(2))];
  const minVal = Math.min(...allRates);
  const minValIndex = allRates.indexOf(minVal);
  


  return (
    <>
      <div className={styles.table}>
        <div className={styles.table__titleRow}>
          <div className={styles.table__titleRow__title}>
              <p>Currency Pairs</p>
            </div>
            <div className={styles.table__titleRow__item}>
              <p>Source1</p>
            </div>
            <div className={styles.table__titleRow__item}>
              <p>Source2</p>
            </div>
            <div className={styles.table__titleRow__item}>
              <p>Source3</p>
            </div>
        </div>
        <div className={styles.table__row}>
          <div className={styles.table__row__title}>
            <p>USD/Cupcakes</p>
          </div>
          {allRates.map((rate, index) => (
            <div className={`${styles.table__row__item} ${
              index === minValIndex ? styles.min : ""
            }`}>
            <p>{rate}</p>
          </div>
          ))}
        </div>
      </div>
    </>
  );


};

TableTemplate.defaultProps = {};

export default TableTemplate;
