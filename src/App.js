import './App.css';
import React from 'react';
import Navbar from "./components/common/Navbar";
import Topbar from "./components/common/Topbar";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import OurTeamSection from "./components/ourteam/OurTeamSection";
import AboutUsSection from "./components/AboutUsSection";
import TestimonialSection from "./components/testimonial/TestimonialSection";

import OurClientSection from "./components/ourclient/OurClientSection";
function App() {
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

export default App;
