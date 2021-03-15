import React from "react";

import {Heading_data,OurClient} from "../../Data/Home_Data";
import Sectionheader from "../reusable/Sectionheader";

const OurClientSection=()=>{
    return(
<section id="client" className="index-2">
    <div className="container">
        <Sectionheader title1={Heading_data[4].title1 }/>
        <div className="col-lg-12">
            <div className="team-slider owl-six owl-carousel owl-theme">
                <div className="item"><img src={OurClient[0].pic} alt="Client"/></div>
                <div className="item"><img src={OurClient[1].pic} alt="Client"/></div>
                <div className="item"><img src={OurClient[2].pic} alt="Client"/></div>
                <div className="item"><img src={OurClient[3].pic} alt="Client"/></div>
                <div className="item"><img src={OurClient[4].pic} alt="Client"/></div>
                <div className="item"><img src={OurClient[5].pic} alt="Client"/></div>
            </div>
            <div className="left-tri"> </div>
            <div className="right-tri"> </div>
        </div>
    </div>
    <div className="clearfix"> </div>
    <div className="overlay"> </div>
</section>
    );
}

export default OurClientSection