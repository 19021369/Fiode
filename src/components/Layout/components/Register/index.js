import React, { useState } from 'react';
import axios from 'axios';
import { alert } from '@material-tailwind/react';

function RegistrationPage() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const Signup = async () => {
        if (password1 !== password2) {
            alert('Mat khau khong khop!');
        } else {
            var data = JSON.stringify({
                firstName: fname,
                lastName: lname,
                username: uname,
                password: password1,
                email: email,
            });
            var config = {
                method: 'post',
                url: 'localhost:8080/api/auth/signup',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: data,
            };
        }
        await axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
            <div>
                <a href="/">
                    <h3 className="text-4xl font-bold text-purple-700">
                        FIODE
                    </h3>
                </a>
            </div>
            <div className="w-full px-6 py-8 mt-6 overflow-hidden bg-white shadow-2xl sm:max-w-md sm:rounded-lg">
                <h1 className="text-3xl font-semibold text-center text-purple-700">
                    Sign up
                </h1>
                <form>
                    <div>
                        <label
                            htmlFor="fname"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            First name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                onChange={(e) => setFname(e.target.value)}
                                value={fname}
                                type="text"
                                name="fname"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="lname"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Last name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                onChange={(e) => setLname(e.target.value)}
                                value={lname}
                                type="text"
                                name="lname"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="uname"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Username
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                onChange={(e) => setUname(e.target.value)}
                                value={uname}
                                type="text"
                                name="uname"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Email
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                name="email"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Password
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                onChange={(e) => setPassword1(e.target.value)}
                                value={password1}
                                type="password"
                                name="password1"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="password_confirmation"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Confirm Password
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                onChange={(e) => setPassword2(e.target.value)}
                                value={password2}
                                type="password"
                                name="password_confirmation"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <a
                            className="text-sm text-gray-600 underline hover:text-gray-900"
                            href="/login"
                        >
                            Already registered?
                        </a>

                        <button
                            onClick={Signup}
                            // type="submit"
                            className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-purple-600 border border-transparent rounded-md active:bg-purple-900 false"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationPage;
