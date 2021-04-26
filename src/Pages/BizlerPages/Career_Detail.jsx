import React from 'react';

import Navbar from "../../Components/Bizler_Template/common/Navbar";
import Topbar from "../../Components/Bizler_Template/common/Topbar";
import Banner from "../../Components/Bizler_Template/CareerDetail/Banner";
import Detail_Section from "../../Components/Bizler_Template/CareerDetail/Detail_Section";
import Counter from "../../Components/Bizler_Template/CareerDetail/Counter/Counter";
import OtherService from "../../Components/Bizler_Template/CareerDetail/OtherServiceSection/OtherService";
import Footer from "../../Components/Bizler_Template/ServicePage/footer/Footer";


export default function Career_Detail() {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <div className="wraper-v2-inner">
                <Banner/>
                <Detail_Section/>
                <Counter/>
                <OtherService/>
            </div>
            <Footer/>
        </div>
    );
}


