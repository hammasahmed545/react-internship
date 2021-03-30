import React from 'react';
import {Testimonail_data} from "../../../../Data/Bizler_Data/Home_Data";
import TestimonialCard from "./TestimonialCard";

const testimonial = () => {
    return(
        <section id="testimonials" className="gray-bg index-3">
            <div className="container">
                <div className="row row-reverse">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="section_heading">
                            <h2>What <span>People Say</span></h2>
                            <div className="separator">
                                <ul>
                                    <li> </li>
                                    <li> </li>
                                    <li> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content_sec">
                            <div className="col-lg-12 col-md-12">
                                <div className="testimonials-slider owl-four owl-carousel owl-theme">
                                    <TestimonialCard content={Testimonail_data[0].content} img={Testimonail_data[0].pic} name={Testimonail_data[0].name} position={Testimonail_data[0].position} />
                                    <TestimonialCard content={Testimonail_data[1].content} img={Testimonail_data[1].pic} name={Testimonail_data[1].name} position={Testimonail_data[1].position} />
                                    <TestimonialCard content={Testimonail_data[2].content} img={Testimonail_data[2].pic} name={Testimonail_data[2].name} position={Testimonail_data[2].position} />
                                    <TestimonialCard content={Testimonail_data[3].content} img={Testimonail_data[3].pic} name={Testimonail_data[3].name} position={Testimonail_data[3].position} />
                                    <TestimonialCard content={Testimonail_data[4].content} img={Testimonail_data[4].pic} name={Testimonail_data[4].name} position={Testimonail_data[4].position} />
                                    <TestimonialCard content={Testimonail_data[5].content} img={Testimonail_data[5].pic} name={Testimonail_data[5].name} position={Testimonail_data[5].position} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay"> </div>
            <div className="clearfix"> </div>

        </section>
    );
}
export default testimonial