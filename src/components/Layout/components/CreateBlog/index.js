import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';
import blogBG from '~/assets/blogs.jpg';
import '~/index.css';
import axios from 'axios';

function CreateBlog() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [noti, setNoti] = useState('');

    const handlePost = async () => {
        let data = JSON.stringify({
            title: `${title}`,
            body: `${text}`,
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/api/posts',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            data: data,
        };

        console.log(localStorage.getItem('token'));
        await axios(config)
            .then(function (response) {
                setNoti(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    console.log(text);
    return (
        <div>
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
            <div className="pt-20 grid grid-item grid-cols-2 gap-10 mx-10">
                <div>
                    <h2 className="flex items-center">Tạo bài viết</h2>
                    <h3 className="pt-10">Title</h3>
                    <input
                        className="titleblogs w-full h-8 text-xl"
                        value={title}
                        type="text"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    ></input>

                    <h3 className="pt-10">Content</h3>
                    <ReactQuill
                        component={'div'}
                        id="editor"
                        modules={CreateBlog.modules}
                        formats={CreateBlog.formats}
                        value={text}
                        onChange={(e) => {
                            setText(e);
                        }}
                    />
                </div>

                <div>
                    <h2>{title}</h2>
                    <h3 className="pt-10">Title</h3>
                    <p className="pt-6">{parse(text)}</p>
                </div>
            </div>
            <button className="m-10" onClick={handlePost}>
                Submit
            </button>
        </div>
    );
}

export default CreateBlog;

CreateBlog.modules = {
    toolbar: [
        [
            { header: '1' },
            { header: '2' },
            { header: [3, 4, 5, 6] },
            { font: [] },
        ],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block'],
    ],
};

CreateBlog.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block',
];
