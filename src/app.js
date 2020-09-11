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
 async  function  handleCountryChange(country)  {
    //fetch data
   const fetchedData = await fetchData(country);
    console.log(fetchedData);
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
