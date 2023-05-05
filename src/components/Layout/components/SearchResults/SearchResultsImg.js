import React, { useState, useEffect } from 'react';
import searchResults from '~/assets/searchresult.jpg';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SelectsCard from './Select';
import Card from './Card';
import toSlug from '../toSlug';
import { useNavigate } from 'react-router-dom';

function SearchResultsImg() {
    const Navigate = useNavigate();
    const { searcharea } = useParams();
    const [searchResult, setSearchResult] = useState(searcharea);
    const [objects, setObjects] = useState([]);
    const [objectName, setObjectName] = useState('searchdestinations');

    useEffect(() => {
        const fetchData = async () => {
            var config = {
                method: 'get',
                url: `http://localhost:8080/api/${objectName}/${searcharea}`,
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            await axios(config)
                .then(function (response) {
                    setObjects(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        fetchData();
    }, [objectName]);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setObjects([]);
            Navigate(`/searchresults/${searchResult}`);
        }
      };
    return (
        <div>
            <div>
                <div
                    className='mx-auto px-4 filter brightness-50'
                    style={{
                        backgroundImage: `url(${searchResults})`,
                        backgroundSize: 'cover',
                        height: '700px',
                    }}
                ></div>
                <h1 className='pl-10 text-9xl text-white absolute top-1/2 -translate-y-3/4 font-[Babylonica]'>
                    Search results for: {searcharea}
                </h1>
            </div>

            <div className='flex justify-center pt-16'>
                <div className='flex border border-purple-200 rounded-lg'>
                    <input
                        value={searchResult}
                        onChange={(e) => setSearchResult(e.target.value)}
                        onKeyDown={handleKeyDown}
                        type='text'
                        className='w-96 block px-4 py-2 text-purple-700 bg-white border rounded-lg focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                    <a href={`/searchresults/${searchResult}`}>
                        <button className='px-4 text-white bg-purple-600 border-l rounded-lg '>
                            Search
                        </button>
                    </a>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto px-4 text-center'>
                <div className=' space-x-16 py-16 '>
                    <button
                        onClick={() => setObjectName('searchdestinations')}
                        className='w-60 rounded-full font-bold bg-purple-600'
                    >
                        Destinations
                    </button>
                    <button
                        onClick={() => setObjectName('searchregions')}
                        className='w-60 rounded-full font-bold bg-purple-600'
                    >
                        Regions
                    </button>
                    <button
                        onClick={() => setObjectName('searchevents')}
                        className='w-60 rounded-full font-bold bg-purple-600'
                    >
                        Festivals & Events
                    </button>
                    <button
                        onClick={() => setObjectName('posts/search')}
                        className='w-60 rounded-full font-bold bg-purple-600'
                    >
                        Blogs
                    </button>
                </div>
                {/* destinations */}
                {objectName === 'searchdestinations' && (
                    <div>
                        {objects.length !== 0 ? (
                            <div className=' grid sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                                {objects.map((object) => (
                                    <SelectsCard
                                        key={object?.id}
                                        name={object?.name}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className='text-3xl text-black'>
                                Oh! No results were found
                            </div>
                        )}
                    </div>
                )}
                {/* regions */}
                {objectName === 'searchregions' && (
                    <div>
                        {objects.length !== 0 ? (
                            <div className='grid grid-cols-3 gap-4 py-8 px-4'>
                                {objects?.map((object) => (
                                    <Card key={object.id} {...object} />
                                ))}
                            </div>
                        ) : (
                            <div className='text-3xl text-black'>
                                Oh! No results were found
                            </div>
                        )}
                    </div>
                )}
                {/* events */}
                {objectName === 'searchevents' && (
                    <div>
                        {objects.length !== 0 ? (
                            <div className='justify-center grid grid-cols-2 gap-10'>
                                {objects.map((object) => (
                                    <div
                                        className='wrap-event grid grid-cols-2'
                                        key={object.id}
                                    >
                                        <div className='wrap-thumb'>
                                            <img
                                                alt='thumb'
                                                src={`http://localhost:8080/fileSystem/${toSlug(
                                                    object.name
                                                )}.jpg`}
                                                className='thumb w-[292px] h-[182.5px]'
                                            ></img>
                                        </div>
                                        <div className='info bg-black text-white p-5'>
                                            <h5 className='title text-xl font-bold pb-4'>
                                                {object.name}
                                            </h5>
                                            <span className='date text-sm font-thin pb-2'>
                                                {object.timestart} ' - '{' '}
                                                {object.timeend}
                                            </span>
                                            <p className='desc text-sm h-14 truncate'>
                                                {object.content}
                                            </p>
                                            <a
                                                href={`http://localhost:3000/festivals&events/${object.month}/${object.name}`}
                                                className='link text-yellow-400'
                                            >
                                                read more
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='text-3xl text-black'>
                                Oh! No results were found
                            </div>
                        )}
                    </div>
                )}
                {/* posts */}
                {objectName === 'posts/search' && (
                    <div>
                        {objects.length !== 0 ? (
                            <div className='grid grid-item grid-cols-3'>
                                {objects?.map((object) => (
                                    <div
                                        className='card border-2 h-full hover:shadow-xl'
                                        key={object.id}
                                    >
                                        <div
                                            className='intro h-72 relative'
                                            style={{
                                                backgroundImage: `url(http://localhost:8080/fileSystem/${toSlug(
                                                    object.title
                                                )}.jpg)`,
                                                backgroundSize: 'cover',
                                            }}
                                        ></div>

                                        <div className='content m-8 mt-2 h-48 relative'>
                                            <p className='text-gray-500 text-left'>
                                                Created at{' '}
                                                {object.createdAt?.slice(0, 10)}
                                            </p>
                                            <h1 className='post_title text-xl left-4 uppercase text-left'>
                                                {object.title}
                                            </h1>
                                            <a
                                                href={`/blogs/${object.title}/${object.id}`}
                                                className='text-yellow-500 absolute bottom-0 font-bold left-0'
                                            >
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='text-3xl text-black'>
                                Oh! No results were found
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchResultsImg;
