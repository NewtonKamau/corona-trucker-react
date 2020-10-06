import React, {  useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components/";
import styles from "./App.module.css";
import { fetchData } from "./apis";
function App() {
   const [data, setData] = useState({  });
    const [country,setCountry] = useState({})
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
   console.log(fetchedData,country);
    //set state
   setCountry({country:country})
 
  }
  return (
    <div className={styles.container}>
      <Cards 
      data = {data  }
      country = {country}
      />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App; 
