import React from 'react';
import Image from 'next/image';
import profile from '../../../images/profile/profile.png'
import { Icon } from '@iconify/react/dist/iconify.js';

const Header: React.FC = () => {
    return (
        <div >
            <div className="h-[80px] flex items-center">
                <div className='w-[60%]'>
                    <h2
                        className='text-2xl font-medium'
                    >
                        Duas Page
                    </h2>
                </div>
                <div className='w-[30%]'>
                    <div className='flex items-center'>
                        <div className='relative flex items-center'>
                            <input
                                type="search"
                                name="dua_search"
                                placeholder="Search by dua name"
                                className='border-2 rounded-lg py-2 px-4 w-[300px]' // Add left padding to accommodate the search icon
                            />
                            <Icon
                                icon="material-symbols-light:search"
                                className='text-3xl mt-1 p-1 w-[50px] absolute right-2 top-1 bg-[#f3f4f6] rounded-md cursor-pointer' // Position the search icon absolutely
                            />
                        </div>
                    </div>
                </div>
                <div
                    className='w-[10%] flex justify-center items-center gap-1'
                >
                    <Image
                        src={profile}
                        alt='profile'
                        className='cursor-pointer'
                    />
                    <Icon
                        icon="mdi:arrow-down-drop"
                        className='text-3xl cursor-pointer'
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;