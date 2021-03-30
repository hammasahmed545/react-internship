import React from 'react';

import Navbar from "../../Components/Bizler_Template/common/Navbar";
import Topbar from "../../Components/Bizler_Template/common/Topbar";
import BannerLeft from "../../Components/Bizler_Template/TeamPage/Bannerleft/BannerLeft";
import TeamSection from "../../Components/Bizler_Template/TeamPage/TeamSection/TeamSection";

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
