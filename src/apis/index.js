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
        const { data } = axios.get(`${url}/daily`);
        //instant return of an object
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

