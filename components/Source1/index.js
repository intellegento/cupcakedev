import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.scss";


const Source1 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/first`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    fetchData(); // fetch data initially

    return () => {
      clearInterval(intervalId); // cleanup interval on unmount
    };
  }, []);

  return (
    <div>
      <div className={styles.source}>
        {data ? (
          <>
            <div className={styles.source__title}>
              <p>Source 1</p>
            </div>
            <div className={styles.source__item}>
              <p>{Number((data.rates.USD)).toFixed(2)}</p>
            </div>
            <div className={styles.source__item}>
              <p>{Number((data.rates.EUR)).toFixed(2)}</p>
            </div>
            <div className={styles.source__item}>
              <p>{Number((data.rates.RUB)).toFixed(2)}</p>
            </div>
            <div className={styles.source__item}>
              <p>{Number((data.rates.USD) / (data.rates.EUR)).toFixed(2)}</p>
            </div>
            <div className={styles.source__item}>
              <p>{Number((data.rates.USD) / (data.rates.RUB)).toFixed(2)}</p>
            </div>
            <div className={styles.source__item}>
              <p>{Number((data.rates.EUR) / (data.rates.RUB)).toFixed(2)}</p>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Source1;