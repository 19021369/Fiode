import { Avatar, Typography, Button } from '@material-tailwind/react';
import bgprofile from '~/assets/background-1.jpg';
import avatar from '~/assets/team-2.jpg';
import axios from 'axios';
import {
    MapPinIcon,
    BriefcaseIcon,
    BuildingLibraryIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';
function ProfilePage() {
    return (
        <>
            <section className="relative block h-[50vh]">
                <div
                    style={{ backgroundImage: `url(${bgprofile})` }}
                    className="bg-profile-background absolute top-0 h-full w-full bg-cover bg-center"
                />
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
            </section>

            <section className="relative bg-blue-gray-50/50 py-16 px-4">
                <div className="container mx-auto">
                    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                
                                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                                    <div className="relative">
                                        <div className="-mt-20 w-40">
                                            <Avatar
                                                src={avatar}
                                                alt="Profile picture"
                                                variant="circular"
                                                className="h-full w-full shadow-xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-4 lg:order-3 lg:w-4/12">
                                    <div className="flex justify-center py-4 pt-8 lg:pt-4">
                                        <div className="p-3 text-center lg:mr-4">
                                            <Typography
                                                variant="lead"
                                                color="blue-gray"
                                                className="font-bold uppercase"
                                            >
                                                89
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                className="font-normal text-blue-gray-500"
                                            >
                                                Posts
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                                    <div className="flex justify-center py-4 pt-8 lg:pt-4">
                                        <div className="p-3 text-center lg:mr-4">
                                            <Typography
                                                variant="lead"
                                                color="blue-gray"
                                                className="font-bold uppercase"
                                            >
                                                89
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                className="font-normal text-blue-gray-500"
                                            >
                                                Comments
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-8 text-center">
                                <Typography
                                    variant="h2"
                                    color="blue-gray"
                                    className="mb-2"
                                >
                                    {
                                        JSON.parse(localStorage.getItem('user'))
                                            .firstName
                                    }{' '}
                                    {
                                        JSON.parse(localStorage.getItem('user'))
                                            .lastName
                                    }{' '}
                                    <span className='text-2xl'>
                                        (
                                        {
                                            JSON.parse(
                                                localStorage.getItem('user')
                                            ).username
                                        }
                                        )
                                    </span>
                                </Typography>
                                
                                {/* <div className="mb-2 flex items-center justify-center gap-2">
                                    <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                                    <Typography className="font-medium text-blue-gray-700">
                                        Solution Manager - Creative Tim Officer
                                    </Typography>
                                </div>
                                <div className="mb-2 flex items-center justify-center gap-2">
                                    <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                                    <Typography className="font-medium text-blue-gray-700">
                                        University of Computer Science
                                    </Typography>
                                </div> */}
                            </div>

                            <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                                <div className="mt-2 flex flex-wrap justify-center">
                                    <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                                        <Typography className="mb-8 font-normal text-blue-gray-500">
                                            An artist of considerable range,
                                            Jenna the name taken by
                                            Melbourne-raised, Brooklyn-based
                                            Nick Murphy writes, performs and
                                            records all of his own music, giving
                                            it a warm, intimate feel with a
                                            solid groove structure. An artist of
                                            considerable range.
                                        </Typography>
                                        <Button className=" bg-gray-400">
                                        Edit profile
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-blue-gray-50/50"></div>
        </>
    );
}

export default ProfilePage;
