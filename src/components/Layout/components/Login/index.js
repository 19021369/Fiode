import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function LoginPage() {
    const [usernameOrEmail, setUseroremail] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();
    const login = async () => {
        var data = JSON.stringify({
            usernameOrEmail: `${usernameOrEmail}`,
            password: `${password}`,
        });
        var config = {
            method: 'post',
            url: 'http://localhost:8080/api/auth/signin',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        await axios(config)
            .then(function (response) {
                localStorage.setItem('token', response.data.accessToken);
                localStorage.setItem('authenticated', true);
            })
            .catch(function (error) {
                console.log(error);
            });
        if (localStorage.getItem('authenticated') === 'true') {
            console.log('chuyen trang home')
            Navigate('/');
        } else {
            console.log('chuyen trang dang nhap');
        }
    }



    return (
        <div className='flex flex-col relative items-center pt-6 sm:justify-center h-screen overflow-hidden'>
            <div>
                <a href='/'>
                    <h3 className='text-4xl font-bold text-purple-700'>
                        FIODE
                    </h3>
                </a>
            </div>
            <div className='w-full px-6 py-8 mt-6 overflow-hidden bg-white shadow-2xl sm:max-w-md sm:rounded-lg'>
                <h1 className='text-3xl font-semibold text-center text-purple-700'>
                    Sign in
                </h1>
                <form className='mt-6'>
                    <div className='mb-2'>
                        <label
                            htmlFor='email'
                            className='block text-sm font-semibold text-gray-800'
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => setUseroremail(e.target.value)}
                            value={usernameOrEmail}
                            type='text'
                            className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                        />
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='password'
                            className='block text-sm font-semibold text-gray-800'
                        >
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type='password'
                            className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                        />
                    </div>
                    <a
                        href='/'
                        className='text-xs text-purple-600 hover:underline'
                    >
                        Forget Password?
                    </a>
                    <div className='mt-6'>
                        <div
                            onClick={login}
                            className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600'
                        >
                            Login
                        </div>
                    </div>
                </form>

                <p className='mt-8 text-xs font-light text-center text-gray-700'>
                    {' '}
                    Don't have an account?{' '}
                    <a
                        href='/Register'
                        className='font-medium text-purple-600 hover:underline'
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
