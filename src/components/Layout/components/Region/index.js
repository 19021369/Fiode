import React, { useEffect, useState } from 'react';
import HaGiang from '~/assets/hagiang.jpg';
import CarouselDestination from './carousel';
import { useParams } from 'react-router-dom';
import toSlug from '../toSlug';
import parse from 'html-react-parser';
import axios from 'axios';
function RegionPage() {
    const { regionName } = useParams();
    const [region, setRegion] = useState('');
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            var config = {
                method: 'get',
                url: `http://localhost:8080/api/region/${regionName}`,
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            await axios(config)
                .then(function (response) {
                    setRegion(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });

            await axios
                .get(
                    `http://localhost:8080/api/regions/location?location=${regionName}`
                )
                .then((result) => setLocations(result.data))
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className='relative h-full w-full'>
                <img src={HaGiang} className='h-screen w-full' alt='bg'></img>
                <h1 className='title font-[Babylonica] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_75%)] text-9xl text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    {regionName}
                </h1>
            </div>
            <div className='max-w-[1240px] py-4 mx-auto'>
                <div className='flex uppercase font-semibold'>
                    <a
                        href='#section1'
                        className='px-4 text-xl relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800 active:bg-red-800'
                    >
                        Overview
                    </a>

                    <a
                        href='#section2'
                        className='px-4 text-xl relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800 active:bg-red-800'
                    >
                        When to go
                    </a>

                    <a
                        href='#section3'
                        className='px-4 text-xl relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300
                    hover:before:w-full hover:before:left-0 hover:before:bg-red-800 active:bg-red-800'
                    >
                        You may also like
                    </a>

                    <a
                        href='#section4'
                        className='px-4 text-xl relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800 active:bg-red-800'
                    >
                        Nearby places
                    </a>
                </div>

                <div id='section1' className='pt-10 px-56'>
                    <div className='desc text-xl text-gray-400 font-semibold py-4'>
                        {region[0]?.description}
                    </div>
                    <div className='todo py-4'>
                        <h3 className='py-4 text-red-800'>
                            Top things to do in {regionName}
                        </h3>
                        {region.length !== 0 && (
                            <div className=' font-sans'>
                                {parse(region[0].todo)}
                            </div>
                        )}
                    </div>
                    <h3 id='section2' className='py-4 text-red-800'>
                        {regionName} Weather
                    </h3>
                    <p className=' font-sans'>{region[0]?.weather}</p>
                    <h3 id='section4' className='py-4 text-red-800'>
                        {regionName} Transport
                    </h3>
                    <p className='font-sans'>{region[0]?.transportation}</p>
                    <h2 className='text-4xl font-semibold my-10 text-center text-slate-700'>
                        Some destinations
                    </h2>
                </div>

                {/* diem du lich region do */}
                <div id='section3'>
                    <CarouselDestination locations={locations} />
                </div>
            </div>
        </div>
    );
}

export default RegionPage;
