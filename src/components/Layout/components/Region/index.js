import React from 'react';
import HaGiang from '~/assets/hagiang.jpg';
import CarouselDestination from './carousel';
import { useParams } from 'react-router-dom';
function RegionPage() {
    const { regionName } = useParams();

    return (
        <div>
            <div className="relative h-full w-full">
                <img src={HaGiang} className="h-screen w-full" alt="bg"></img>
                <h1 className="title font-[Babylonica] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_75%)] text-9xl text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {regionName}
                </h1>
            </div>
            <div className="max-w-[1240px] py-4 mx-auto">
                <div className="flex uppercase font-semibold">
                    <a href="#section1" className="px-4 text-xl relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800 active:bg-red-800">
                        Overview
                    </a>

                    <a href="#section2" className="px-4 text-xl relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800 active:bg-red-800">
                        When to go
                    </a>

                    <a href="#section3" className="px-4 text-xl relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300
                    hover:before:w-full hover:before:left-0 hover:before:bg-red-800 active:bg-red-800">
                        You may also like
                    </a>

                    <a href="#section4" className="px-4 text-xl relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300
                            hover:before:w-full hover:before:left-0 hover:before:bg-red-800 active:bg-red-800">
                        Nearby places
                    </a>
                </div>

                <div id="section1" className="pt-10 px-56">
                    <div className="desc text-xl text-gray-400 font-semibold py-4">
                        A border province and official Frontier Area, Ha Giang
                        lies in the remote far northern region of the country.
                        To visit this province is to journey back in time and
                        encounter some of Vietnam’s most rugged and grand
                        landscapes. Ha Giang is best experienced as a road trip
                        on two wheels, soaking up the majesty of the landscape
                        and the atmosphere of the remote towns and minority
                        villages.
                    </div>
                    <div className="todo py-4">
                        <h3 className="py-4 text-red-800">
                            Top things to do in Ha Giang
                        </h3>
                        <h4 className="py-4 font-semibold">
                            Drive Ma Pi Leng Pass
                        </h4>
                        <p>
                            The roads of Ha Giang serve up the ultimate
                            motorcycle adventures. The drive into Dong Van is
                            impossibly beautiful, however Ma Pi Leng — where the
                            road snakes past the Nho Que River — is the jewel in
                            Ha Giang crown.
                        </p>
                        <h4 className="py-4 font-semibold">
                            Get lost in the hills
                        </h4>
                        <p>
                            Trekking opportunities are plentiful in Ha Giang.
                            The Quan Ba Pass holds a lookout that lives up to
                            its name: Heaven’s Gate. Quan Ba is also the gateway
                            to the lofty limestone peaks and rock-strewn fields
                            of Dong Van Karst Plateau Geopark.
                        </p>
                        <h4 className="py-4 font-semibold">
                            Visit the Sa Phin H'Mong Palace
                        </h4>
                        <p>
                            Near the border with China stands a H'Mong King
                            Palace in the village of Sa Phin. Built in 1902
                            during the French occupation, the wood-framed palace
                            is done in the traditional Chinese style and oozes
                            character.
                        </p>
                        <h4 className="py-4 font-semibold">
                            See the king of flagpoles
                        </h4>
                        <p className="pb-4">
                            Make time to journey north to Lung Cu, where a
                            gigantic Vietnamese flag blows proudly at the
                            border. The best time to arrive is late afternoon as
                            the heat subsides, making the climb of 200 steps a
                            little kinder.
                        </p>
                    </div>
                    <h3 id="section2" className="py-4 text-red-800">
                        Ha Giang Weather
                    </h3>
                    <p>
                        September through to November is a good time to visit
                        this remote province, with cooler temperatures. In
                        November, Ha Giang is hugely popular during the
                        Buckwheat Flower Festival. April to June is pleasant and
                        warm, July and August can be very hot with regular
                        monsoons.
                    </p>
                    <h3 id="section4" className="py-4 text-red-800">Ha Giang Transport</h3>
                    <p>
                        The small city of Ha Giang is the gateway to the
                        province, and approximately 300km from Hanoi. Buses run
                        day and night from the capital, ranging from sleepers to
                        smaller VIP mini-vans. Depending on the vehicle and
                        driver, the journey there takes around six hours. Public
                        transport around Ha Giang Province is limited.
                        Experienced drivers can rent a motorcycle in town.
                        Another option is to book a tour either on the back of a
                        motorbike or by private car.
                    </p>
                    <h2 className="text-4xl font-semibold my-10 text-center text-slate-700">
                        Some destinations
                    </h2>
                </div>

                {/* diem du lich region do */}
                <div id="section3"><CarouselDestination regionName={regionName}/></div>
            </div>
        </div>
    );
}

export default RegionPage;
