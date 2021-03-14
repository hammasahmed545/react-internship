import React from 'react';


const Testimonial_Section_Card = ({img, name, position, content }) => {
    return (
        <div className="content_sec">
            <div className="col-lg-12 col-md-12">
                <div className="testimonials-slider owl-four owl-carousel owl-theme">
                    <div className="item">
                        <div className="comment-box">
                            <div className="comment">
                                <p>{content}</p>
                            </div>
                        </div>
                        <div className="client_detail">
                            <div className="client_dp"><img src={img} alt="Client DP"/></div>
                            <div className="name_designation">
                                <h5> {name} </h5>
                                <span> {position} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Testimonial_Section_Card