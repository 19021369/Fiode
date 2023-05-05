import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import toSlug from '../toSlug';

function Users({ objectName }) {
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState();
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [username, setUsername] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [createdAt, setCreatedAt] = useState()
    const [objects, setObjects] = useState([]);

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
    }, [objectName, reducerComment, reducerComment1, reducerdes]);

    const handleEdit = (object) => {
        setEdit(true);
        setId(object.id);
        setFirstName(object.firstName);
        setLastName(object.lastName);
        setUsername(object.username);
        setPhone(object.phone);
        setEmail(object.email);
    };

    const handleSave = async () => {
        let data = JSON.stringify({
            firstName: `${firstName}`,
            lastName: `${lastName}`,
            username: `${username}`,
            phone: `${phone}`,
            email: `${email}`,
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `http://localhost:8080/api/users/${username}`,
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
        setFirstName('');
        setLastName('');
        setUsername('');
        setPhone('');
        setEmail('');
        setEdit(false);
        forceUpdateComment();
    };

    const handleDelete = async (userName) => {
        var config = {
            method: 'delete',
            url: `http://localhost:8080/api/users/${userName}`,
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
            {objectName === 'users' && (
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
                                First Name
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Last Name
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Username
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Phone
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Email
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Create At
                            </th>
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
                                                    value={firstName}
                                                    onChange={(e) =>
                                                        setFirstName(e.target.value)
                                                    }
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    value={lastName}
                                                    onChange={(e) =>
                                                        setLastName(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    value={username}
                                                    onChange={(e) =>
                                                        setUsername(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    value={phone}
                                                    onChange={(e) =>
                                                        setPhone(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="text"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                
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
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {object.id}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.firstName}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.lastName}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.username}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.phone}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.email}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {object.createdAt}
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
                                                                object.username
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
            )}
        </div>
    );
}

export default Users;
