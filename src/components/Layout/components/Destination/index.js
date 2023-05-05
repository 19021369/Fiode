import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import toSlug from '../toSlug';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import osm from './osm-providers';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import '~/index.css';

function DestinationPage() {
    const { destinationName } = useParams('');
    const [destination, setDestination] = useState('Test');
    const [images, setImages] = useState('');
    const [position, setPosition] = useState([]);
    //  lay destination
    useEffect(() => {
        const fetchData = async () => {
            var config = {
                method: 'get',
                url: `http://localhost:8080/api/destinations?name=${destinationName}`,
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            await axios(config)
                .then(function (response) {
                    setDestination(response.data);
                    setImages(toSlug(destination[0]?.name));
                    setPosition([
                        destination[0]?.deslat,
                        destination[0]?.deslong,
                    ]);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        fetchData();
    }, [images]);
    return (
        <div>
            <div className='relative'>
                <div
                    className='mx-auto px-4 filter brightness-50 h-[800px]'
                    style={{
                        backgroundImage: `url(http://localhost:8080/fileSystem/${images}1.jpg)`,
                        backgroundSize: 'cover',
                    }}
                ></div>

                <h1 className='text-9xl text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[Babylonica]'>
                    {destination[0]?.name}
                </h1>
            </div>
            <div className='max-w-[1240px] mx-auto pt-8 px-4'>
                <div className='grid grid-cols-2 gap-7'>
                    <div>
                        <p className=''>
                            {destination[0]?.createdAt?.slice(0, 10)}
                        </p>
                        <strong>{destination[0]?.introduce}</strong>
                        <p className='py-8 font-sans'>
                            {destination[0]?.content}
                        </p>
                    </div>
                    {/* api maps */}
                    {((position?.length > 0) && (position[0] !== undefined))  ? (
                        <MapContainer
                            center={position}
                            zoom={16}
                            attributionControl={false}
                        >
                            <TileLayer
                                attribution={osm.maptiler.attribution}
                                url={osm.maptiler.url}
                            />
                            <Marker position={position}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily
                                    customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    ) : null}
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <img
                            className='object-fill w-full'
                            src={`http://localhost:8080/fileSystem/${images}4.jpg`}
                            alt='slide 1'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className='object-fill w-full'
                            src={`http://localhost:8080/fileSystem/${images}2.jpg`}
                            alt='slide 2'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className='object-fill w-full'
                            src={`http://localhost:8080/fileSystem/${images}3.jpg`}
                            alt='slide 3'
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

let DefaultIcon = L.icon({
    iconUrl: '/marker-icon.png',
    iconSize: [25, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default DestinationPage;
