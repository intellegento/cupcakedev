import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const Row1 = () => {
  return (
    <div className={styles.row}>
      <div className={styles.row__title}>
        <p>USD/Cupcakes</p>
      </div>
      <div className={styles.row__item}>
        <p>Source1</p>
      </div>
      <div className={styles.row__item}>
        <p>Source2</p>
      </div>
      <div className={styles.row__item}>
        <p>Source3</p>
      </div>
    </div>
  );
};

export default Row1;
