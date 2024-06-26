import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import toSlug from '../toSlug';
function Destinations({ objectName }) {
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [location, setLocation] = useState();
    const [introduce, setIntroduce] = useState();
    const [content, setContent] = useState();
    const [deslat, setDeslat] = useState();
    const [deslong, setDeslong] = useState();
    const [objects, setObjects] = useState([]);
    const [count, forceCount] = useReducer((x) => x + 1, 1);
    const [count1, forceCount1] = useReducer((x) => x + 1, 1);
    const [name1, setName1] = useState();
    const [location1, setLocation1] = useState();
    const [introduce1, setIntroduce1] = useState();
    const [content1, setContent1] = useState();
    const [deslat1, setDeslat1] = useState();
    const [deslong1, setDeslong1] = useState();
    const [files1, setFiles1] = useState([]);
    const [files2, setFiles2] = useState([]);
    const [files3, setFiles3] = useState([]);
    const [files4, setFiles4] = useState([]);
    const [files01, setFiles01] = useState([]);
    const [files02, setFiles02] = useState([]);
    const [files03, setFiles03] = useState([]);
    const [files04, setFiles04] = useState([]);
    const [reducerComment, forceUpdateComment] = useReducer((x) => x + 1, 0);
    const [reducerComment1, forceUpdateComment1] = useReducer((x) => x + 1, 0);
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
    }, [objectName, reducerComment, reducerComment1, reducerdes, forceCount1]);

    const handleEdit = (object) => {
        setEdit(true);
        setId(object.id);
        setName(object.name);
        setLocation(object.location);
        setIntroduce(object.introduce);
        setContent(object.content);
        setDeslat(object.deslat);
        setDeslong(object.deslong);
    };

    var handleFile = (e) => {
        var newFile1 = new File([e.target.files[0]], `${toSlug(name)}1.jpg`);
        setFiles01(newFile1);
        var newFile2 = new File([e.target.files[1]], `${toSlug(name)}2.jpg`);
        setFiles02(newFile2);
        var newFile3 = new File([e.target.files[2]], `${toSlug(name)}3.jpg`);
        setFiles03(newFile3);
        var newFile4 = new File([e.target.files[3]], `${toSlug(name)}4.jpg`);
        setFiles04(newFile4);
        forceCount1();
    };
console.log("Khi doi ten thi buoc phải them file");
    const handleSave = async () => {
        const obj = {
            name: `${name}`,
            location: `${location}`,
            introduce: `${introduce}`,
            content: `${content}`,
            deslat: `${deslat}`,
            deslong: `${deslong}`,
        };

        const json = JSON.stringify(obj);
        const blob = new Blob([json], {
            type: 'application/json',
        });
        const data = new FormData();
        data.append('destination', blob);
        console.log(files01);
        if(files01 !== undefined) {
            data.append('image', files01);
            data.append('image', files02);
            data.append('image', files03);
            data.append('image', files04);
        }
        
        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `http://localhost:8080/api/destinations/${id}`,
            headers: {
                'Content-type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            data: data,
        };

        await axios(config)
            .then(function (response) {
                console.log(response.data.status);
            })
            .catch(function (error) {
                console.log(error);
            });

        setId();
        setName();
        setLocation();
        setIntroduce();
        setContent();
        setDeslat();
        setDeslong();
        setFiles01();
        setFiles02();
        setFiles03();
        setFiles04();
        setEdit(false);
        forceUpdateComment();
    };

    const handleSaveNew = async () => {
        const obj = {
            name: `${name1}`,
            location: `${location1}`,
            introduce: `${introduce1}`,
            content: `${content1}`,
            deslat: `${deslat1}`,
            deslong: `${deslong1}`,
        };

        const json = JSON.stringify(obj);
        const blob = new Blob([json], {
            type: 'application/json',
        });
        const data = new FormData();
        data.append('destination', blob);
        data.append('image', files1);
        data.append('image', files2);
        data.append('image', files3);
        data.append('image', files4);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `http://localhost:8080/api/destinations`,
            headers: {
                'Content-type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            data: data,
        };

        await axios(config)
            .then(function (response) {
                if (response.status === 201) {
                    setName1('');
                    setLocation1('');
                    setIntroduce1('');
                    setContent1('');
                    setDeslat1('');
                    setDeslong1('');
                    setFiles1();
                    setFiles2();
                    setFiles3();
                    setFiles4();
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        forceUpdateComment1();
    };
    // newfile
    var handleFile1 = (e) => {
        var newFile1 = new File([e.target.files[0]], `${toSlug(name1)}1.jpg`);
        setFiles1(newFile1);
        var newFile2 = new File([e.target.files[1]], `${toSlug(name1)}2.jpg`);
        setFiles2(newFile2);
        var newFile3 = new File([e.target.files[2]], `${toSlug(name1)}3.jpg`);
        setFiles3(newFile3);
        var newFile4 = new File([e.target.files[3]], `${toSlug(name1)}4.jpg`);
        setFiles4(newFile4);
        forceCount();
    };

    const handleDelete = async (id) => {
        var config = {
            method: 'delete',
            url: `http://localhost:8080/api/destinations/${id}`,
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
        forceUpdate();
    };

    var reversedObjects = objects?.map(item => item)?.reverse();
    return (
        <div>
            {objectName === 'destinations' && (
            <>
                <table>
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
                                Location
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Introduce
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Content
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Deslat
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Deslong
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left w-96"
                            >
                                Image File
                            </th>
                        </tr>
                        {/* them object */}
                        <tr className="bg-gray-100 border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <input
                                    className="block max-w-[160px]"
                                    type="text"
                                    value={name1}
                                    onChange={(e) => setName1(e.target.value)}
                                ></input>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <input
                                    className="block max-w-[160px]"
                                    type="text"
                                    value={location1}
                                    onChange={(e) =>
                                        setLocation1(e.target.value)
                                    }
                                ></input>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <input
                                    className="block max-w-[160px]"
                                    type="text"
                                    value={introduce1}
                                    onChange={(e) =>
                                        setIntroduce1(e.target.value)
                                    }
                                ></input>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <textarea
                                    className="block max-w-[160px]"
                                    value={content1}
                                    onChange={(e) =>
                                        setContent1(e.target.value)
                                    }
                                ></textarea>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <input
                                    className="block max-w-[80px]"
                                    type="text"
                                    value={deslat1}
                                    onChange={(e) => setDeslat1(e.target.value)}
                                ></input>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <input
                                    className="block max-w-[80px]"
                                    type="text"
                                    value={deslong1}
                                    onChange={(e) =>
                                        setDeslong1(e.target.value)
                                    }
                                ></input>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <input
                                    multiple="multiple"
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
                        {reversedObjects.length !== 0 &&
                            reversedObjects?.map((object) => (
                                <>
                                    {edit && object.id === id ? (
                                        <tr
                                            key={object.id}
                                            className="bg-gray-100 border-b"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
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
                                                    value={location}
                                                    onChange={(e) =>
                                                        setLocation(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    value={introduce}
                                                    onChange={(e) =>
                                                        setIntroduce(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <textarea
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
                                                    type="text"
                                                    value={deslat}
                                                    onChange={(e) =>
                                                        setDeslat(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    value={deslong}
                                                    onChange={(e) =>
                                                        setDeslong(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <input
                                                multiple="multiple"
                                                onChange={e => handleFile(e)}
                                                    type="file"
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
                                        <tr
                                            key={object.id}
                                            className="bg-gray-100 border-b"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 max-w-[160px] truncate">
                                                {object.id}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-[160px] truncate">
                                                {object.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-[160px] truncate">
                                                {object.location}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-[160px] truncate">
                                                {object.introduce}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-[160px] truncate">
                                                {object.content}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-[80px] truncate">
                                                {object.deslat}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-[80px] truncate">
                                                {object.deslong}
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
                                                            handleDelete(
                                                                object.id
                                                            )
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
            </>
            )}
        </div>
    );
}

export default Destinations;
