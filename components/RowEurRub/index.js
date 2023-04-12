import React from "react";
import styles from "./styles.module.scss";

const RowEurRub = ({ data1, data2, data3 }) => {
  const rates1 = data1;
  const rates2 = data2;
  const rates3 = data3;

  const allRates = [
    parseFloat(rates1.toFixed(2)),
    parseFloat(rates2.toFixed(2)),
    parseFloat(rates3.toFixed(2)),
  ];
  const minVal = Math.min(...allRates);
  const minValIndex = allRates.indexOf(minVal);
  return (
    <>
      <div className={styles.row}>
        <div className={styles.row__title}>
          <p>EUR/RUB</p>
        </div>
        {allRates.map((rate, index) => (
          <div key={index}
            className={`${styles.row__item} ${
              index === minValIndex ? styles.min : ""
            }`}
          >
            <p>{rate}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RowEurRub;
