import axios from "axios";

//api url
const url = process.env.REACT_APP_CORONA_API;

export const fetchData = async () => {
    try {
        //get all the data from the api and destructure the object 
        const {data : {confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
        //get specific data from the api and store in a variable 
        return { confirmed,recovered, deaths,lastUpdate }
    } catch (error) {
        console.log(error);
    }
}
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
export const countryData = async () => {
  try {
    const {data:{countries}}= await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
    
  } catch (error) {
    console.log(error);
  }
}

