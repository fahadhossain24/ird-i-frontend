'use client'

import Header from "../Header";
import MainContent from "../MainContent";
import SIdeMenu from "../SideMenu";

const MainLayout = () => {
    return (
        <div>
            <div className="flex gap-6">
                <SIdeMenu />
                <MainContent><Header /></MainContent>
            </div>
        </div>
    );
};

export default MainLayout;