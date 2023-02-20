import React from 'react';

function Card(props) {
    return (
        <div className="card border-2 rounded-2xl h-full hover:shadow-xl">
            <a href={props.link}>
            <div
                className="intro h-72 relative"
                style={{
                    backgroundImage: `url(${props.bg})`,
                    backgroundSize: 'cover',
                    borderRadius: '16px 16px 0 0',
                }}
            >
                <h1 className="post_title absolute bottom-4 text-2xl left-4 text-white uppercase">{props.name}</h1>
                
            </div>
            </a>
            <div className="content px-4 py-8">
                <p>
                    The only Brazilian capital through which the Equator passes,
                    Macapá is not only the capital of Amapá state, but also t...
                </p>
                <a href={props.link} className='text-yellow-500 font-bold'>Read more</a>
            </div>
        </div>
    );
}

export default Card;
