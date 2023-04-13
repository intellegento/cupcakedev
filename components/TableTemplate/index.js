import React from "react";
import Row from "../Row";
import styles from "./styles.module.scss";

const TableTemplate = ({ data }) => {
  const sources = data && Object.keys(data).filter((key) => data[key]);
  const currencies = [
    "RUB/Cupcakes",
    "USD/Cupcakes",
    "EUR/Cupcakes",
    "RUB/USD",
    "RUB/EUR",
    "EUR/RUB",
  ];
  return (
    <div className={styles.table}>
      <div className={styles.table__titleRow}>
        <div className={styles.table__title}>
          <p>Currency Pair</p>
        </div>
        {sources &&
          sources.map((source) => (
            <div key={source} className={styles.table__item}>
              <p>{source}</p>
            </div>
          ))}
      </div>
      {currencies.map((currency) => (
        <Row
          key={currency}
          currency={currency}
          currencies={currencies}
          sources={sources}
          data={data}
        />
      ))}
    </div>
  );
};

export default TableTemplate;
