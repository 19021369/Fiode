import axios from 'axios';
import { useState,useEffect } from 'react';

function useDataFetcher() {
    const API_URL = 'http://localhost:8080/api/destinations'
    const [loading, setLoading] = useState(true)
    const [pages, setPages] = useState([])
    useEffect(() => {
        const fetchData = async() => {

            var config = {
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    'Content-Type': 'application/json',
                }
            };
    
            await axios(config)
                .then(function (response) {
                    setPages(response.data)
                    setLoading(false)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        fetchData()
    },[])
    return {
        loading, pages
    }
}

export default useDataFetcher;
