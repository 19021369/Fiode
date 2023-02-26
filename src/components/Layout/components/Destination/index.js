import React from 'react';
import searchResults from '~/assets/searchresult.jpg';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css"
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function DestinationPage() {
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
                    Hà Nội
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-7 max-w-[1240px] mx-auto pt-16 px-4">
                <div>
                    <strong>
                        The white-sand beaches on the banks of the Tapajós, a
                        river with fresh, warm, blue-green waters, are one of
                        the main attractions of this charming destination
                        surrounded by breathtaking nature.
                    </strong>
                    <p className="pt-16">
                        Alter do Chão was described as one of the best beach
                        destinations in Brazil by English newspaper The
                        Guardian. The village is situated just 38 km from the
                        city of Santarém, in the middle of the Amazon. Located
                        in a beautiful setting, it is the ideal spot for
                        visitors to enjoy one of the most incredible regions in
                        Brazil. The local beaches appear during the Amazonian
                        summer, which occurs between the months of August and
                        December. During this period, hotels and inns fill up
                        with guests. In addition to enjoying the beaches,
                        visitors are able to hike in the forest, go rappelling,
                        go canyoning, try sports fishing, swim with river
                        dolphins, visit local communities, and fill their
                        suitcases with local handicrafts. During the month of
                        September, visitors get to experience the traditional
                        Sairé Festival, which combines religious, mythological,
                        and cultural elements.
                    </p>
                </div>
                <div>Cái này để google api</div>
            </div>

            <>
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
                            alt="image slide 1"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full "
                            className="object-fill w-full"
                            src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                            alt="image slide 2"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full"
                            src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                            alt="image slide 3"
                        />
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
}

export default DestinationPage;
