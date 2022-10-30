import axios from "axios";

// q=meaux&

export const NewsDataInfo = async (info) => {

    const { data } = await axios.get(
        "https://newsdata.io/api/1/news?q="+info+"&apikey="+process.env.NEWSDATAIO_API_KEY,
        {
            method: "get",
        }
    );
    return data;
};
