import { Icon } from '@iconify/react/dist/iconify.js';
import React, { ReactNode } from 'react';
import Settings from '../Settings';
import DuaCard from '../DuaCard';



interface MainContentProps {
    children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
   
    return (
        <div className='w-full'>
            {
                children
            }
            <div className='flex gap-6'>

                <div className='w-[22%] h-[80vh] bg-white rounded-xl'>
                    <div>
                        <div className='text-xl text-center bg-[#1fa45b] text-white py-5 rounded-xl rounded-bl-none rounded-br-none'>
                            <h2>Categories</h2>
                        </div>
                        <div className='flex items-center relative mt-6'>
                            <input
                                type="search"
                                name="dua_search"
                                placeholder="Search by dua name"
                                className='rounded-lg outline-[#1fa45b] border-[1px] border-[#bbb] py-3 px-4 w-[90%] mx-auto pl-8'
                            />
                            <Icon
                                icon="material-symbols-light:search"
                                className='text-3xl absolute left-6'
                            />
                        </div>
                    </div>
                    <div className=' bg-white h-[65%]  overflow-y-auto scrollable-menu'>
                        <div></div>
                    </div>
                </div>

                {/* dua card */}
                <DuaCard/>
                <Settings/>
            </div>
        </div>
    );
};

export default MainContent;