// 

import axios from "axios";

export const openWeatherMeteo = async (info) => {
    const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=fr&exclude=hourly&lat="+info.lat+"&lon="+info.lon+"&appid=" +process.env.WEATHER_API_KEY,
        {
            method: "get",
        }
    );
    return data;
};
