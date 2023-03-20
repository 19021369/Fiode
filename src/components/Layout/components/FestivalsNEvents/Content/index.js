import React from 'react';
import toSlug from '../../toSlug';

function Contents({ events, month }) {
    return (
        <div className='max-w-[1240px] mx-auto px-4 pt-4 items-center justify-center grid grid-cols-2 gap-10'>
                {events.map((event) => (
                    <div className='wrap-event grid grid-cols-2' key={event.id}>
                        <div className='wrap-thumb'>
                            <img
                                alt='thumb'
                                src={`http://localhost:8080/fileSystem/${toSlug(event.name)}.jpeg`}
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
                            <p className='desc text-sm truncate'>{event.content}</p>
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
    );
}

export default Contents;
