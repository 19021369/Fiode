import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function Header() {
    const [searchArea, setSearchArea] = useState('');

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

            <div className="md:flex z-40">
                <form className="max-w-sm px-4">
                    <div className="relative py-1">
                        <a href={`/searchresults/${searchArea}`}>
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
                            onChange={(e) => setSearchArea(e.target.value)}
                            type="text"
                            placeholder="Search"
                            className="w-full py-2 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                        />
                    </div>
                </form>
                {/* khi chua dang nhap */}
                {/* <a href="/login" className="flex items-center hidden">
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
                </a> */}
                {/* khi da dang nhap */}
                <Menu as="div" className="relative w-fit">
                    <div>
                        <Menu.Button className="border-none px-0">
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
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="/profile"
                                            className={`${
                                                active
                                                    ? 'bg-violet-500 text-white'
                                                    : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            User profile
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            className={`${
                                                active
                                                    ? 'bg-violet-500 text-white'
                                                    : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            Log out
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href='/login'
                                            className={`${
                                                active
                                                    ? 'bg-violet-500 text-white'
                                                    : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            Log in
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href='/register'
                                            className={`${
                                                active
                                                    ? 'bg-violet-500 text-white'
                                                    : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            Create new account
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </nav>
    );
}

export default Header;
