import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import slide1 from '~/assets/slide1.png';
import slide2 from '~/assets/slide2.webp';
import slide3 from '~/assets/slide3.webp'; 

const sliderData = [
    {
        url: slide1,
    },
    {
        url: slide2,
    },
    {
        url: slide3,
    },
];

function Carousel() {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length;
    // console.log(length)

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1);
    };
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1);
    };

    return (
        <div className="max-w-[1240px] mx-auto px-4 pt-16 items-center justify-center text-center">
            <h1 className='py-4'>Some beautiful pictures</h1>

            <div className="relative flex">
                <BsArrowLeftSquareFill
                    onClick={prevSlide}
                    className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
                />
                <BsArrowRightSquareFill
                    onClick={nextSlide}
                    className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
                />
                {sliderData.map((item, index) => (
                    <div
                        key={index}
                        className={
                            index === slide ? 'opacity-100' : 'opacity-0'
                        }
                    >
                        {index === slide && (
                            <img
                                className="w-full rounded-md"
                                src={item.url}
                                alt="/"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
