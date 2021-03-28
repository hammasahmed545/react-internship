import React from 'react';

import Navbar from "../components/common/Navbar";
import Topbar from "../components/common/Topbar";
import BannerLeft from "../components/TeamPage/Bannerleft/BannerLeft";
import TeamSection from "../components/TeamPage/TeamSection/TeamSection";

export default function TeamPage() {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <BannerLeft/>
            <TeamSection/>
        </div>
    );
}
