import React, { useState } from 'react';
import searchResults from '~/assets/searchresult.jpg';
import { useParams } from 'react-router-dom';

function SearchResultsImg() {
    const { searcharea } = useParams();
    const [searchResult, setSearchResult] = useState('');

    return (
        <div>
            <div>
                <div
                    className="mx-auto px-4 filter brightness-50"
                    style={{
                        backgroundImage: `url(${searchResults})`,
                        backgroundSize: 'cover',
                        height: '700px',
                    }}
                ></div>
                <h1 className="pl-10 text-9xl text-white absolute top-1/2 -translate-y-3/4 font-[Babylonica]">
                    Search results for: {searcharea}
                </h1>
            </div>

            <div className="flex justify-center pt-16">
                <div className="flex border border-purple-200 rounded-lg">
                    <input
                        value={searchResult}
                        onChange={(e) => setSearchResult(e.target.value)}
                        type="text"
                        className="w-96 block px-4 py-2 text-purple-700 bg-white border rounded-lg focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Search..."
                    />
                    <a href={`/searchresults/${searchResult}`}>
                        <button className="px-4 text-white bg-purple-600 border-l rounded-lg ">
                            Search
                        </button>
                    </a>
                </div>
            </div>
            <div className="pt-16 space-x-16 max-w-[1240px] mx-auto px-4 text-center">
                <button className="w-60 rounded-full font-bold">
                    Destinations (0)
                </button>
                <button className="w-60 rounded-full font-bold">
                    Regions (0)
                </button>
                <button className="w-60 rounded-full font-bold">
                    Festivals & Events (0)
                </button>
                <button className="w-60 rounded-full font-bold">
                    Blogs (0)
                </button>
            </div>
        </div>
    );
}

export default SearchResultsImg;
