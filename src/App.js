import './App.css';
import React from 'react';
import Navbar from "./components/common/Navbar";
import Topbar from "./components/common/Topbar";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import OurTeamSection from "./components/ourteam/OurTeamSection";
import AboutUsSection from "./components/AboutUsSection";
function App() {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <AboutUsSection/>
            <OurTeamSection/>
            <Portfolio/>

        </div>
    );
}

export default App;
