
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { ReactNode, useState, useEffect } from 'react';
import Settings from '../Settings';
import DuaCard from '../DuaCard';
import axios from 'axios';
import Image from 'next/image';
import categoryIcon from '../../../images/dua/fever.png';


interface MainContentProps {
    children: ReactNode;

}

const MainContent: React.FC<MainContentProps> = ({ children }) => {

    const [categories, setCategories] = useState<any[]>([]);
    const [subCategories, setSubCategories] = useState<any[]>([]);
    const [allDua, setAllDua] = useState<any[]>([]);
    const [duasWithSubCat, setDuasWithSubCat] = useState<any[]>([]);
    const [searchDuas, setSearchDuas] = useState<any[]>([]);
    const [catId, setCatId] = useState(1);
    const [subCatId, setSubCatId] = useState(1);
    const [searchText, setSearchText] = useState('')
    const [error, setError] = useState('');


    // fetching categories
    useEffect(() => {
        axios
            .get('http://localhost:7000/api/v1/categories')
            .then(data => {
                if (data.status === 200) {
                    setCategories(data.data.data);
                } else {
                    setError('Categories data not found');
                }
            })
            .catch(err => {
                setError(err.message);
            })

    }, [])

    // fetching subCategories
    useEffect(() => {
        axios
            .get(`http://localhost:7000/api/v1/subCategories/${catId}`)
            .then(data => {
                if (data.status === 200) {
                    setSubCategories(data.data.data);
                } else {
                    setError('subCategories data not found');
                }
            })
            .catch(err => {
                setError(err.message);
            })

    }, [catId])

    // fetching all dua
    useEffect(() => {
        axios
            .get('http://localhost:7000/api/v1/duas')
            .then(data => {
                if (data.status === 200) {
                    setAllDua(data.data.data);
                } else {
                    setError('duas not found');
                }
            })
            .catch(err => {
                setError(err.message);
            })

    }, [])

    // fetching duas by subCatId
    useEffect(() => {
        axios
            .get(`http://localhost:7000/api/v1/duas/${subCatId}`)
            .then(data => {
                if (data.status === 200) {
                    setDuasWithSubCat(data.data.data);
                } else {
                    setError('duas not found');
                }
            })
            .catch(err => {
                setError(err.message);
            })

    }, [subCatId])

    // handle search
    const handleSearch = (e: any) => {
        setSearchText(e.target.value)
        const searchData = allDua.filter((obj) => JSON.stringify(obj).toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchDuas(searchData)
    }

    // console.log(categories)
    // console.log(subCategories)
    // console.log(duas);
    // console.log(catId)

    return (
        <div className='w-full'>
            {
                children
            }
            <div className='flex gap-6'>

                <div className='sm:hidden lg:block lg:w-[22%] h-[80vh] bg-white rounded-xl'>
                    <div>
                        <div className='text-xl text-center bg-[#1fa45b] text-white py-5 rounded-xl rounded-bl-none rounded-br-none'>
                            <h2>Categories</h2>
                        </div>
                        <div className='flex items-center relative mt-6'>
                            <input
                                type="search"
                                name="dua_search"
                                placeholder="Search"
                                className='rounded-lg outline-[#1fa45b] border-[1px] border-[#bbb] py-3 px-4 w-[90%] mx-auto pl-10'
                                onChange={handleSearch}
                            />
                            <Icon
                                icon="material-symbols-light:search"
                                className='text-3xl absolute left-6'
                            />
                        </div>
                    </div>
                    <div className=' bg-white h-[65%]  overflow-y-auto scrollable-menu myDuaCard'>
                        <div>
                            <ul>
                                {
                                    categories.map(item => (
                                        <div
                                            key={item.cat_id}
                                        >
                                            <li
                                                onClick={() => setCatId(item.cat_id)}
                                                className={`w-[90%] mx-auto flex gap-2 mt-2 text-xs justify-between p-2 hover:bg-[#e8f0f5] rounded-lg cursor-pointer ${catId === item.cat_id ? 'bg-[#e8f0f5]' : ''}`}
                                            >
                                                <div
                                                    className='flex gap-2'
                                                >
                                                    <div>
                                                        <Image
                                                            src={categoryIcon}
                                                            alt=''
                                                            className='p-2 rounded-lg bg-white'
                                                        />
                                                    </div>
                                                    <div>
                                                        <h2
                                                            className='text-sm'
                                                        >
                                                            {item.cat_name_en}
                                                        </h2>
                                                        <p
                                                            className='text-[#aaa]'
                                                        >
                                                            Subcategory: {item.no_of_subcat}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>{item.no_of_dua}</p>
                                                    <h2 className='text-[#aaa]'>Duas</h2>
                                                </div>
                                            </li>
                                            {
                                                catId === item.cat_id && <ul>
                                                    {
                                                        subCategories.map(item => (
                                                            <div
                                                                key={item.subcat_id}
                                                                className='ml-5 border-l-2 border-dotted border-[#1fa45b]'
                                                            >
                                                                <li
                                                                    onClick={() => setSubCatId(item.subcat_id)} className='w-[90%] text-[#1fa45b] font-semibold text-[13px] px-2 py-3  ml-3 cursor-pointer list-disc marker:text-[#1fa45b]'
                                                                >
                                                                    {item.subcat_name_en}
                                                                </li>
                                                                {
                                                                    subCatId === item.subcat_id
                                                                    &&
                                                                    <ul>
                                                                        {
                                                                            searchDuas.length !== 0
                                                                                &&
                                                                                searchText.length !== 0
                                                                                ?
                                                                                searchDuas.map((item, index) => (
                                                                                    <div
                                                                                        key={index}
                                                                                        className='flex items-center ml-5 text-[15px] text-[#1fa45b]  py-2 cursor-pointer'
                                                                                    >
                                                                                        <Icon icon="ic:sharp-greater-than" />
                                                                                        <li
                                                                                            className='w-[90%] mx-auto text-[#aaa] text-[11px] p-1 '
                                                                                        >
                                                                                            <a
                                                                                                href={`#${item.id}`}
                                                                                            >
                                                                                                {item.dua_name_en}
                                                                                            </a>
                                                                                        </li>
                                                                                    </div>
                                                                                )) :
                                                                                duasWithSubCat.map((item, index) => (
                                                                                    <div
                                                                                        key={index}
                                                                                        className='flex items-center ml-5 text-[15px] text-[#1fa45b]  py-2 cursor-pointer'
                                                                                    >
                                                                                        <Icon icon="ic:sharp-greater-than"
                                                                                        />
                                                                                        <li
                                                                                            className='w-[90%] mx-auto text-[#aaa] text-[11px] p-1 '
                                                                                        >
                                                                                            <a
                                                                                                href={`#${item.id}`}
                                                                                            >
                                                                                                {item.dua_name_en}</a>
                                                                                        </li>
                                                                                    </div>
                                                                                ))
                                                                        }
                                                                    </ul>

                                                                }
                                                            </div>

                                                        ))
                                                    }
                                                </ul>
                                            }
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                {/* dua card */}
                <DuaCard catId={catId} subCatId={subCatId} />
                <Settings />
            </div>
        </div>
    );
};

export default MainContent;