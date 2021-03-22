import React from "react";

const ServiceSectionCard = (props) => {
return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 blog-iso-item">
        <div className="item card_mr_top">
            <div className="service-card">
                <div className="service_icon">
                    <i className={props.icon}> </i>
                </div>
                <div className="service_detail">
                    <h5>
                        <a href="service-detail.html" title={props.title}>{props.heading} </a>
                    </h5>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    </div>
)
}
export default ServiceSectionCard