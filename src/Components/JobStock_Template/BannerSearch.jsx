import React from 'react';

import BannerCard from "./BannerCard";

import A from "../../Images/Job_Stock_Images/img/microsoft-home.png"
import B from "../../Images/Job_Stock_Images/img/img-home.png"
import C from "../../Images/Job_Stock_Images/img/mothercare-home.png"
import D from "../../Images/Job_Stock_Images/img/paypal-home.png"
import E from "../../Images/Job_Stock_Images/img/serv-home.png"
import F from "../../Images/Job_Stock_Images/img/xerox-home.png"
import G from "../../Images/Job_Stock_Images/img/yahoo-home.png"
import H from "../../Images/Job_Stock_Images/img/mothercare-home.png"

const BannerSearch = () => {
    return (
        <div className="banner" style="background-image:url(assets/img/banner-9.jpg);">
            <div className="container">
                <div className="banner-caption">
                    <div className="col-md-12 col-sm-12 banner-text">
                        <h1>7,000+ Browse Jobs</h1>
                        <form className="form-horizontal">
                            <div className="col-md-4 no-padd">
                                <div className="input-group">
                                    <input type="text" className="form-control right-bor" id="joblist" placeholder="Skills, Designations, Companies"/>
                                </div>
                            </div>
                            <div className="col-md-3 no-padd">
                                <div className="input-group">
                                    <input type="text" className="form-control right-bor" id="location" placeholder="Search By Location.."/>
                                </div>
                            </div>
                            <div className="col-md-3 no-padd">
                                <div className="input-group">
                                    <select id="choose-city" className="form-control">
                                        <option>Choose City</option>
                                        <option>Chandigarh</option>
                                        <option>London</option>
                                        <option>England</option>
                                        <option>Pratapcity</option>
                                        <option>Ukrain</option>
                                        <option>Wilangana</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2 no-padd">
                                <div className="input-group">
                                    <button type="submit" className="btn btn-primary">Search Job</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="company-brand">
                <div className="container">
                    <div id="company-brands" className="owl-carousel">

                        <BannerCard pic={A}/>
                        <BannerCard pic={B}/>
                        <BannerCard pic={C}/>
                        <BannerCard pic={D}/>
                        <BannerCard pic={E}/>
                        <BannerCard pic={F}/>
                        <BannerCard pic={G}/>
                        <BannerCard pic={H}/>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default BannerSearch