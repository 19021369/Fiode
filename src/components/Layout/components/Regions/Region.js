import React from 'react';
import Card from './Card';
import PaginationButton from './PaginationButton';
import useDataFetcher from './UseDataFetcher';
import regionbg from '~/assets/regionbg.png';

function Region() {
    const { loading, pages, totalPages, currentPage, setCurrentPage } =
        useDataFetcher();
    return (
        <div>
            <div className="relative h-full w-full">
                <img src={regionbg} className="w-full" alt="background"></img>
                
                <h1 className="title font-[Babylonica] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_75%)] text-9xl text-white absolute top-1/2 left-40 translate-x-1/2 -translate-y-1/2">
                    Bắc
                </h1>
                <h1 className="title font-[Babylonica] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_75%)] text-9xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Trung
                </h1>
                <h1 className="title font-[Babylonica] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_75%)] text-9xl text-white absolute top-1/2 right-32 -translate-x-1/2 -translate-y-1/2">
                    Nam
                </h1>
            </div>

            <div className="max-w-[1240px] mx-auto pt-16 px-4 items-center">
                <div className="flex justify-between  text-center">
                    <a
                        href="#section1"
                        className="p-3 border-2 bg-yellow-400 font-bold px-8 rounded-full hover:bg-yellow-600 active:bg-white active:text-yellow-600 mx-28"
                    >
                        NORTH
                    </a>
                    <a
                        href="#section2"
                        className="p-3 border-2 bg-yellow-400 font-bold px-8 rounded-full hover:bg-yellow-600 active:bg-white active:text-yellow-600 mx-28"
                    >
                        MIDWEST
                    </a>
                    <a
                        href="#section3"
                        className="p-3 border-2 bg-yellow-400 font-bold px-8 rounded-full hover:bg-yellow-600 active:bg-white active:text-yellow-600 mx-28"
                    >
                        SOUTH
                    </a>
                </div>

                <section className="w-full rounded-2xl shadow-2xl my-10 py-8 px-4">
                    <h1 id="section1" className="py-4">
                        North
                    </h1>
                    <p>
                        The North of Brazil has countless amazing locations. The
                        region comprises 7 states: Acre, Amapá, Amazonas, Pará,
                        Rondônia, Roraima, and Tocantins. It is the largest
                        region of Brazil, in which you will find the largest
                        tropical rainforest in the world, the Amazon, as well as
                        the Amazon River Basin, the largest drainage basin on
                        the planet. Fall in love with incredible destinations
                        such as Jalapão, Mount Roraima National Park, and the
                        freshwater beaches of Alter do Chão.
                    </p>
                    {loading ? (
                        <div className="text-center text-5xl">Loading...</div>
                    ) : (
                        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4">
                            {pages.map((page) => (
                                <Card
                                    key={page.id}
                                    bg={page.avatar_url}
                                    name={page.login}
                                    link={page.html_url}
                                />
                            ))}
                        </div>
                    )}
                    <PaginationButton
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </section>

                <section className="w-full rounded-2xl shadow-2xl my-10 py-8 px-4">
                    <h1 id="section2" className="py-4">
                        Midwest
                    </h1>
                    <p>
                        The North of Brazil has countless amazing locations. The
                        region comprises 7 states: Acre, Amapá, Amazonas, Pará,
                        Rondônia, Roraima, and Tocantins. It is the largest
                        region of Brazil, in which you will find the largest
                        tropical rainforest in the world, the Amazon, as well as
                        the Amazon River Basin, the largest drainage basin on
                        the planet. Fall in love with incredible destinations
                        such as Jalapão, Mount Roraima National Park, and the
                        freshwater beaches of Alter do Chão.
                    </p>
                    {loading ? (
                        <div className="text-center text-5xl">Loading...</div>
                    ) : (
                        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4">
                            {pages.map((page) => (
                                <Card
                                    key={page.id}
                                    bg={page.avatar_url}
                                    name={page.login}
                                    link={page.html_url}
                                />
                            ))}
                        </div>
                    )}
                    <PaginationButton
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </section>

                <section className="w-full rounded-2xl shadow-2xl my-10 py-8 px-4">
                    <h1 id="section3" className="py-4">
                        South
                    </h1>
                    <p>
                        The North of Brazil has countless amazing locations. The
                        region comprises 7 states: Acre, Amapá, Amazonas, Pará,
                        Rondônia, Roraima, and Tocantins. It is the largest
                        region of Brazil, in which you will find the largest
                        tropical rainforest in the world, the Amazon, as well as
                        the Amazon River Basin, the largest drainage basin on
                        the planet. Fall in love with incredible destinations
                        such as Jalapão, Mount Roraima National Park, and the
                        freshwater beaches of Alter do Chão.
                    </p>
                    {loading ? (
                        <div className="text-center text-5xl">Loading...</div>
                    ) : (
                        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4">
                            {pages.map((page) => (
                                <Card
                                    key={page.id}
                                    bg={page.avatar_url}
                                    name={page.login}
                                    link={page.html_url}
                                />
                            ))}
                        </div>
                    )}
                    <PaginationButton
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </section>
            </div>
        </div>
    );
}

export default Region;
