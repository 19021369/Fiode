import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const useDataFetcher = (side) => {
    var totalPages = 2;
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            const page = Math.min(currentPage + 1, totalPages);
            await axios
                .get(`http://localhost:8080/api/regions?side=${side}&page=${page}`)
                .then(
                  (result) => {
                    setPages(result.data)
                    if(result.status === 200) {
                        setLoading(false)
                    }
                }).catch((err) =>
                {console.log(err);})
        }
        fetchData()
    }, [currentPage]);
    return [loading, pages, totalPages, currentPage, setCurrentPage];
};

export default useDataFetcher;
