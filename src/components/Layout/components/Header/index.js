import React, { useState } from 'react';

function Header() {
    const [navIsShown, setnavIsShown] = useState(false);

    const toggleNavIsShown = () => {
        setnavIsShown((navIsShown) => !navIsShown);
    };
    const [searchArea, setSearchArea] = useState('')
    return (
        <nav className="flex justify-between items-center h-15 px-4 z-10 w-full bg-gray-300">
            <a href="/">
                <h1 className="w-80">FIODE</h1>
            </a>

            <ul className="hidden md:flex font-semibold ">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/destinations">Destinations</a>
                </li>
                <li>
                    <a href="/regions">Regions</a>
                </li>
                <li>
                    <a href="/festivals&events">Festivals & Events</a>
                </li>
                <li>
                    <a href="/blogs">Blogs</a>
                </li>
            </ul>

            <div className="hidden md:flex">
                <form className="max-w-sm px-4">
                    <div className="relative">
                        <a href='/searchresults'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </a>

                        <input
                            value={searchArea}
                            onChange={e => setSearchArea(e.target.value)}
                            type="text"
                            placeholder="Search"
                            className="w-full py-2 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                        />
                    </div>
                </form>

                <a href="/login" className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                    </svg>
                </a>
            </div>

            {!navIsShown && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 md:hidden"
                    onClick={toggleNavIsShown}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                    />
                </svg>
            )}
            {navIsShown && (
                <div className="md:hidden absolute z-10 top-0 left-0 w-full bg-gray-100/90 text-black px-4 py-6">
                    <div className="flex justify-between">
                        <h1>Beaches.</h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                            onClick={toggleNavIsShown}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                    <ul className="mb-4">
                        <li className="border-b-2 border-b-gray-600">
                            <a href="/">Home</a>
                        </li>
                        <li className="border-b-2 border-b-gray-600">
                            <a href="/destinations">Destinations</a>
                        </li>
                        <li className="border-b-2 border-b-gray-600">
                            <a href="/regions">Regions</a>
                        </li>
                        <li className="border-b-2 border-b-gray-600">
                            <a href="/festivals&events">Festivals & Events</a>
                        </li>
                        <li className="border-b-2 border-b-gray-600">
                            <a href="/blogs">Blogs</a>
                        </li>
                    </ul>
                    <button className="w-full mb-4 btn">Search</button>
                    <button className="w-full mb-4 btn">Account</button>
                </div>
            )}
        </nav>
    );
}

export default Header;
