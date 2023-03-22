import React from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import toSlug from '../toSlug';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

function DestinationPage() {

    const { destinationName } = useParams('');
    const [destination, setDestination] = useState('Test');
    const [images, setImages] = useState('');

//  lay destination
    useEffect(() => {
        const fetchData = async() => {
        var config = {
            method: 'get',
            url: `http://localhost:8080/api/destinations?name=${destinationName}`,
            headers: {
                'Content-Type': 'application/json',
            }
        };

        await axios(config)
            .then(function (response) {
                setDestination(response.data)
                setImages(toSlug(destination[0]?.name))
            
            })
            .catch(function (error) {
                console.log(error)
            });
        }
        fetchData()
    },[images])


    return (
        <div>
            <div className="relative">
                <div
                    className="mx-auto px-4 filter brightness-50"
                    style={{
                        backgroundImage: `url(http://localhost:8080/fileSystem/${images}4.jpg)`,
                        backgroundSize: 'cover',
                        height: '800px',
                    }}
                ></div>
                
                <h1 className="text-9xl text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[Babylonica]">
                    {destination[0]?.name}
                </h1>
            </div>
            <div className="max-w-[1240px] mx-auto pt-16 px-4">
                <div className="grid grid-cols-2 gap-7">
                    <div>
                        <p className="">
                            {destination[0]?.createdAt}
                        </p>
                        <strong>
                            {destination[0]?.introduce}
                        </strong>
                        <p className="pt-16">
                            {destination[0]?.content}
                        </p>
                    </div>
                    <div className='h-60'>api maps</div>
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
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img
                            className="object-fill w-full"
                            src={`http://localhost:8080/fileSystem/${images}1.jpg`}
                            alt="slide 1"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full"
                            src={`http://localhost:8080/fileSystem/${images}2.jpg`}
                            alt="slide 2"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full"
                            src={`http://localhost:8080/fileSystem/${images}3.jpg`}
                            alt="slide 3"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default DestinationPage;
