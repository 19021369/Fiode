import React from 'react';
import toSlug from '../toSlug';

function SelectsCard(props) {

    return (
        <div className="relative w-full h-[193.25px] block">
            <img
                className="w-full h-full"
                src={`http://localhost:8080/fileSystem/${toSlug(props.name)}1.jpg`}
                alt={props.name}
            />

            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-12 text-md font-bold text-white absolute">
                    {props.name}
                </p>
                <a
                    href={`/destinations/${props.name}`}
                    className="left-4 bottom-4 text-xl font-bold text-yellow-400 absolute hover:text-white"
                >
                    READ MORE +
                </a>
            </div>
        </div>
    );
}

export default SelectsCard;
