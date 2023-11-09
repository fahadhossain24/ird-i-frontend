import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Settings: React.FC = () => {

    return (
        <div className='w-[20%] h-[80vh] bg-white rounded-xl'>
                    <h2 className='text-xl text-center p-8 font-semibold'>Settings</h2>
                    <div>
                        <div>
                            <div className='w-[90%] mx-auto flex gap-2 items-center p-2 bg-[#f7f8fa] rounded-lg text-[#1fa45b] text-[13px]'>
                                <Icon icon="ion:language-sharp" className='text-2xl w-[45px] h-[45px] bg-[#e8f0f5] rounded-full p-2' />
                                <p>Language Setting</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-[90%] mx-auto flex gap-2 items-center p-2 bg-[#f7f8fa] rounded-lg text-[#1fa45b] mt-3 text-[13px] '>
                                <Icon icon="jam:shopping-bag" className='text-2xl w-[45px] h-[45px] bg-[#e8f0f5] rounded-full p-2' />
                                <p>General Setting</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-[90%] mx-auto flex gap-2 items-center p-2 bg-[#f7f8fa] rounded-lg text-[#1fa45b] mt-3 text-[13px] '>
                                <Icon icon="icon-park-outline:all-application" className='text-2xl w-[45px] h-[45px] bg-[#e8f0f5] rounded-full p-2' />
                                <p>Font Setting</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-[90%] mx-auto flex gap-2 items-center p-2 bg-[#f7f8fa] rounded-lg text-[#1fa45b] mt-3 border-l-[8px] border-[#1fa45b] rounded-tl-none rounded-bl-none cursor-pointer text-[13px]'>
                                <Icon icon="icon-park-outline:all-application" className='text-xl w-[40px] h-[40px] bg-[#e8f0f5] rounded-full p-2' />
                                <p>Appearance Setting</p>
                            </div>
                            <div className='flex gap-3 p-3 justify-around items-center cursor-pointer'>
                                <h2>Night Mode</h2>
                                <Icon icon="ion:toggle-outline" className='text-3xl'/>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default Settings;