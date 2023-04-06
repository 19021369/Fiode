import React from 'react';
import SelectsCard from './Select';
import PaginationButton from './PaginationButton';
import useDataFetcher from './useDataFetcher';
import videoplayback from '~/assets/videoplayback.mp4';

function Destination() {
    const { loading, pages, totalPages, currentPage, setCurrentPage } =
    useDataFetcher();

    return (
        // blocks cac tinh thanh, khi an se chuyen sang destination filter theo tinh thanh do
        <div>
            <video
                className="w-full h-full object-cover"
                src={videoplayback}
                autoPlay
                loop
                controls
            />
            <div className="max-w-[1240px] mx-auto pt-16 px-4 text-center">
                <h1>Amazing places to visit</h1>
                <p className="py-4">Some beautifull regions</p>
                <div className="section">
                    {loading ? (
                        <div className="text-center text-5xl">Loading...</div>
                    ) : (
                        <div className=" grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {pages.length !==0 && pages.map((page) => (
                                <SelectsCard
                                    key={page?.id}
                                    name={page?.name}
                                />
                            ))}
                        </div>
                    )}
                    <PaginationButton
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
}

export default Destination;
