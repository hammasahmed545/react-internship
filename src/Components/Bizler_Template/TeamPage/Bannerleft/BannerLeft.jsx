import React from 'react';
import {Heading_data} from "../../../../Data/Bizler_Data/Home_Data";
import Sectionheader from "../../reusable/Sectionheader";
import { Link } from "react-router-dom";
const BannerLeft = () => {
    return (
    <section id="inner-banner" className="index-3">
        <div className="container">
            <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="inner-heading">
                    <h2>Our Team</h2>
                    <div className="separator left-align">
                        <ul>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                        </ul>
                    </div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index-2.html" title="Home">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Our Team</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    )
}
export default BannerLeft