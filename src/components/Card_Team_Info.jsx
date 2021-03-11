import React from "react";
import logoA from "../img/team-member-pic.jpg";

const Card_Team = () => {
    return (
        <section id="our_team" className="index-3">
            <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
                <div className="row">
                    <div className="item col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="client_dp"><img src={logoA} alt="Team"/></div>
                        <div className="team-card">
                            <div className="name_designation">
                                <h5><a href="#">Alec Thompson</a></h5>
                                <span>Developer</span></div>
                            <div className="description">
                                <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                            </div>
                            <div className="social_links">
                                <ul>
                                    <li><a href="javascript:void(0)" title="Facebook"><i className="flat flaticon-facebook-logo"></i></a></li>
                                    <li><a href="javascript:void(0)" title="Twitter"><i className="flat flaticon-twitter"></i></a></li>
                                    <li><a href="javascript:void(0)" title="Google"><i className="flat flaticon-google-plus-logo"></i></a></li>
                                    <li><a href="javascript:void(0)" title="Linkedin"><i className="flat flaticon-linkedin-logo"></i></a></li>
                                    <li><a href="javascript:void(0)" title="Instagram"><i className="flat flaticon-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xs-12  text-center"><a className="view_more" href="team-3.html">View More</a></div>
                    </div>
                </div>
            </div>
            <div className="clearfix"> </div>
        </section>
    );
}

export default Card_Team