import React from 'react';
import Hero from '~/components/Layout/components/Hero';
import TopDestinations from '~/components/Layout/components/TopDestinations';
import TravelByRegion from '~/components/Layout/components/TravelByRegion';
import Carousel from '~/components/Layout/components/Carousel';
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
