import React from 'react';
import searchResults from '~/assets/searchresult.jpg';

function SearchResultsImg() {
    return (
        <div>
            <div
                className="max mx-auto pt-16 px-4 text-center h-72"
                style={{ 
                  backgroundImage: `url(${searchResults})`,
                  backgroundSize: "cover"
                  }}
            >
                Huy an cut
            </div>
        </div>
    );
}

export default SearchResultsImg;
