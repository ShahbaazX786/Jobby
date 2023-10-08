import { useEffect, useState } from "react";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const axios = require('axios');

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '2380a6b96bmshe73b6501b57c207p15d141jsnd3edf7c68147',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.error(error);
        } finally {
            isLoading(false);
        }
    }

    const refetchData = () => {
        setIsLoading(true);
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, []);


    return {data, isLoading, error, refetchData};

}

export default useFetch;