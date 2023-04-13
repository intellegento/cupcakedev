import React from "react";
import Cell from "../Cell";
import styles from "./styles.module.scss";

const Row = ({ data, currency, sources, currencies }) => {
    const rate = {};
    
    sources.forEach((source) => {
      const rates = data[source];
    //   console.log(rates)
      currencies.forEach((curr) => {
        const rateKey = `${curr}/${source}`;
        // console.log(curr)
        rate[rateKey] = rates[curr];
        
      });
    });
  
  return (
    <div className={styles.row}>
      <div className={styles.row__title}>
        <p>{currency}</p>
      </div>
      {sources?.map((source, index) => (
        console.log(source),
        <Cell key={index} rate={rate} currency={`${currency}/${source}`} />
      ))}
    </div>
  );
};

export default Row;
