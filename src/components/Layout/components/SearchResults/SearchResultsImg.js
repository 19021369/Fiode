import React from 'react';
import searchResults from '~/assets/searchresult.jpg';

function SearchResultsImg() {
    return (
        <div>
            <div className="relative">
                <div
                    className="mx-auto px-4 filter brightness-50"
                    style={{
                        backgroundImage: `url(${searchResults})`,
                        backgroundSize: 'cover',
                        height: '700px',
                    }}
                ></div>
                <h1 className="pl-4 text-6xl text-white absolute top-1/2 -translate-y-1/2">
                    Search results for:
                </h1>
            </div>

            <div className="flex justify-center pt-16">
                <div className="flex border border-purple-200 rounded-lg">
                    <input
                        type="text"
                        className="w-96 block px-4 py-2 text-purple-700 bg-white border rounded-lg focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Search..."
                    />
                    <button className="px-4 text-white bg-purple-600 border-l rounded-lg ">
                        Search
                    </button>
                </div>
            </div>
            <div className='pt-16 space-x-16 max-w-[1240px] mx-auto px-4 text-center'>
                <button className='w-60 rounded-full font-bold'>Destinations (0)</button>
                <button className='w-60 rounded-full font-bold'>Regions (0)</button>
                <button className='w-60 rounded-full font-bold'>Festivals & Events (0)</button>
                <button className='w-60 rounded-full font-bold'>Blogs (0)</button>
            </div>
        </div>
    );
}

export default SearchResultsImg;
