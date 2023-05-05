import { Typography, Button } from '@material-tailwind/react';
import bgprofile from '~/assets/background-1.jpg';
import axios from 'axios';
import { useState } from 'react';
import Avatar from 'react-avatar-edit';
import defaultavatar from '~/assets/defaultavatar.jpg';

function ProfilePage() {
    const [src, setSrc] = useState('');
    const [preview, setPreview] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [checkImage, setCheckImage] = useState(false);
    const onClose = () => {
        setPreview(null);
    };

    const onCrop = (view) => {
        setPreview(view);
    };

    var checkImage1 = () => {
        fetch(
            `http://localhost:8080/fileSystem/avatar${
                JSON.parse(localStorage.getItem('user')).id
            }.jpg`
        )
            .then((res) => res.blob())
            .then((blob) => {
                const file = new File(
                    [blob],
                    `avatar${JSON.parse(localStorage.getItem('user')).id}.jpg`,
                    {
                        type: 'image/jpg',
                    }
                );
                if (file.size > 20000) {
                    setCheckImage(true);
                } else {
                    setCheckImage(false);
                }
            });
    };
    checkImage1();
    const handleSave = async () => {
        fetch(preview)
            .then((res) => res.blob())
            .then((blob) => {
                const file = new File(
                    [blob],
                    `avatar${JSON.parse(localStorage.getItem('user')).id}.jpg`,
                    {
                        type: 'image/jpg',
                    }
                );
                const data = new FormData();
                data.append('avatar', file);
                console.log(data);
                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `http://localhost:8080/api/auth/avatar`,
                    headers: {
                        'Content-type': 'multipart/form-data',
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                    data: data,
                };

                axios(config)
                    .then(function (response) {
                        if (response.status === '200') {
                            setPreview();
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                setTimeout(function () {
                    window.location.reload(false);
                }, 20);
                setShowModal(false);
            });
    };
    return (
        <>
            <>
                {showModal ? (
                    <>
                        <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                            <div className='relative w-fit my-6 mx-auto'>
                                {/*content*/}
                                <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                                    {/*header*/}
                                    <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                                        <h3 className='text-3xl font-semibold'>
                                            Change avatar
                                        </h3>
                                        <button
                                            className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className='p-10 flex min-w-[800px] space-x-24'>
                                        <Avatar
                                            exportAsSquare
                                            exportSize={500}
                                            width={390}
                                            height={295}
                                            onCrop={onCrop}
                                            onClose={onClose}
                                            src={src}
                                            className='block'
                                        />
                                        {preview && (
                                            <img
                                                src={preview}
                                                alt='Preview'
                                                className='block max-w-60 h-60 my-auto ml-6'
                                            />
                                        )}
                                    </div>
                                    {/*footer*/}
                                    <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                                        <button
                                            className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                            type='button'
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                            onClick={() => handleSave()}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                    </>
                ) : null}
            </>
            <section className='relative block h-[50vh]'>
                <div
                    style={{ backgroundImage: `url(${bgprofile})` }}
                    className='bg-profile-background absolute top-0 h-full w-full bg-cover bg-center'
                />
                <div className='absolute top-0 h-full w-full bg-black/75 bg-cover bg-center' />
            </section>

            <section className='relative bg-blue-gray-50/50 py-16 px-4'>
                <div className='container mx-auto'>
                    <div className='relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5'>
                        <div className='px-6 min-h-[400px]'>
                            <div className='flex flex-wrap justify-center'>
                                <div className='flex w-full justify-center px-4 lg:order-2 lg:w-3/12'>
                                    <div className='relative -mt-20 w-40 h-40 block group'>
                                        {checkImage ? (
                                            <img
                                                src={`http://localhost:8080/fileSystem/avatar${
                                                    JSON.parse(
                                                        localStorage.getItem(
                                                            'user'
                                                        )
                                                    ).id
                                                }.jpg`}
                                                alt='Profile'
                                                variant='circular'
                                                className='h-full w-full shadow-xl absolute rounded-xl'
                                            />
                                        ) : (
                                            <img
                                                src={defaultavatar}
                                                alt='Profile'
                                                variant='circular'
                                                className='h-full w-full shadow-xl absolute rounded-xl'
                                            />
                                        )}
                                        <div className='absolute bottom-0 w-full'>
                                            <div
                                                className='transition-all transform 
                                                        opacity-0
                                                        group-hover:opacity-100 
                                                        text-center relative'
                                            >
                                                <button
                                                    onClick={() =>
                                                        setShowModal(true)
                                                    }
                                                    className='text-sm text-white bg-black bg-opacity-50 w-full rounded-b-xl'
                                                >
                                                    Change avatar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full px-4 lg:order-3 lg:w-4/12'>
                                    <div className='flex justify-center py-4 pt-8 lg:pt-4'>
                                        <div className='p-3 text-center lg:mr-4'>
                                            <Typography
                                                variant='lead'
                                                color='blue-gray'
                                                className='font-bold uppercase'
                                            >
                                                89
                                            </Typography>
                                            <Typography
                                                variant='small'
                                                className='font-normal text-blue-gray-500'
                                            >
                                                Posts
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full px-4 lg:order-1 lg:w-4/12'>
                                    <div className='flex justify-center py-4 pt-8 lg:pt-4'>
                                        <div className='p-3 text-center lg:mr-4'>
                                            <Typography
                                                variant='lead'
                                                color='blue-gray'
                                                className='font-bold uppercase'
                                            >
                                                89
                                            </Typography>
                                            <Typography
                                                variant='small'
                                                className='font-normal text-blue-gray-500'
                                            >
                                                Comments
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='my-8 text-center'>
                                <Typography
                                    variant='h2'
                                    color='blue-gray'
                                    className='mb-2'
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

                            <div className='mb-10 border-t border-blue-gray-50 py-6 text-center'>
                                <div className='mt-2 flex flex-wrap justify-center'>
                                    <div className='flex w-full flex-col items-center px-4 lg:w-9/12'>
                                        <Typography className='mb-8 font-normal text-blue-gray-500'>
                                            An artist of considerable range,
                                            Jenna the name taken by
                                            Melbourne-raised, Brooklyn-based
                                            Nick Murphy writes, performs and
                                            records all of his own music, giving
                                            it a warm, intimate feel with a
                                            solid groove structure. An artist of
                                            considerable range.
                                        </Typography>
                                        {/* <Button className=' bg-gray-400'>
                                            Edit profile
                                        </Button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='bg-blue-gray-50/50'></div>
        </>
    );
}

export default ProfilePage;
