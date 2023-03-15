import React from 'react';
import searchResults from '~/assets/searchresult.jpg';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

function DestinationPage() {
    const { destinationName } = useParams();
    const [destination, setDestination] = useState('');

    useEffect(() => {
        const fetchData = async() => {
        // var data = JSON.stringify({
        //     name: destinationName
        // });

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
            })
            .catch(function (error) {
                console.log(error);
            });
        };
        fetchData()
    },[destinationName])

    console.log(destination);
    return (
        <div>
            <div className="relative">
                <div
                    className="mx-auto px-4 filter brightness-50"
                    style={{
                        backgroundImage: `url(${searchResults})`,
                        backgroundSize: 'cover',
                        height: '500px',
                    }}
                ></div>
                
                <h1 className="pl-48 text-9xl text-white absolute top-1/2 -translate-y-1/2">
                        {/* {destination[0].name} */}
                </h1>
            </div>
            <div className="max-w-[1240px] mx-auto pt-16 px-4">
                <div className="grid grid-cols-2 gap-7">
                    <div>
                        <p className="pt-16">
                            {/* {destination[0].createdAt} */}
                        </p>
                        <strong>
                            {/* {destination[0].introduce} */}
                        </strong>
                        <p className="pt-16">
                            {/* {destination[0].content} */}
                        </p>
                    </div>
                    <div>api maps</div>
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
                            src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                            alt="slide 1"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full"
                            src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                            alt="slide 2"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full"
                            src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                            alt="slide 3"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default DestinationPage;
