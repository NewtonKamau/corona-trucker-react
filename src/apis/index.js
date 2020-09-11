import axios from "axios";

//api url
const url = process.env.REACT_APP_CORONA_API;
//get global data 
export const fetchData = async (country) => {
  //make url fetched data dynamic by passing country at the as a parameter
  let changeableUrl = url;
  //if the user sets a country, we get data of that country from our api
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
    try {
        //get all the data from the api and destructure the object 
        const {data : {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl);
        //get specific data from the api and store in a variable 
        return { confirmed,recovered, deaths,lastUpdate }
    } catch (error) {
        console.log(error);
    }
}
//fetch daily data 
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};

//fetch single country data
export const countryData = async () => {
  try {
    const {data:{countries}}= await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
    
  } catch (error) {
    console.log(error);
  }
}

