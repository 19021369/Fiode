import React from 'react';

function SelectsCard(props) {
    return (
        <div className="relative overflow-hidden">
            <img
                className="w-full h-full object-cover filter brightness-100 hover:brightness-50 transition-all hover:scale-125"
                src={props.bg}
                alt="/"
            />
            <p className="absolute left-4 bottom-4 text-2xl font-bold text-white">
                {props.text}
            </p>
        </div>
    );
}

export default SelectsCard;
