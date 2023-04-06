import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import toSlug from '../toSlug';

function Events({ objectName }) {
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState();
    const [timeStart, setTimeStart] = useState();
    const [timeEnd, setTimeEnd] = useState();
    const [month, setMonth] = useState();
    const [content, setContent] = useState();
    const [objects, setObjects] = useState([]);
    const [reducerComment, forceUpdateComment] = useReducer((x) => x + 1, 0);

    const [name1, setName1] = useState();
    const [timeStart1, setTimeStart1] = useState();
    const [timeEnd1, setTimeEnd1] = useState();
    const [month1, setMonth1] = useState();
    const [content1, setContent1] = useState();
    const [reducerComment1, forceUpdateComment1] = useReducer((x) => x + 1, 0);
    const [files, setFiles] = useState([]);
    const [reducerdes, forceUpdate] = useReducer((x) => x + 1, 0);

    useEffect(() => {
        const fetchData = async () => {
            var config = {
                method: 'get',
                url: `http://localhost:8080/api/${objectName}`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            };

            await axios(config)
                .then(function (response) {
                    setObjects(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        fetchData();
    }, [objectName, reducerComment, reducerComment1, reducerdes]);

    const handleEdit = (object) => {
        setEdit(true);
        setId(object.id);
        setName(object.name);
        setTimeStart(object.timestart);
        setTimeEnd(object.timend);
        setMonth(object.month);
        setContent(object.content);
    };

    const handleSave = async () => {
        let data = JSON.stringify({
            name: `${name}`,
            timestart: `${timeStart}`,
            timeend: `${timeEnd}`,
            month: `${month}`,
            content: `${content}`,
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `http://localhost:8080/api/events/${id}`,
            headers: {
                'Content-type': 'application/json',
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
        setId('');
        setName('');
        setEdit(false);
        forceUpdateComment();
    };

    const handleSaveNew = async () => {
        const obj = {
            name: `${name1}`,
            timestart: `${timeStart1}`,
            timeend: `${timeEnd1}`,
            month: `${month1}`,
            content: `${content1}`,
        };

        const json = JSON.stringify(obj);
        const blob = new Blob([json], {
            type: 'application/json',
        });
        const data = new FormData();
        data.append('event', blob);
        data.append('image', files);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `http://localhost:8080/api/events`,
            headers: {
                'Content-type': 'multipart/form-data',
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

        // setName1('');
        // setSide1('');
        // setDescription1('');
        // setTransportation1('');
        // setWeather1('');
        forceUpdateComment1();
    };

    var handleFile = (e) => {
        var newFile = new File([e.target.value[0]], `${toSlug(name)}.jpg`);
        setFiles([...files, newFile]);
    };

    const handleDelete = async (id) => {var config = {
        method: 'delete',
        url: `http://localhost:8080/api/events/${id}`,
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
    forceUpdate();};
    return (
        <div>
            {objectName === 'events' && (
                <table className="min-w-full">
                    <thead className="bg-white border-b">
                        <tr>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Id
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Time Start
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Time End
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Month
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Content
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left w-96"
                            >
                                Image File
                            </th>
                        </tr>

                        {/* them event */}
                        <tr className="bg-gray-100 border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <input
                                    type="text"
                                    value={name1}
                                    onChange={(e) => setName1(e.target.value)}
                                ></input>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <input
                                    type="text"
                                    value={timeStart1}
                                    onChange={(e) =>
                                        setTimeStart1(e.target.value)
                                    }
                                ></input>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <textarea
                                    className="block w-full"
                                    value={timeEnd1}
                                    onChange={(e) =>
                                        setTimeEnd1(e.target.value)
                                    }
                                ></textarea>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <textarea
                                    className="block w-full"
                                    value={month1}
                                    onChange={(e) => setMonth1(e.target.value)}
                                ></textarea>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <textarea
                                    className="block w-full"
                                    value={content1}
                                    onChange={(e) =>
                                        setContent1(e.target.value)
                                    }
                                ></textarea>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <input
                                    type="file"
                                    className="block w-full"
                                    onChange={(e) => {
                                        handleFile(e);
                                    }}
                                ></input>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <div>
                                    <button
                                        onClick={handleSaveNew}
                                        className="text-black hover:underline active:font-bold"
                                    >
                                        save
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {objects.length !== 0 &&
                            objects?.map((object) => (
                                <>
                                    {edit && object.id === id ? (
                                        <tr className="bg-gray-100 border-b">
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.id}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    value={timeStart}
                                                    onChange={(e) =>
                                                        setTimeStart(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    className="block w-full"
                                                    value={timeEnd}
                                                    onChange={(e) =>
                                                        setTimeEnd(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <textarea
                                                    className="block w-full"
                                                    value={month}
                                                    onChange={(e) =>
                                                        setMonth(e.target.value)
                                                    }
                                                ></textarea>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <textarea
                                                    className="block w-full"
                                                    value={content}
                                                    onChange={(e) =>
                                                        setContent(
                                                            e.target.value
                                                        )
                                                    }
                                                ></textarea>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="file"
                                                    className="block w-full"
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div>
                                                    <button
                                                        onClick={handleSave}
                                                        className="text-black hover:underline active:font-bold"
                                                    >
                                                        save
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        <tr className="bg-gray-100 border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {object.id}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.timeStart}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.timeEnd}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.month}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.content}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="file"
                                                    className="block w-full min-w-[200px]"
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div>
                                                    <button
                                                        onClick={() =>
                                                            handleEdit(object)
                                                        }
                                                        className="text-black hover:underline active:font-bold"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(object.id)
                                                        }
                                                        className="text-black hover:underline active:font-bold"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </>
                            ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Events;
