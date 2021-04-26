import React from "react";
import {SectionData} from "../../../Data/Bizler_Data/CareerDetail_Data";
import A from '../../../Images/Bizler_Images/service_detail.jpg'
const Detail_Section = () => {
    return(
        <section id="services-top">
            <div className="container">
                <h3 className="d-none">heading</h3>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img-area">
                            <img src={A} alt="About"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-area">
                            <h5>{SectionData[0].heading}</h5>
                            <p>{SectionData[0].content}</p>
                            <p>{SectionData[0].content}</p>
                            <p>{SectionData[0].content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Detail_Section