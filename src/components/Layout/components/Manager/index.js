import React, { useState, useEffect, useReducer } from 'react';
import Destinations from './destinations';
import Regions from './regions';
import Events from './event';
import Blogs from './blog';
import Users from './user'
function ManagerPage() {
    const [objectName, setObjectName] = useState('destinations');

    return (
        <div className="min-h-screen">
            <div>
                <div className="fixed bg-gray-300 rounded-md p-1 font-bold shadow-2xl m-5 w-48">
                    <ul className="max-w-md list-inside">
                        <li className="p-1">
                            <button
                                onClick={() => setObjectName('destinations')}
                                className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 rounded-md w-full"
                            >
                                Destinations
                            </button>
                        </li>
                        <li className="p-1">
                            <button
                                onClick={() => setObjectName('regions')}
                                className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 rounded-md w-full"
                            >
                                Regions
                            </button>
                        </li>
                        <li className="p-1">
                            <button
                                onClick={() => setObjectName('events')}
                                className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 rounded-md w-full"
                            >
                                Events
                            </button>
                        </li>
                        <li className="p-1">
                            <button
                                onClick={() => setObjectName('posts')}
                                className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 rounded-md w-full"
                            >
                                Blogs
                            </button>
                        </li>
                        <li className="p-1">
                            <button
                                onClick={() => setObjectName('users')}
                                className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 rounded-md w-full"
                            >
                                Users
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="max-w-[1240px] mx-auto items-center">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    {objectName === 'destinations' && <Destinations objectName={objectName} />}
                                    
                                    {objectName === 'regions' && <Regions objectName={objectName} />}
                                    {objectName === 'events' && <Events objectName={objectName} />}
                                    {objectName === 'posts' && <Blogs objectName={objectName} />}
                                    {objectName === 'users' && <Users objectName={objectName} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagerPage;
