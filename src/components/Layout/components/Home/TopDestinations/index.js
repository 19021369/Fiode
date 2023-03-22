import React from 'react';
import HaGiang from '~/assets/hagiang.jpg';
import HaLong from '~/assets/quangninh.jpg';
import HaNoi from '~/assets/hanoi.jpg';
import HoiAn from '~/assets/hoian.jpg';
import PhuQuoc from '~/assets/phuquoc.jpg';

function TopDestinations() {
    return (
        // dua ra 1 so dia diem noi bat gan da
        <div className="TopDestinations max-w-[1240px] mx-auto pt-16 px-4 text-center">
            <h1>Top Destinations</h1>
            <p className="py-4">Recent Most Viewed Places</p>
            <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
                <a
                    className="relative col-span-2 md:col-span-3 row-span-2 overflow-hidden"
                    href="/destination/hagiang"
                >
                    <img
                        className="w-full h-full object-cover filter brightness-100 hover:brightness-50 transition-all hover:scale-125"
                        src={HaGiang}
                        alt="Hà Giang"
                    />
                    <h2 className="absolute bottom-0 left-0 bg-gray-700 bg-opacity-50 w-full text-white">
                        Hà Giang
                    </h2>
                </a>
                <a className="relative overflow-hidden" href="/destination/halong">
                    <img
                        className="w-full h-full object-cover filter brightness-100 hover:brightness-50 transition-all hover:scale-125"
                        src={HaLong}
                        alt="Hạ Long"
                    />
                    <h2 className="absolute bottom-0 left-0 bg-gray-700 bg-opacity-50 w-full text-white">
                        Hạ Long
                    </h2>
                </a>
                <a className="relative overflow-hidden" href="/destination/hanoi">
                    <img
                        className="w-full h-full object-cover filter brightness-100 hover:brightness-50 transition-all hover:scale-125"
                        src={HaNoi}
                        alt="Hà Nội"
                    />
                    <h2 className="absolute bottom-0 left-0 bg-gray-700 bg-opacity-50 w-full text-white">
                        Hà Nội
                    </h2>
                </a>
                <a className="relative overflow-hidden" href="/destination/hanoi">
                    <img
                        className="w-full h-full object-cover filter brightness-100 hover:brightness-50 transition-all  hover:scale-125"
                        src={HoiAn}
                        alt="Hội An"
                    />
                    <h2 className="absolute bottom-0 left-0 bg-gray-700 bg-opacity-50 w-full text-white">
                        Hội An
                    </h2>
                </a>
                <a className="relative overflow-hidden" href="/destination/hanoi">
                    <img
                        className="w-full h-full object-cover filter brightness-100 hover:brightness-50 transition-all hover:scale-125"
                        src={PhuQuoc}
                        alt="Phú Quốc"
                    />
                    <h2 className="absolute bottom-0 left-0 bg-gray-700 bg-opacity-50 w-full text-white">
                        Phú Quốc
                    </h2>
                </a>
            </div>
        </div>
    );
}

export default TopDestinations;
