import React, { useState, useEffect } from "react";
import axios from "axios";
import TableTemplate from '../components/TableTemplate';

const App = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          `http://localhost:3000/api/v1/first/poll`
        );
        setData1(response1.data);
      } catch (error) {
        console.error(error);
      }
      try {
        const response2 = await axios.get(
          `http://localhost:3000/api/v1/second/poll`
        );
        setData2(response2.data);
      } catch (error) {
        console.error(error);
      }
      try {
        const response3 = await axios.get(
          `http://localhost:3000/api/v1/third/poll`
        );
        setData3(response3.data);
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
      {data1 && data2 && data3 && (
      <TableTemplate data1={data1?.rates} data2={data2?.rates} data3={data3?.rates} />
    )}
    </div>
  );
};

export default App;
