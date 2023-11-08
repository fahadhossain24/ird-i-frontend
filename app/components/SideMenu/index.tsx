import { Icon } from '@iconify/react';
import logo from '../../../images/logo/logo.png'
import supportImg from '../../../images/logo/support.png'
import Image from 'next/image';

const SIdeMenu = () => {
    const sideMenuItems: {name: string, icon:string}[] = [
        {
            name: 'Home',
            icon: 'material-symbols:home-outline',
        },
        {
            name: 'All Duas',
            icon: 'icon-park-outline:all-application',
        },
        {
            name: 'Memorize',
            icon: 'heroicons:light-bulb',
        },
        {
            name: 'Bookmark',
            icon: 'material-symbols:bookmark-outline',
        },
        {
            name: 'Ruqyah',
            icon: 'ri:medicine-bottle-line',
        },
        {
            name: 'Dua Info',
            icon: 'jam:messages-alt',
        },
        {
            name: 'Books',
            icon: 'streamline:interface-content-book-open-content-books-book-open',
        },
    ]
    return (
        <div className='w-[100px] h-[90vh] bg-white flex flex-col rounded-3xl overflow-y-auto scrollable-menu'>
            <div className='h-[750px]'>
            <div className='h-[25%] pt-4 px-2 mb-[-50px] cursor-pointer'>
                <Image src={logo} alt='logo'/>
            </div>
            <div className='h-[50%] text-3xl'>
                <ul className='flex flex-col gap-5 justify-center items-center'>
                    {
                        sideMenuItems.map((item, index) => (
                            <div key={index} className='w-[45px] h-[45px] bg-[#e8f0f5] rounded-full p-[7px] text-[#bbb] cursor-pointer'>
                                <Icon icon={item.icon} />
                            </div>
                        ))
                    }
                </ul>
            </div>
            <div className='h-[25%] mt-24'>
                <Image src={supportImg} alt="support" />
            </div>
            </div>
        </div>
    );
};

export default SIdeMenu;