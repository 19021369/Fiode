import axios from 'axios';
import { useState,useEffect } from 'react';

function useDataFetcher() {
    const API_URL = 'http://localhost:8080/api/destinations'
    const totalPages = 300
    const [loading, setLoading] = useState(true)
    const [pages, setPages] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    useEffect(() => {
        const fetchData = async() => {
            const page = Math.min(currentPage+1, totalPages)

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
                });
        };
        fetchData()
    },[currentPage])
    return {
        loading,
        pages,
        totalPages,
        currentPage,
        setCurrentPage,
    }
}

export default useDataFetcher;
