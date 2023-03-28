import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import blogBG from '~/assets/blogs.jpg';
import toSlug from '../toSlug';
import Popup from 'reactjs-popup';

function Blog() {
    const [user, setUser] = useState('');
    const [posts, setPosts] = useState([]);
    var userposts;

    const handleDelete = async (id) => {
        var config = {
            method: 'delete',
            url: `http://localhost:8080/api/posts/${id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        };

        await axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
        window.location.reload(false);
    };
    // lay thong tin user
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

    // lay thong tin cac post
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
                        {posts.length > 0 ? (
                            <>
                                <div className="grid grid-item grid-cols-3">
                                    {userposts?.map((userpost, index) => (
                                        <div
                                            className="card border-2 h-full hover:shadow-xl"
                                            key={index}
                                        >
                                            <div
                                                className="intro h-72 relative"
                                                style={{
                                                    backgroundImage: `url(http://localhost:8080/fileSystem/${toSlug(
                                                        userpost.title
                                                    )}.jpg)`,
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
                                                                    {({
                                                                        active,
                                                                    }) => (
                                                                        <a
                                                                            href="/profile"
                                                                            className={`${
                                                                                active
                                                                                    ? 'bg-yellow-400 text-white'
                                                                                    : 'text-gray-900'
                                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                        >
                                                                            Edit
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    <>
                                                                        <Popup
                                                                            trigger={
                                                                                <a className=" hover:bg-yellow-400 hover:text-white text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                                                                                    Delete
                                                                                </a>
                                                                            }
                                                                        >
                                                                            <h3>
                                                                                Want
                                                                                to
                                                                                delete?
                                                                            </h3>
                                                                            <br />
                                                                            <div className="flex space-x-10">
                                                                                <button
                                                                                    onClick={() =>
                                                                                        handleDelete(
                                                                                            userpost.id
                                                                                        )
                                                                                    }
                                                                                    className="p-0 h-6 w-16 text-black"
                                                                                >
                                                                                    Yes
                                                                                </button>
                                                                                <button className="p-0 h-6 w-16 text-black">
                                                                                    No
                                                                                </button>
                                                                            </div>
                                                                        </Popup>
                                                                    </>
                                                                </Menu.Item>
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </div>

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
                                                    href={`/blogs/${userpost.title}/${userpost.id}`}
                                                    className="text-yellow-500 absolute bottom-0 font-bold"
                                                >
                                                    Read more
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <h1 className='flex items-center justify-center font-[Babylonica] text-5xl'>
                                Bạn chưa có bài viết nào, chia sẻ điều gì đó bên
                                dưới!
                            </h1>
                        )}
                        <div className=" my-10 flex justify-center">
                            <a
                                href="/blogs/create"
                                className="flex justify-center items-center	rounded bg-yellow-400 w-32 h-8"
                            >
                                Tạo bài viết
                            </a>
                        </div>
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
                                <div
                                    className="intro h-72 relative"
                                    style={{
                                        backgroundImage: `url(http://localhost:8080/fileSystem/${toSlug(
                                            userpost.title
                                        )}.jpg)`,
                                        backgroundSize: 'cover',
                                    }}
                                ></div>

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
                                        href={`/blogs/${userpost.title}/${userpost.id}`}
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
