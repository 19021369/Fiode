import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import blogBG from '~/assets/blogs.jpg';
function Blog() {
    const [user, setUser] = useState('');
    const [posts, setPosts] = useState([]);
    var userposts, otherposts;
    useEffect(() => {
        const fetchData = async () => {
            var config = {
                method: 'get',
                url: `http://localhost:8080/api/users/me`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            };

            await axios(config)
                .then(function (response) {
                    setUser(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData1 = async () => {
            var config = {
                method: 'get',
                url: 'http://localhost:8080/api/posts',
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            await axios(config)
                .then(function (response) {
                    setPosts(response.data.content);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        fetchData1();
    }, [user]);

    if (posts.length > 0) {
        userposts = posts?.filter((post) => {
            return post.createdBy === user.id;
        });
    }

    return (
        <div>
            {/* background */}
            <div className="relative h-full w-full">
                <div className="title font-[Babylonica] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_75%)] text-9xl text-white absolute top-1/3 -translate-y-1/2 left-1/3 -translate-x-1/2">
                    Travel in
                </div>
                <h1 className="title font-[Babylonica] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_75%)] text-9xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Việt Nam
                </h1>
                <img
                    src={blogBG}
                    className="max-w-[1240px] mx-auto rounded-full px-4 border-12"
                    alt="background"
                ></img>
            </div>

            <div className="max-w-[1240px] mx-auto pt-16 px-4 items-center">
                {/* bai viet cua toi */}
                {typeof localStorage.getItem('token') === 'string' && (
                    <div>
                        <h1 className="font-[Babylonica] pb-12 text-7xl text-center">
                            Bài viết của tôi
                        </h1>
                        <div className="grid grid-item grid-cols-3">
                            {userposts?.map((userpost, index) => (
                                <div
                                    className="card border-2 h-full hover:shadow-xl"
                                    key={index}
                                >
                                    {/* <a href={`/regions/${toSlug(name)}`}> */}
                                    <div
                                        className="intro h-72 relative"
                                        style={{
                                            backgroundImage: `url(http://localhost:8080/fileSystem/hagiang.jpg)`,
                                            backgroundSize: 'cover',
                                        }}
                                    >
                                        <Menu
                                            as="div"
                                            className="absolute right-0 w-fit"
                                        >
                                            <div>
                                                <Menu.Button className="border-none text-5xl flex content-center pr-8">
                                                    ...
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
                                                <Menu.Items className="absolute right-0 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                                                    Edit
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
                                                                    Delete
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>

                                    {/* </a> */}
                                    <div className="content m-8 mt-2 h-48 relative">
                                        <p className="text-gray-500">
                                            Created by {} 21/3/2023
                                        </p>
                                        <h1 className="post_title text-xl left-4 uppercase">
                                            {userpost.title}
                                        </h1>
                                        <p className="text-gray-500">
                                            {userpost.description}
                                        </p>
                                        <a
                                            href="/blogs/Du lịch Hà Giang"
                                            className="text-yellow-500 absolute bottom-0 font-bold"
                                        >
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a
                            href="/blogs/create"
                            className=" my-10 flex text-center"
                        >
                            Tạo bài viết
                        </a>
                    </div>
                )}
                {/* tat ca bai viet */}
                <div>
                    <h1 className="font-[Babylonica] pb-12 text-7xl text-center">
                        Các bài viết gần đây
                    </h1>
                    <div className="grid grid-item grid-cols-3">
                        {posts?.map((userpost, index) => (
                            <div
                                className="card border-2 h-full hover:shadow-xl"
                                key={index}
                            >
                                {/* <a href={`/regions/${toSlug(name)}`}> */}
                                <div
                                    className="intro h-72 relative"
                                    style={{
                                        backgroundImage: `url(http://localhost:8080/fileSystem/hagiang.jpg)`,
                                        backgroundSize: 'cover',
                                    }}
                                ></div>

                                {/* </a> */}
                                <div className="content m-8 mt-2 h-48 relative">
                                    <p className="text-gray-500">
                                        Created by {} 21/3/2023
                                    </p>
                                    <h1 className="post_title text-xl left-4 uppercase">
                                        {userpost.title}
                                    </h1>
                                    <p className="text-gray-500">
                                        {userpost.description}
                                    </p>
                                    <a
                                        href="/blogs/Du lịch Hà Giang"
                                        className="text-yellow-500 absolute bottom-0 font-bold"
                                    >
                                        Read more
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
