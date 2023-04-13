import React, { useState, useEffect } from "react";
import axios from "axios";
import TableTemplate from '../components/TableTemplate';

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2, response3] = await Promise.all([
          axios.get(`http://localhost:3000/api/v1/first/poll`),
          axios.get(`http://localhost:3000/api/v1/second/poll`),
          axios.get(`http://localhost:3000/api/v1/third/poll`),
        ]);

        const source1 = {
          "RUB/Cupcakes": response1.data.rates.RUB,
          "USD/Cupcakes": response1.data.rates.USD,
          "EUR/Cupcakes": response1.data.rates.EUR,
          "RUB/USD": response1.data.rates.RUB / response1.data.rates.USD,
          "RUB/EUR": response1.data.rates.RUB / response1.data.rates.EUR,
          "EUR/RUB": response1.data.rates.EUR / response1.data.rates.RUB,
        };

        const source2 = {
          "RUB/Cupcakes": response2.data.rates.RUB,
          "USD/Cupcakes": response2.data.rates.USD,
          "EUR/Cupcakes": response2.data.rates.EUR,
          "RUB/USD": response2.data.rates.RUB / response2.data.rates.USD,
          "RUB/EUR": response2.data.rates.RUB / response2.data.rates.EUR,
          "EUR/RUB": response2.data.rates.EUR / response2.data.rates.RUB,
        };

        const source3 = {
          "RUB/Cupcakes": response3.data.rates.RUB,
          "USD/Cupcakes": response3.data.rates.USD,
          "EUR/Cupcakes": response3.data.rates.EUR,
          "RUB/USD": response3.data.rates.RUB / response3.data.rates.USD,
          "RUB/EUR": response3.data.rates.RUB / response3.data.rates.EUR,
          "EUR/RUB": response3.data.rates.EUR / response3.data.rates.RUB,
        };

        setData({ source1, source2, source3 });
      } catch (error) {
        console.error(error);
      }
    };

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    fetchData();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {data && <TableTemplate data={data} />}
    </div>
  );
};


export default App;
