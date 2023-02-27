import React from 'react';
import HaGiang from '~/assets/HaGiang.jpg';
import HaLong from '~/assets/HaLong.jpg';
import HaNoi from '~/assets/HaNoi.jpg';
import HoiAn from '~/assets/HoiAn.jpg';
import PhuQuoc from '~/assets/PhuQuoc.jpg';
import SaiGon from '~/assets/SaiGon.jpg';

import SelectsCard from './Select';

function TravelByRegion() {
    return (
        // blocks cac tinh thanh, khi an se chuyen sang destination filter theo tinh thanh do
        <div className="max-w-[1240px] mx-auto pt-16 px-4 text-center">
            <a href='/regions'><h1>Travel by region</h1></a>
            
            <p className="py-4">Some beautifull regions</p>
            <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <SelectsCard bg={HaGiang} text="Hà Giang" />
                <SelectsCard bg={HaLong} text="Hạ Long" />
                <SelectsCard bg={HaNoi} text="Hà Nội" />
                <SelectsCard bg={HoiAn} text="Hội An" />
                <SelectsCard bg={PhuQuoc} text="Phú Quốc" />
                <SelectsCard bg={SaiGon} text="Sài Gòn" />
            </div>
        </div>
    );
}

export default TravelByRegion;
