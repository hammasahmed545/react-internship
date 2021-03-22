import React from 'react';

import Navbar from "../components/common/Navbar";
import Topbar from "../components/common/Topbar";
import Banner from "../components/ServicePage/banner/Banner";
import ServiceSection from "../components/ServicePage/sectionservice/ServiceSection";
import CounterSection from "../components/ServicePage/workcounter/CounterSection";
import OurPrice from "../components/ServicePage/ourpricing/OurPriceSection";
import Footer from "../components/ServicePage/footer/Footer";


export default function Service() {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <div className="wraper-v2-inner">
                <Banner/>
                <ServiceSection/>
                <CounterSection/>
                <OurPrice/>
            </div>
            <Footer/>
        </div>
    );
}


