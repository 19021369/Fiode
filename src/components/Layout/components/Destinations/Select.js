import React from 'react';

function SelectsCard(props) {
    return (
        <div className="relative">
            <img
                className="w-full h-full"
                src={props.bg}
                alt="/"
            />

            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-12 text-md font-bold text-white absolute">
                    {props.text}
                </p>
                <a
                    href="/destination"
                    className="left-4 bottom-4 text-xl font-bold text-yellow-400 absolute hover:text-white"
                >
                    READ MORE +
                </a>
            </div>
        </div>
    );
}

export default SelectsCard;
