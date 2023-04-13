import React from "react";
import Cell from "../Cell";
import styles from "./styles.module.scss";

const Row = ({ data, currency, sources, currencies }) => {
  // Создаем объект, чтобы хранить значения ключей currency/source
  const rate = {};

  sources.forEach((source) => {
    const rates = data[source];
    currencies.forEach((curr) => {
      const rateKey = `${curr}/${source}`;
      rate[rateKey] = rates[curr];
    });
  });

  // Создаем объект, чтобы хранить наименьшее значение ключа для каждой пары currency/source
  const minRate = {};
  currencies.forEach((curr) => {
    const rateKeys = sources.map((source) => `${curr}/${source}`);
    const values = rateKeys.map((rateKey) => rate[rateKey]);
    const minIndex = values.indexOf(Math.min(...values));
    minRate[curr] = rateKeys[minIndex];
  });

  return (
    <div className={styles.row}>
      <div className={styles.row__title}>
        <p>{currency}</p>
      </div>
      {sources?.map((source, index) => (
        <Cell
          key={index}
          rate={rate}
          currency={`${currency}/${source}`}
          isMin={minRate[currency] === `${currency}/${source}`}
        />
      ))}
    </div>
  );
};

export default Row;
