import React, { useEffect, useState } from "react";
import { NativeSelect,FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { countryData }  from "../../apis";
const CountryPicker = () => {
  const [fetchedCountry, setFetchedCountry] = useState([]);
  useEffect(() => {
   const fetchCountry = async () => {
     setFetchedCountry(await countryData());
   };
   //call fetch method
   fetchCountry();
  }, [setFetchedCountry]);
 
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">GLobal</option>
        {fetchedCountry.map((country,i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
