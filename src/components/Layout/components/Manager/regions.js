import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import toSlug from '../toSlug';

function Regions({ objectName }) {
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState();
    const [side, setSide] = useState();
    const [description, setDescription] = useState();
    const [todo, setToDo] = useState();
    const [transportation, setTransportation] = useState();
    const [weather, setWeather] = useState();
    const [objects, setObjects] = useState([]);
    const [reducerComment, forceUpdateComment] = useReducer((x) => x + 1, 0);
    const [files, setFile] = useState([]);
    const [count, forceCount] = useReducer((x) => x + 1, 1);
    const [reducerdes, forceUpdate] = useReducer((x) => x + 1, 0);

    const [name1, setName1] = useState();
    const [side1, setSide1] = useState();
    const [description1, setDescription1] = useState();
    const [todo1, setToDo1] = useState();
    const [transportation1, setTransportation1] = useState();
    const [weather1, setWeather1] = useState();
    const [reducerComment1, forceUpdateComment1] = useReducer((x) => x + 1, 0);
    const [files1, setFile1] = useState([]);

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
    console.log(objects);
    const handleEdit = (object) => {
        setEdit(true);
        setId(object.id);
        setName(object.name);
        setSide(object.side);
        setDescription(object.description);
        setToDo(object.toDo);
        setTransportation(object.transportation);
        setWeather(object.weather);
    };

    const handleSave = async () => {
        let data = JSON.stringify({
            name: `${name}`,
            side: `${side}`,
            description: `${description}`,
            todo: `${todo}`,
            transportation: `${transportation}`,
            weather: `${weather}`,
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `http://localhost:8080/api/regions/${id}`,
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
        setSide('');
        setDescription('');
        setToDo('')
        setTransportation('');
        setWeather('');
        setEdit(false);
        forceUpdateComment();
    };

    const handleSaveNew = async () => {
        const obj = {
            name: `${name1}`,
            side: `${side1}`,
            description: `${description1}`,
            todo: `${todo1}`,
            transportation: `${transportation1}`,
            weather: `${weather1}`,
        };

        const json = JSON.stringify(obj);
        const blob = new Blob([json], {
            type: 'application/json',
        });
        const data = new FormData();
        data.append('region', blob);
        data.append('image', files1);
        console.log(data);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `http://localhost:8080/api/regions`,
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

        setName1('');
        setSide1('');
        setDescription1('');
        setToDo1('');
        setTransportation1('');
        setWeather1('');
        forceUpdateComment1();
    };

    var handleFile1 = (e) => {
        var newFile = new File([e.target.files[0]], `${toSlug(name1)}.jpg`);
        setFile1(newFile);
        forceCount();
    };
    var handleFile = (e) => {
        var newFile = new File([e.target.files[0]], `${toSlug(name)}.jpg`);
        setFile(newFile);
        forceCount();
    };

    const handleDelete = async (id) => {var config = {
        method: 'delete',
        url: `http://localhost:8080/api/regions/${id}`,
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
            {objectName === 'regions' && (
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
                                Side
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Description
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                To do
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Transportation
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Weather
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left w-96"
                            >
                                Image File
                            </th>
                        </tr>
                        {/* them region */}
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
                                    value={side1}
                                    onChange={(e) => setSide1(e.target.value)}
                                ></input>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <textarea
                                    className="block w-full"
                                    value={description1}
                                    onChange={(e) =>
                                        setDescription1(e.target.value)
                                    }
                                ></textarea>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <textarea
                                    className="block w-full"
                                    value={todo1}
                                    onChange={(e) =>
                                        setToDo1(e.target.value)
                                    }
                                ></textarea>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <textarea
                                    className="block w-full"
                                    value={transportation1}
                                    onChange={(e) =>
                                        setTransportation1(e.target.value)
                                    }
                                ></textarea>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <textarea
                                    className="block w-full"
                                    value={weather1}
                                    onChange={(e) =>
                                        setWeather1(e.target.value)
                                    }
                                ></textarea>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <input
                                    type="file"
                                    className="block w-full"
                                    onChange={(e) => {
                                        handleFile1(e);
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
                                                    value={side}
                                                    onChange={(e) =>
                                                        setSide(e.target.value)
                                                    }
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <textarea
                                                    className="block w-full"
                                                    value={description}
                                                    onChange={(e) =>
                                                        setDescription(
                                                            e.target.value
                                                        )
                                                    }
                                                ></textarea>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <textarea
                                                    className="block w-full"
                                                    value={todo}
                                                    onChange={(e) =>
                                                        setToDo(
                                                            e.target.value
                                                        )
                                                    }
                                                ></textarea>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <textarea
                                                    className="block w-full"
                                                    value={transportation}
                                                    onChange={(e) =>
                                                        setTransportation(
                                                            e.target.value
                                                        )
                                                    }
                                                ></textarea>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <textarea
                                                    className="block w-full"
                                                    value={weather}
                                                    onChange={(e) =>
                                                        setWeather(
                                                            e.target.value
                                                        )
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
                                                {object.side}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.description}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap min-w-[200px]">
                                                {object.todo}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.transportation}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.weather}
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

export default Regions;
