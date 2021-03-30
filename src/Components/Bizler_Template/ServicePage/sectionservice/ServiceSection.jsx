import React from "react";
import ServiceSectionCard from "./ServiceSectionCard";
import ServiceData from "../../../../Data/Bizler_Data/Service_Data";

const ServiceSection = () => {
    return (

        <section id="services" className="index-3 inner pdb-70">
            <div className="container">
                <div className="col-lg-12 col-md-12 col-xs-12">
                    <div className="row blog-isotope">
                        <ServiceSectionCard
                            icon = "flat flaticon-web-design"
                            title = "Web Development"
                            heading={ServiceData[0].heading}
                            content={ServiceData[0].content}
                        />
                        <ServiceSectionCard
                            icon = "flat flaticon-computer-graphic"
                            title = "Web Design"
                            heading={ServiceData[1].heading}
                            content={ServiceData[1].content}
                        />
                        <ServiceSectionCard
                            icon = "flat flaticon-servers"
                            title = "Web Hosting"
                            heading={ServiceData[2].heading}
                            content={ServiceData[2].content}
                        />
                        <ServiceSectionCard
                            icon = "flat flaticon-digital-marketing"
                            title = "Digital Marketing"
                            heading={ServiceData[3].heading}
                            content={ServiceData[3].content}
                        />
                        <ServiceSectionCard
                            icon = "flat flaticon-digital-marketing"
                            title = "Digital Marketing"
                            heading={ServiceData[3].heading}
                            content={ServiceData[3].content}
                        />
                        <ServiceSectionCard
                            icon = "flat flaticon-servers"
                            title = "Web Hosting"
                            heading={ServiceData[2].heading}
                            content={ServiceData[2].content}
                        />
                        <ServiceSectionCard
                            icon = "flat flaticon-computer-graphic"
                            title = "Web Design"
                            heading={ServiceData[1].heading}
                            content={ServiceData[1].content}
                        />
                        <ServiceSectionCard
                            icon = "flat flaticon-web-design"
                            title = "Web Development"
                            heading={ServiceData[0].heading}
                            content={ServiceData[0].content}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection