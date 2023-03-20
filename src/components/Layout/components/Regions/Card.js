import React from 'react';
import toSlug from '../toSlug';

function Card({name, description}) {
    return (
        <div className="card border-2 rounded-2xl h-full hover:shadow-xl">
            <a href={`/regions/${toSlug(name)}`}>
            <div
                className="intro h-72 relative"
                style={{
                    backgroundImage: `url(http://localhost:8080/fileSystem/${toSlug(name)}.jpg)`,
                    backgroundSize: 'cover',
                    borderRadius: '16px 16px 0 0',
                }}
            >
                <h1 className="post_title absolute bottom-4 text-2xl left-4 text-white uppercase">{name}</h1>
                
            </div>
            </a>
            <div className="content px-4 py-8">
                <p>
                   {description}
                </p>
                <a href={`/regions/${name}`} className='text-yellow-500 font-bold'>Read more</a>
            </div>
        </div>
    )
}

export default Card;
