import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toSlug from '../toSlug';
import axios from 'axios';
import parse from 'html-react-parser';

function BlogPage() {
    const { blogName } = useParams('');
    const { id } = useParams('');
    const [post, setPost] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    useEffect(() => {
        // get post
        const fetchData = async () => {
            var config = {
                method: 'get',
                url: `http://localhost:8080/api/posts?id=${id}`,
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            await axios(config)
                .then(function (response) {
                    setPost(response.data.content);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        fetchData();
    }, [blogName]);

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

            await axios(config)
                .then(function (response) {
                    setComments(response.data.content);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        fetchData1();
    },[comment])


    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
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
        }
    };

    return (
        <div className="w-full">
            <img
                src={`http://localhost:8080/fileSystem/${toSlug(blogName)}.jpg`}
                className="w-full object-cover h-screen"
                alt="anhnen"
            ></img>
            <div className="max-w-[1240px] mx-auto items-center">
                <div className="shadow-lg p-16 px-4 rounded-xl">
                    <h1>{blogName}</h1>
                    {post[0]?.body && <div>{parse(post[0]?.body)}</div>}
                </div>
                {/* comment input */}
                <div className=" text-black dark:text-gray-200 px-4 pt-4 antialiased flex">
                    <img
                        className="rounded-full h-8 w-8 mr-2 mt-1 "
                        src="https://picsum.photos/id/1027/200/200"
                    />
                    <div className="w-full">
                        <div className="text-gray-900 shadow-2xl rounded-3xl px-4 pt-2 pb-2 w-full">
                            <input
                                name="comment"
                                value={comment}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                type="text"
                                className="text-normal leading-snug md:leading-normal rounded-md w-full border-none"
                            />
                        </div>
                        <div className="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">
                            14 w
                        </div>
                    </div>
                </div>

                {/* comment */}
                {comments.length > 0 &&
                    comments?.map((cmt,index) => (
                        <div key={index} className=" text-black dark:text-gray-200 px-4 antialiased flex">
                            <img
                                className="rounded-full h-8 w-8 mr-2 mt-1 "
                                src="https://picsum.photos/id/1027/200/200"
                            />
                            <div>
                                <div className="text-gray-900 shadow-2xl rounded-3xl px-4 pt-2 pb-2.5">
                                    <div className="font-semibold text-sm leading-relaxed">
                                        {cmt.name}
                                    </div>
                                    <div className="text-normal leading-snug md:leading-normal">
                                        {cmt.body}
                                    </div>
                                </div>
                                <div className="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">
                                    14 w
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default BlogPage;
