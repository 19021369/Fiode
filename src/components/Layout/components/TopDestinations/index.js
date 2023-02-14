import React, { useState, useEffect } from 'react';
import HaGiang from '~/assets/HaGiang.jpg';
import HaLong from '~/assets/HaLong.jpg';
import HaNoi from '~/assets/HaNoi.jpg';
import HoiAn from '~/assets/HoiAn.jpg';
import PhuQuoc from '~/assets/PhuQuoc.jpg';
// import SaiGon from '~/assets/SaGon.jpg';

function TopDestinations() {
    const [isHovering, setIsHovering] = useState(false);
    const [LocationName, setLocationName] = useState('');

    const handleShowInfo = (e) => {
        setIsHovering(true);
    };

    // useEffect((e) => {

    // },[isHovering]);
    return (
        // dua ra 1 so dia diem noi bat gan da
        <div className="TopDestinations max-w-[1240px] mx-auto pt-16 px-4 text-center">
            <h1>Top Destinations</h1>
            <p className="py-4">Recent Most Viewed Places</p>
            <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
                
                    <img
                        onMouseOver={(e) => handleShowInfo(e)}
                        className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
                        src={HaGiang}
                        alt="Hà Giang"
                    />
                
                    <img
                        onMouseOver={(e) => handleShowInfo(e)}
                        className="w-full h-full object-cover"
                        src={HaLong}
                        alt="Hạ Long"
                    />
                
                    <img
                        onMouseOver={(e) => handleShowInfo(e)}
                        className="w-full h-full object-cover"
                        src={HaNoi}
                        alt="Hà Nội"
                    />
                
                    <img
                        onMouseOver={(e) => handleShowInfo(e)}
                        className="w-full h-full object-cover"
                        src={HoiAn}
                        alt="Hội An"
                    />
                
                    <img
                        onMouseOver={(e) => handleShowInfo(e)}
                        className="w-full h-full object-cover"
                        src={PhuQuoc}
                        alt="Phú Quốc"
                    />
            </div>
        </div>
    );
}

export default TopDestinations;
