import React from 'react';
import HaGiang from '~/assets/hagiang.jpg';
import HaLong from '~/assets/quangninh.jpg';
import HaNoi from '~/assets/hanoi.jpg';
import HoiAn from '~/assets/hoian.jpg';
import PhuQuoc from '~/assets/phuquoc.jpg';
import SaiGon from '~/assets/saigon.jpg';

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
