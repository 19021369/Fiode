import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

function Blogs({ objectName }) {
    console.log(objectName);
    const [objects, setObjects] = useState([]);

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
                    console.log(response.data.content?.length);
                    setObjects(response.data.content);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        fetchData();
    }, [objectName]);
    const handleDelete = () => {};
    var reversedObjects = objects?.map(item => item)?.reverse();

    return (
        <div>
            {objectName === 'posts' && (
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
                                Title
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
                                Create By
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Create At
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Update At
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Image file
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {reversedObjects?.length !== null && reversedObjects?.map((object) => (
                        <tr className="bg-gray-100 border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {object.id}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {object.title}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {object.body}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {object.createdBy}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {object.createdAt}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {object.updatedAt}
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
                                        onClick={() => handleDelete(object.id)}
                                        className="text-black hover:underline active:font-bold"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Blogs;
