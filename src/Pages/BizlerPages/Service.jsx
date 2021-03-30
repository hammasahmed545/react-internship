import React from 'react';

import Navbar from "../../Components/Bizler_Template/common/Navbar";
import Topbar from "../../Components/Bizler_Template/common/Topbar";
import Banner from "../../Components/Bizler_Template/ServicePage/banner/Banner";
import ServiceSection from "../../Components/Bizler_Template/ServicePage/sectionservice/ServiceSection";
import CounterSection from "../../Components/Bizler_Template/ServicePage/workcounter/CounterSection";
import OurPrice from "../../Components/Bizler_Template/ServicePage/ourpricing/OurPriceSection";
import Footer from "../../Components/Bizler_Template/ServicePage/footer/Footer";


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


