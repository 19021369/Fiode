import React from 'react';
import Hero from '~/components/Layout/components/Home/Hero';
import TopDestinations from '~/components/Layout/components/Home/TopDestinations';
import TravelByRegion from '~/components/Layout/components/Home/TravelByRegion';
import Carousel from '~/components/Layout/components/Home/Carousel';
function Home() {
    return (
        <div>
            <Hero />
            <TopDestinations/>
            <TravelByRegion/>
            <Carousel/>
        </div>
    );
}

export default Home;
