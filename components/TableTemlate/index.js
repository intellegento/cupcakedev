import React from "react";
import Currency from "../Currency";

import styles from "./styles.module.scss";

const TableTeaamlate = () => {
  return (
    <>
    <section className={styles.table}>
        <div className={styles.wrapper}>
            <div className={styles.table__row}>
                <div className={styles.table__currencyPairs}>
                    <div className={styles.table__currencyPairs__item}>
                        <p>Currency Pairs</p>
                    </div>
                </div>

                <div className={styles.table__source}>
                    <div className={styles.table__source__item}>
                        <p>Source 1</p>
                    </div>
                </div>

                <div className={styles.table__source}>
                    <div className={styles.table__source__item}>
                        <p>Source 2</p>
                    </div>
                </div>

                <div className={styles.table__source}>
                    <div className={styles.table__source__item}>
                        <p>Sourse 3</p>
                    </div>
                </div>
            </div>
            <Currency />
        </div>
    </section>
    </>
  );
};
TableTeaamlate.defaultProps = {};

export default TableTeaamlate;