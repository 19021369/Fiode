import React, { useState } from 'react';

function EventPage() {
    const [month, setMonth] = useState('');
    console.log(month);
    return (
        <div>
            {/* bgimg */}
            <div className="relative h-full w-full">
                <img
                    src="https://vietnam.travel/sites/default/files/styles/top_banner/public/2018-06/festivals%20events%20in%20vietnam.jpg?itok=L40P3HaF"
                    className="w-full"
                    alt="anhnen"
                ></img>
                <h1 className="title font-[Babylonica] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_75%)] text-9xl text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Festivals &amp; events
                </h1>

                <ul className="list flex wrap text-center absolute bottom-0 w-full border-y h-12">
                    <li
                        className="active item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800 active:bg-red-800"
                    >
                        <button
                            value={'jan'}
                            onClick={(e) => setMonth(e.target.value)}
                            className="p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute"
                        >
                            Jan
                        </button>
                    </li>
                    <li
                        className="item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800"
                    >
                        <button
                            value={'feb'}
                            onClick={(e) => setMonth(e.target.value)}
                            className="p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute"
                        >
                            Feb
                        </button>
                    </li>
                    <li
                        className="item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800"
                    >
                        <button
                            value={'mar'}
                            onClick={(e) => setMonth(e.target.value)}
                            className="p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute"
                        >
                            Mar
                        </button>
                    </li>
                    <li
                        className="item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800"
                    >
                        <button
                            value={'apr'}
                            onClick={(e) => setMonth(e.target.value)}
                            className="p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute"
                        >
                            Apr
                        </button>
                    </li>
                    <li
                        className="item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800"
                    >
                        <button
                            value={'may'}
                            onClick={(e) => setMonth(e.target.value)}
                            className="p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute"
                        >
                            May
                        </button>
                    </li>
                    <li
                        className="item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800"
                    >
                        <button
                            value={'jun'}
                            onClick={(e) => setMonth(e.target.value)}
                            className="p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute"
                        >
                            Jun
                        </button>
                    </li>
                    <li
                        className="item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800"
                    >
                        <button
                            value={'jul'}
                            onClick={(e) => setMonth(e.target.value)}
                            className="p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute"
                        >
                            Jul
                        </button>
                    </li>
                    <li
                        className="item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800"
                    >
                        <button
                            value={'aug'}
                            onClick={(e) => setMonth(e.target.value)}
                            className="p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute"
                        >
                            Aug
                        </button>
                    </li>
                    <li
                        className="item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800"
                    >
                        <button
                            value={'sep'}
                            onClick={(e) => setMonth(e.target.value)}
                            className="p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute"
                        >
                            Sep
                        </button>
                    </li>
                    <li
                        className="item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800"
                    >
                        <button
                            value={'oct'}
                            onClick={(e) => setMonth(e.target.value)}
                            className="p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute"
                        >
                            Oct
                        </button>
                    </li>
                    <li
                        className="item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800"
                    >
                        <button
                            value={'nov'}
                            onClick={(e) => setMonth(e.target.value)}
                            className="p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute"
                        >
                            Nov
                        </button>
                    </li>
                    <li
                        className="item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800"
                    >
                        <button
                            value={'dec'}
                            onClick={(e) => setMonth(e.target.value)}
                            className="p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute"
                        >
                            Dec
                        </button>
                    </li>
                </ul>
            </div>
            <div className="max-w-[1240px] mx-auto px-4 pt-16 items-center justify-center flex">
                <div className="wrap-thumb w-fit">
                    <img
                        alt="thumb"
                        src="https://vietnam.travel/sites/default/files/styles/large/public/2022-12/H%E1%BB%99i%20Lim%20B%E1%BA%AFc%20Ninh_resize_0.jpeg?itok=CBSf1AwL"
                        className="thumb"
                    ></img>
                </div>

                <div
                    className="info bg-black text-white p-5 w-1/2"
                    style={{ height: '480px' }}
                >
                    <a href="/festivals&events" className="link-back text-yellow-400">
                        <span>Back to February Events</span>
                    </a>
                    <h1 className="title font-bold pb-8">LIM FESTIVAL</h1>
                    <span className="date text-sm font-thin py-8">
                        01 Feb 2023 - 04 Feb 2023{' '}
                    </span>
                    <p className="desc text-sm py-8">
                        Held from 08:00 February 01 to 08:00 February 04 in the
                        northern city of Bac Ninh, the Lim Festival is a huge
                        3-day celebration of ethnic Vietnamese culture, from
                        brightly colored costumes and art to Quan Ho, a distinct
                        form of folk singing recognized by UNESCO. Each year the
                        festival attracts visitors from all over the country to
                        Bac Ninh – considered the heart of the cultural region
                        of Kinh Bac, which now spans several provinces,
                        including parts of Hanoi. The city is famous for its
                        ancient, spiritually significant Buddhist pagodas,
                        including the Lim pagoda that gives the festival its
                        name. Apart from Quan ho folk songs, there are also many
                        Vietnamese traditional games to join including rice
                        cooking, human chess, wrestling and bamboo swings.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default EventPage;
