import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import nameOfAllah from '../../../images/dua/Allah_traced.png';
import axios from 'axios';


interface DuaCardProps {
    catId: number;
    subCatId: number;
}

const DuaCard: React.FC<DuaCardProps> = ({ catId, subCatId }) => {
    const [duas, setDuas] = useState<any[]>([]);
    const [error, setError] = useState('');


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

    // fetching dua data
    useEffect(() => {
        axios
            .get(`http://localhost:7000/api/v1/duas/category/${catId}`)
            .then(data => {
                if (data.status === 200) {
                    setDuas(data.data.data);
                } else {
                    setError('Categories data not found');
                }
            })
            .catch(err => {
                setError(err.message);
            })

    }, [catId])

    // console.log(duas)


    return (
        <div className='sm:w-full lg:w-[53%] h-[90vh]'>
            <div className='h-full overflow-y-auto scrollable-menu scroll-smooth myDuaCard' style={{ scrollBehavior: 'smooth' }}>
                {/* section */}
                <div className='bg-white py-4 px-6 rounded-lg '>
                    <h2 className='text-[#1fa45b] font-semibold text-md'>Section: <span className='text-black font-normal text-sm'>The servant is dependent on his Lord</span></h2>
                </div>

                {/* dua cards*/}
                {
                    duas.map((item, index) => (
                        <div key={index} id={item.id} className='bg-white mt-4 rounded-lg p-6'>
                            <div className='flex gap-2 items-center'>
                                <Image src={nameOfAllah} alt='Allah' />
                                <h2 className='text-[#1fa45b] font-medium'>{item.dua_name_en}</h2>
                            </div>
                            <p className='my-6 text-lg font-medium text-justify text-gray-700'>{item.top_en}</p>

                            <p dir='rtl' className='my-6 text-2xl py-3 font-medium text-justify'>{item.dua_arabic}</p>


                            <p className='my-6 text-sm text-gray-500 font-medium text-justify italic'><span className='font-semibold'>{item.transliteration_en ? 'Transliteration:' : ''}</span> {item.transliteration_en}</p>

                            <p className='my-6 text-md text-gray-600 font-medium text-justify'>{item.translation_en ? 'Translation:' : ''} {item.translation_en}</p>
                            <div>
                                <h1 className='text-[#1fa45b] text-lg'>Reference: </h1>
                                <p>{item.refference_en}</p>
                            </div>
                            <div className='flex justify-between mt-5 items-center'>
                                {
                                    item.audio ? <audio src={item.audio} controls className=''></audio> : <p className='text-white'>no audio</p>
                                }
                                <div className='flex text-3xl gap-7 text-[#bbb]'>
                                    {
                                        readActions.map((item, index) => (
                                            <span key={index} title={item.name} className='cursor-pointer'><Icon icon={item.icon} /></span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default DuaCard;