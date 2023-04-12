import React from "react";
import RowUsdCupcake from "../RowUsdCupcake";
import RowEurCupcake from "../RowEurCupcake";
import RowRubCupcake from "../RowRubCupcake";
import RowRubUsd from "../RowRubUsd";
import RowRubEur from "../RowRubEur";
import RowEurRub from "../RowEurRub";
import styles from "./styles.module.scss";

const TableTemplate = ({ data1, data2, data3 }) => {
  
  return (
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
        <RowRubCupcake data1={data1.RUB} data2={data2.RUB} data3={data3.RUB} />
        <RowUsdCupcake data1={data1.USD} data2={data2.USD} data3={data3.USD} />
        <RowEurCupcake data1={data1.EUR} data2={data2.EUR} data3={data3.EUR} />
        <RowRubUsd data1={data1.RUB / data1.USD} data2={data2.RUB / data2.USD} data3={data3.RUB / data3.USD} />
        <RowRubEur data1={data1.RUB / data1.EUR} data2={data2.RUB / data2.EUR} data3={data3.RUB / data3.EUR} />
        <RowEurRub data1={data1.EUR / data1.RUB} data2={data2.EUR / data2.RUB} data3={data3.EUR / data3.RUB} />
      </div>
  );


};

TableTemplate.defaultProps = {};

export default TableTemplate;
