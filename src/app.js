import React, {  useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components/";
import styles from "./App.module.css";
import { fetchData } from "./apis";
function App() {
   const [data, setData] = useState({ hits: [] });

   useEffect(() => {
     const fetchedData = async () => {
       const fetchedData = await fetchData()
       setData(fetchedData);
       
     };
      
     fetchedData();
   }, []);
  return (
    <div className={styles.container}>
      <Cards 
      data = {data}
       
      />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App; 
