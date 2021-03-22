import React from 'react';

import Navbar from "../components/common/Navbar";
import Topbar from "../components/common/Topbar";
import Portfolio from "../components/HomePage/portfolio/Portfolio.jsx";
import OurTeamSection from "../components/HomePage/ourteam/OurTeamSection";
import AboutUsSection from "../components/HomePage/aboutus/AboutUsSection";
import TestimonialSection from "../components/HomePage/testimonial/TestimonialSection";
import OurClientSection from "../components/HomePage/ourclient/OurClientSection";


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


