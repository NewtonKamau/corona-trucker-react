import React, {  useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components/";
import styles from "./App.module.css";
import { fetchData } from "./apis";
function App() {
   const [data, setData] = useState({  });
  
   useEffect(() => {
     const fetchedData = async () => {
       const fetchedData = await fetchData()
       setData(fetchedData);
       
     };
      
     fetchedData();
   }, []);
  function handleCountryChange(country)  {
    //fetch data
    console.log(country);
    //set state
  }
  return (
    <div className={styles.container}>
      <Cards 
      data = {data}
       
      />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart />
    </div>
  );
}

export default App; 
