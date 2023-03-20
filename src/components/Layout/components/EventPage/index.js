import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toSlug from '../toSlug';

function EventPage() {
    const { eventName, month } = useParams('');
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            var config = {
                method: 'get',
                url: `http://localhost:8080/api/events?month=${month}`,
            };
            await axios(config)
                .then(function (response) {
                    setEvents(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        fetchData();
    }, [month]);
    var event = events?.filter((evt) => {
        return evt.name === eventName;
    });
    var otherEvent = events?.filter((evt) => {
        return evt.name !== eventName;
    });
    return (
        <div>
           
            <div className='max-w-[1240px] mx-auto p-4'>
                <div className='grid grid-cols-2 mt-12'>
                    <div className='w-full shadow-lg aspect-w-1 aspect-h-1 bg-red-700'>
                        <img
                            alt='thumb'
                            src={`http://localhost:8080/fileSystem/${toSlug(event[0]?.name)}.jpeg`}
                            className='thumb w-full'
                        ></img>
                    </div>


                    <div className='w-full shadow-lg aspect-w-1 aspect-h-1 bg-black text-white p-10'>
                    <a
                        href='/festivals&events'
                        className='link-back text-yellow-400'
                    >
                        <span>Back to {month.toUpperCase()} Events</span>
                    </a>
                    <h1 className='title font-bold pb-8'>{event[0]?.name}</h1>
                    <span className='date text-sm font-thin py-8'>
                        {event[0]?.timestart} - {event[0]?.timeend}
                    </span>
                    <p className='desc text-sm py-8'>{event[0]?.content}</p>
                    </div>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto pt-16 px-4 text-center text-2xl font-bold'> Một số sự kiện khác trong tháng</div>
            <div className='max-w-[1240px] mx-auto px-4 pt-4 justify-center grid grid-cols-2 gap-10'>
                {otherEvent.map((event) => (
                    <div className='wrap-event grid grid-cols-2 ' key={event.id}>
                        <div className='wrap-thumb bg-red-700'>
                            <img
                                alt='thumb'
                                src={`http://localhost:8080/fileSystem/${toSlug(
                                    event.name
                                )}.jpeg`}
                                className='thumb'
                            ></img>
                        </div>
                        <div className='info bg-black text-white p-5'>
                            <h5 className='title text-xl font-bold pb-4'>
                                {event.name}
                            </h5>
                            <span className='date text-sm font-thin pb-2'>
                                {event.timestart} ' - ' {event.timeend}
                            </span>
                            <p className='desc text-sm truncate'>
                                {event.content}
                            </p>
                            <a
                                href={`http://localhost:3000/festivals&events/${month}/${event.name}`}
                                className='link text-yellow-400'
                            >
                                read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventPage;
