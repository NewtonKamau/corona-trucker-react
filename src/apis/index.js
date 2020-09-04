import axios from "axios";

//api url
const url = process.env.REACT_APP_CORONA_API;

export const fetchData = async () => {
    try {
        const response = await axios.get(url);
        return response;
       // console.log(response);
    } catch (error) {
        console.log(error);
    }
}

