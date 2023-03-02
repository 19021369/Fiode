import React,{ useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import thuyenVid from '~/assets/thuyen.mp4';


function Hero() {

    const [searchResult, setSearchResult] = useState('')

    return (
        <div className="Hero w-full h-screen relative z-0">
            <video
                className="w-full h-full object-cover"
                src={thuyenVid}
                autoPlay
                loop
                muted
            />
            <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
                <h1>First Class Travel</h1>
                <h2 className="py-4">Top 1% Locations Worldwide</h2>
                <form
                    className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
                        rounded-md text-black bg-gray-100/90 h-12"
                >
                    
                        <input
                            value={searchResult}
                            onChange={e => setSearchResult(e.target.value)}
                            className="bg-transparent w-11/12 font-[Poppins]"
                            type="text"
                            placeholder="Search Destinations"
                        />
                        
                        <a href={`/searchresults/${searchResult}`} className="w-1/12 flex justify-center">
                            
                                <AiOutlineSearch
                                    size={20}
                                    className="icon"
                                    style={{ color: '#ffffff' }}
                                />
                            
                        </a>
                    
                </form>
            </div>
        </div>
    );
}

export default Hero;
