import React, { useState, useEffect } from 'react';
import axios from 'axios';
import event from '~/assets/festivalsevents.jpg';
import Contents from './Content';

function FestivalNEvent() {
    const [month, setMonth] = useState('apr');
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            var config = {
                method: 'get',
                url: `http://localhost:8080/api/events?month=${month}`,
            };

            await axios(config)
                .then(function (response) {
                    if(response.status === 200) {
                        setEvents(response.data)
                        setLoading(false)
                    } else{
                        setLoading(true)
                        setEvents([])
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        };
        fetchData()
    }, [month])
    console.log(events);
    return (
        <div>
            <div className='relative h-full w-full'>
                <img src={event} className='w-full' alt='anhnen'></img>
                <h1 className='title font-[Babylonica] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_75%)] text-9xl text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    Festivals &amp; events
                </h1>

                <ul className='list flex wrap text-center absolute bottom-0 w-full border-y h-12'>
                    <li
                        className='item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800'
                    >
                        <input
                            type='radio'
                            id='jan'
                            onClick={(e) => setMonth(e.target.id)}
                            className="peer hidden checked"
                            name="option"
                        />
                        <label
                            htmlFor='jan'
                            className='block p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute cursor-pointer select-none peer-checked:bg-red-800 peer-checked:font-bold peer-checked:text-white'
                        >
                            Jan
                        </label>
                    </li>
                    <li
                        className='active item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800 active:bg-red-800'
                    >
                        <input
                            type='radio'
                            id='fer'
                            onClick={(e) => setMonth(e.target.id)}
                            className="peer hidden"
                            name="option"
                        />
                        <label
                            htmlFor='fer'
                            className='block p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute cursor-pointer select-none peer-checked:bg-red-800 peer-checked:font-bold peer-checked:text-white'
                        >
                            Fer
                        </label>
                    </li>
                    <li
                        className='item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800'
                    >
                        <input
                            type='radio'
                            id='mar'
                            onClick={(e) => setMonth(e.target.id)}
                            className="peer hidden"
                            name="option"
                        />
                        <label
                            htmlFor='mar'
                            className='block p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute cursor-pointer select-none peer-checked:bg-red-800 peer-checked:font-bold peer-checked:text-white'
                        >
                            Mar
                        </label>
                    </li>
                    <li
                        className='item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800'
                    >
                        <input
                            type='radio'
                            id='apr'
                            onClick={(e) => setMonth(e.target.id)}
                            className="peer hidden"
                            name="option"
                        />
                        <label
                            htmlFor='apr'
                            className='block p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute cursor-pointer select-none peer-checked:bg-red-800 peer-checked:font-bold peer-checked:text-white'
                        >
                            Apr
                        </label>
                    </li>   
                    <li
                        className='item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800'
                    >
                        <input
                            type='radio'
                            id='may'
                            onClick={(e) => setMonth(e.target.id)}
                            className="peer hidden"
                            name="option"
                        />
                        <label
                            htmlFor='may'
                            className='block p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute cursor-pointer select-none peer-checked:bg-red-800 peer-checked:font-bold peer-checked:text-white'
                        >
                            May
                        </label>
                    </li>
                    <li
                        className='item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800'
                    >
                        <input
                            type='radio'
                            id='jun'
                            onClick={(e) => setMonth(e.target.id)}
                            className="peer hidden"
                            name="option"
                        />
                        <label
                            htmlFor='jun'
                            className='block p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute cursor-pointer select-none peer-checked:bg-red-800 peer-checked:font-bold peer-checked:text-white'
                        >
                            Jun
                        </label>
                    </li>
                    <li
                        className='item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800'
                    >
                        <input
                            type='radio'
                            id='jul'
                            onClick={(e) => setMonth(e.target.id)}
                            className="peer hidden"
                            name="option"
                        />
                        <label
                            htmlFor='jul'
                            className='block p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute cursor-pointer select-none peer-checked:bg-red-800 peer-checked:font-bold peer-checked:text-white'
                        >
                            Jul
                        </label>
                    </li>
                    <li
                        className='item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800'
                    >
                        <input
                            type='radio'
                            id='aug'
                            onClick={(e) => setMonth(e.target.id)}
                            className="peer hidden"
                            name="option"
                        />
                        <label
                            htmlFor='aug'
                            className='block p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute cursor-pointer select-none peer-checked:bg-red-800 peer-checked:font-bold peer-checked:text-white'
                        >
                            Aug
                        </label>
                    </li>
                    <li
                        className='item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800'
                    >
                        <input
                            type='radio'
                            id='sep'
                            onClick={(e) => setMonth(e.target.id)}
                            className="peer hidden"
                            name="option"
                        />
                        <label
                            htmlFor='sep'
                            className='block p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute cursor-pointer select-none peer-checked:bg-red-800 peer-checked:font-bold peer-checked:text-white'
                        >
                            Sep
                        </label>
                    </li>
                    <li
                        className='item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800'
                    >
                        <input
                            type='radio'
                            id='oct'
                            onClick={(e) => setMonth(e.target.id)}
                            className="peer hidden"
                            name="option"
                        />
                        <label
                            htmlFor='oct'
                            className='block p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute cursor-pointer select-none peer-checked:bg-red-800 peer-checked:font-bold peer-checked:text-white'
                        >
                            Oct
                        </label>
                    </li>
                    <li
                        className='item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800'
                    >
                        <input
                            type='radio'
                            id='nov'
                            onClick={(e) => setMonth(e.target.id)}
                            className="peer hidden"
                            name="option"
                        />
                        <label
                            htmlFor='nov'
                            className='block p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute cursor-pointer select-none peer-checked:bg-red-800 peer-checked:font-bold peer-checked:text-white'
                        >
                            Nov
                        </label>
                    </li>
                    <li
                        className='item p-0 w-1/12 font-extrabold text-white border-r bg-black bg-opacity-70
                            relative transition-all w-min-content
                            before:w-0 before:h-full before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:duration-500
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800'
                    >
                        <input
                            type='radio'
                            id='dec'
                            onClick={(e) => setMonth(e.target.id)}
                            className="peer hidden"
                            name="option"
                        />
                        <label
                            htmlFor='dec'
                            className='block p-none border-none rounded-none bg-opacity-0 h-full w-full flex justify-center items-center absolute cursor-pointer select-none peer-checked:bg-red-800 peer-checked:font-bold peer-checked:text-white'
                        >
                            Dec
                        </label>
                    </li>
                </ul>
            </div>
            <div className="max-w-[1240px] mx-auto px-4 pt-4 items-center justify-center text-2xl">
            <strong className="text-red-800">{month?.toUpperCase()}</strong>
            <div>2023</div>
            </div>
            {loading ? (<div className='text-center text-3xl'>
                                Không có sự kiện nào diễn ra trong tháng này!
                            </div>) : (<Contents events={events} month={month} />)}
            
        </div>
    );
}

export default FestivalNEvent;
