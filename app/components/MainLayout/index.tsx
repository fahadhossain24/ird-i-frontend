'use client'

import Header from "../Header";
import SIdeMenu from "../SideMenu";

const MainLayout = () => {
    return (
        <div>
            <div className="flex gap-4">
                <SIdeMenu />
                <Header />
            </div>
        </div>
    );
};

export default MainLayout;