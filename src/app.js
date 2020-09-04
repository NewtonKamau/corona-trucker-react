import React, {  useEffect } from "react";
import { Cards, Chart, CountryPicker } from "./components/";
import styles from "./App.module.css";
import { fetchData } from "./apis";
function App() {
    useEffect(() => {
       async function getData ()  {
        const data = fetchData()
        console.log(data);
      };
   getData()
    }, []);
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App; 
