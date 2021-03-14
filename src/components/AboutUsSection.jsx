import React from "react";
import {Heading_data,About_data} from "../data/Home_Data";
import Sectionheader from "./reusable/Sectionheader";
import Button_Common from "./reusable/Button_Common";

const aboutus = () => {
    return(
    <div className="container">

        <Sectionheader title1={Heading_data[1].title1 } title2={Heading_data[1].title2} headingcontent={Heading_data[1].headingcontent}/>

        <div className="col-lg-12 col-md-12 col-xs-12 content_sec">

            <div className="row row-safari">

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img-area">

                    <img className="img_sec" src={About_data[0].pic}  alt="About"/>

                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-area">

                    <h5> {About_data[0].heading} </h5>
                    <p> {About_data[0].text1} </p>
                    <p> {About_data[0].text2} </p>

                    <Button_Common cname='view_more' link='javascript:void(0)'/>

                </div>

            </div>

        </div>

    </div>
);
}

export default aboutus