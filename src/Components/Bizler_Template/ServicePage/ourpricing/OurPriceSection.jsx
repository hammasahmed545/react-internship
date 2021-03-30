import React from "react";
import {Heading_data, Pdata} from "../../../../Data/Bizler_Data/Home_Data";
import Sectionheader from "../../reusable/Sectionheader";
import Pricingcard from "./Pricing_card";
const OurPrice = () => {
    return (
        <section id="pricing" className="index-3">
            <div className="container">
                <Sectionheader title1={Heading_data[5].title1 } title2={Heading_data[5].title2} headingcontent={Heading_data[5].headingcontent}  />

                <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 content_sec">
                    <div className="row">

                        <Pricingcard
                            heading={Pdata[0].heading}
                            price={Pdata[0].price}
                            card="price_card"
                            l1="deactive"
                            l2="deactive"
                            l3="deactive"

                        />

                        <Pricingcard
                            heading={Pdata[1].heading}
                            price={Pdata[1].price}
                            card = "price_card ultimate"

                        />

                        <Pricingcard
                            heading={Pdata[2].heading}
                            price={Pdata[2].price}
                            card="price_card"
                            l3="deactive"

                        />

                    </div>
                </div>
            </div>
            <div className="clearfix"> </div>
        </section>
    )}

export default OurPrice