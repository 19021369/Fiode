import React, { useReducer } from 'react';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toSlug from '../toSlug';
import axios from 'axios';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Menu, Transition } from '@headlessui/react';

function BlogPage() {
    const { blogName } = useParams('');
    const { id } = useParams('');
    const [post, setPost] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [edit, setEdit] = useState(false);
    const [editCmt, setEditCmt] = useState('');
    const [editId, setEditId] = useState('');
    const [reducerDelComment, forceUpdateDelComment] = useReducer(
        (x) => x + 1,
        0
    );
    const [reducerComment, forceUpdateComment] = useReducer((x) => x + 1, 0);
    const [reducerEditComment, forceUpdateEditComment] = useReducer(
        (x) => x + 1,
        0
    );
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        // get post
        const fetchData = async () => {
            var config = {
                method: 'get',
                url: `http://localhost:8080/api/posts/${id}`,
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            await axios(config)
                .then(function (response) {
                    setPost(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        fetchData();
    }, [blogName, id]);

    useEffect(() => {
        // get comments
        const fetchData1 = async () => {
            var config = {
                method: 'get',
                url: `http://localhost:8080/api/posts/${id}/comments`,
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            axios(config)
                .then(function (response) {
                    setComments(response.data.content);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        fetchData1();
    }, [reducerDelComment, reducerComment, reducerEditComment]);

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    //handle save cmt
    const handleKeyDown = async (event) => {
        if (
            event.key === 'Enter' &&
            localStorage.getItem('authenticated') === 'true'
        ) {
            let data = JSON.stringify({
                body: `${comment}`,
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `http://localhost:8080/api/posts/${id}/comments`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                data: data,
            };

            await axios(config)
                .then(function (response) {
                    setComments(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
            setComment('');
            forceUpdateComment();
        }

        if (
            event.key === 'Enter' &&
            localStorage.getItem('authenticated') === 'false'
        ) {
            setShowModal(true);
        }
    };

    const handleDelete = async (cmtId) => {
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `http://localhost:8080/api/posts/${id}/comments/${cmtId}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        };

        await axios(config)
            .then(function (response) {
                console.log(response.data);
                // window.location.reload(false);
                let updateComments = comments;
                const index = updateComments.findIndex(
                    (obj) => obj.id === cmtId
                );
                updateComments.splice(index, 1);
                setComments(updateComments);
            })
            .catch(function (error) {
                console.log(error);
            });
        forceUpdateDelComment();
    };

    const handleEdit = async (cmt) => {
        setEdit(true);
        setEditCmt(cmt.body);
        setEditId(cmt.id);
    };

    const handleSaveEdit = async () => {
        console.log(editCmt);
        let data = JSON.stringify({
            body: `${editCmt}`,
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `http://localhost:8080/api/posts/${id}/comments/${editId}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            data: data,
        };

        await axios(config)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        setEdit(false);
        setEditId('');
        setEditCmt('');
        forceUpdateEditComment();
    };

    return (
        <div className='w-full'>
            {showModal ? (
                <>
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                            {/*content*/}
                            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                                {/*header*/}
                                <div className='flex items-start justify-between border-b border-solid border-slate-200 rounded-t'>
                                    <button
                                        className='ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className='h-8 w-8 text-3xl block outline-none focus:outline-none hover:shadow-xl'>
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className='relative p-6 item-center'>
                                    <div className='text-2xl font-semibold'>
                                        You must be logged in to comment…!
                                    </div>

                                    <a
                                        className='text-2xl hover:text-blue-600 font-semibold'
                                        href='/login'
                                    >
                                        Go to log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                </>
            ) : null}
            <img
                src={`http://localhost:8080/fileSystem/${toSlug(blogName)}.jpg`}
                className='w-full object-cover h-screen'
                alt='anhnen'
            ></img>
            <div className='max-w-[1240px] mx-auto items-center'>
                <div className='shadow-lg p-16 px-4 rounded-xl'>
                    <h1>{blogName}</h1>
                    {post?.body && <div>{parse(post?.body)}</div>}
                </div>
                {/* comment input */}
                <div className=' text-black dark:text-gray-200 px-4 pt-4 antialiased flex'>
                    {localStorage.getItem('authenticated') === 'true' && (
                        <img
                            className='rounded-full h-8 w-8 mr-2 mt-1 '
                            src={`http://localhost:8080/fileSystem/avatar${
                                JSON.parse(localStorage.getItem('user'))?.id
                            }.jpg`}
                        />
                    )}
                    <div className='w-full'>
                        <div className='text-gray-900 shadow-2xl rounded-3xl px-4 pt-2 pb-2 w-full'>
                            <input
                                name='comment'
                                value={comment}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                type='text'
                                className='text-normal leading-snug md:leading-normal rounded-md w-full border-none'
                            />
                        </div>
                        <div className='text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400'>
                            14 w
                        </div>
                    </div>
                </div>

                {/* comment */}
                {comments.length > 0 &&
                    comments?.map((cmt) => (
                        <div
                            key={cmt.id}
                            className=' text-black dark:text-gray-200 px-4 antialiased flex'
                        >
                            <img
                                alt='avatar'
                                className='rounded-full h-8 w-8 mr-2 mt-1 '
                                src={`http://localhost:8080/fileSystem/avatar${cmt.createdBy}.jpg`}
                            />
                            <div>
                                <div className='text-gray-900 shadow-2xl rounded-3xl px-4 pt-2 pb-2.5 w-fit'>
                                    <div className='font-semibold text-sm leading-relaxed'>
                                        {cmt.name}
                                    </div>
                                    {edit && editId === cmt.id ? (
                                        <textarea
                                            className='text-normal w-[1136px]'
                                            value={editCmt}
                                            onChange={(e) => {
                                                setEditCmt(e.target.value);
                                            }}
                                        ></textarea>
                                    ) : (
                                        <div className='text-normal leading-snug break-all'>
                                            {cmt.body}
                                        </div>
                                    )}
                                </div>
                                <div className='text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400'>
                                    14 w
                                </div>
                            </div>
                            <div className='relative w-14'>
                                {edit && editId === cmt.id ? (
                                    <button
                                        onClick={() => handleSaveEdit()}
                                        className='bg-gray-400 active:text-white flex w-full items-center justify-center rounded-md ml-4'
                                    >
                                        Save
                                    </button>
                                ) : (
                                    (JSON.parse(localStorage.getItem('user'))
                                        .id === cmt.createdBy ||
                                        JSON.parse(localStorage.getItem('user'))
                                            .id === post.createdBy) && (
                                        <Menu as='div'>
                                            <div>
                                                <Menu.Button className='text-gray-900 border-none p-0 absolute left-4 top-4'>
                                                    <FontAwesomeIcon
                                                        icon={faEllipsis}
                                                        size='2xl'
                                                        className='text-gray-900'
                                                    />
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter='transition ease-out duration-100'
                                                enterFrom='transform opacity-0 scale-95'
                                                enterTo='transform opacity-100 scale-100'
                                                leave='transition ease-in duration-75'
                                                leaveFrom='transform opacity-100 scale-100'
                                                leaveTo='transform opacity-0 scale-95'
                                            >
                                                <Menu.Items className='absolute left-16 divide-y divide-gray-100 rounded-xl bg-white shadow-2xl ring-opacity-5 focus:outline-none'>
                                                    <div className='px-1 py-1 '>
                                                        {JSON.parse(
                                                            localStorage.getItem(
                                                                'user'
                                                            )
                                                        ).id ===
                                                            cmt.createdBy && (
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <button
                                                                        onClick={() =>
                                                                            handleEdit(
                                                                                cmt
                                                                            )
                                                                        }
                                                                        className={`${
                                                                            active
                                                                                ? 'bg-gray-400 text-white'
                                                                                : 'text-gray-900'
                                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    >
                                                                        Edit
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        )}
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <button
                                                                    onClick={() =>
                                                                        handleDelete(
                                                                            cmt.id
                                                                        )
                                                                    }
                                                                    className={`${
                                                                        active
                                                                            ? 'bg-gray-400 text-white'
                                                                            : 'text-gray-900'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                >
                                                                    Delete
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default BlogPage;
