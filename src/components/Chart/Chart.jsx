import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../apis";
import { Line, Bar } from "react-chartjs-2";
import { styles } from "./Chart.module.css";

const Chart = () => {
  //use state to read current data and update the data 
  const [dailyData, setDailyData] = useState([]);
  //useEffect to read data from the response of our api and set the state with the current data 
  useEffect(() => {
     const fetchedData = async () => {
       setDailyData(await fetchDailyData());
     };
    //call fetch method
     fetchedData();
   }, []);
//show our data in a line chart from chartjs passing the data from our setDailyData
  const lineChart = (
    dailyData.length ? (
    <Line
        data={{
        //map data to the array
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#333fff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor:'rgba(255,0,0,0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null);
  return (
    <div>
      {lineChart}
    </div>
  );
  
};

export default Chart;