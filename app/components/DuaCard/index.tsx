import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import React from 'react';
import nameOfAllah from '../../../images/dua/Allah_traced.png';

const DuaCard = () => {
    const [activeSetting, setActiveSetting] = React.useState('');
    const readActions: { name: string, icon: string }[] = [
        {
            name: 'Copy',
            icon: 'iconoir:copy',
        },
        {
            name: 'Bookmark',
            icon: 'material-symbols:bookmark-outline',
        },
        {
            name: 'Memorize',
            icon: 'heroicons:light-bulb',
        },

        {
            name: 'Share',
            icon: 'ic:outline-share',
        },
        {
            name: 'Report',
            icon: 'material-symbols:report-outline',
        },
    ]
    return (
        <div className='w-[53%] h-[90vh]'>
                    <div className='h-full overflow-y-auto scrollable-menu'>
                        {/* section */}
                        <div className='bg-white py-4 px-6 rounded-lg '>
                            <h2 className='text-[#1fa45b] font-semibold text-md'>Section: <span className='text-black font-normal text-sm'>The servant is dependent on his Lord</span></h2>
                        </div>

                        {/* dua */}
                        <div className='bg-white mt-4 rounded-lg p-6'>
                            <div className='flex gap-2 items-center'>
                                <Image src={nameOfAllah} alt='Allah' />
                                <h2 className='text-[#1fa45b] font-medium'>1. The servant is dependent on his Lord #1</h2>
                            </div>
                            <p className='my-6 text-xl font-medium text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus voluptatum accusantium vitae ducimus. Enim hic numquam aperiam facilis dolorum commodi consectetur, cumque odio deserunt labore aliquam ipsa, nam necessitatibus.</p>

                            <p dir='rtl' className='my-6 text-xl font-medium text-justify'>aribia here</p>


                            <p className='my-6 text-xl font-medium text-justify'><span className='italic font-semibold'>Transliteration:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus voluptatum accusantium vitae ducimus. Enim hic numquam aperiam facilis dolorum commodi consectetur, cumque odio deserunt labore aliquam ipsa, nam necessitatibus.</p>

                            <p className='my-6 text-xl font-medium text-justify'>Translation: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus voluptatum accusantium vitae ducimus. Enim hic numquam aperiam facilis dolorum commodi consectetur, cumque odio deserunt labore aliquam ipsa, nam necessitatibus.</p>
                            <div>
                                <h1 className='text-[#1fa45b] text-lg'>Reference: </h1>
                                <p>Surah Al-Fatir 35:15</p>
                            </div>
                            <div className='flex justify-between mt-5 items-center'>
                                <button className='text-6xl text-[#1fa45b]'><Icon icon="carbon:play-filled" /></button>
                                <div className='flex text-3xl gap-7 text-[#bbb]'>
                                    {
                                        readActions.map((item, index) => (
                                            <span key={index} title={item.name} className='cursor-pointer'><Icon icon={item.icon} /></span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
    );
};

export default DuaCard;