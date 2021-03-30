import React from 'react';

import Navbar from "../../Components/Bizler_Template/common/Navbar";
import Topbar from "../../Components/Bizler_Template/common/Topbar";
import Portfolio from "../../Components/Bizler_Template/HomePage/portfolio/Portfolio.jsx";
import OurTeamSection from "../../Components/Bizler_Template/HomePage/ourteam/OurTeamSection";
import AboutUsSection from "../../Components/Bizler_Template/HomePage/aboutus/AboutUsSection";
import TestimonialSection from "../../Components/Bizler_Template/HomePage/testimonial/TestimonialSection";
import OurClientSection from "../../Components/Bizler_Template/HomePage/ourclient/OurClientSection";


export default function Home() {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <AboutUsSection/>
            <OurTeamSection/>
            <Portfolio/>
            <TestimonialSection/>
            <OurClientSection/>
        </div>
    );
}


