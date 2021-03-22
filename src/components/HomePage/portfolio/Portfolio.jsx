import React from 'react';
import Sectionheader from "../../reusable/Sectionheader";
import {Heading_data,Portfolio_data} from "../../../Data/Home_Data";
import PorfolioDetail from "./PorfolioDetail";


const Portfolio = () => {
    return(
        <section id="portfolio" className="index-3">
            <div className="container">
                <Sectionheader title1={Heading_data[2].title1 } headingcontent={Heading_data[2].headingcontent}/>

                <div className="col-lg-12 col-md-12 col-xs-12 content_sec ">
                    <div className="portfolio-sort">
                        <ul className="sorting clearfix center-grid">
                            <li className="sort-btn active" data-filter="*">All</li>
                            <li className="sort-btn" data-filter=".design">Web Design</li>
                            <li className="sort-btn" data-filter=".development">Web Development</li>
                            <li className="sort-btn" data-filter=".logo">Logo Design</li>
                            <li className="sort-btn" data-filter=".app">App Design</li>
                        </ul>
                    </div>
                    <div className="row portfolio-gallary">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item design development">
                            <PorfolioDetail content={Portfolio_data[0].content} img_large={Portfolio_data[0].img_large} img_thumbnail={Portfolio_data[0].img_thumbnail}/>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item app logo">
                            <PorfolioDetail content={Portfolio_data[1].content} img_large={Portfolio_data[1].img_large} img_thumbnail={Portfolio_data[1].img_thumbnail}/>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item development logo">
                            <PorfolioDetail content={Portfolio_data[2].content} img_large={Portfolio_data[2].img_large} img_thumbnail={Portfolio_data[2].img_thumbnail}/>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item design development logo">
                            <PorfolioDetail content={Portfolio_data[3].content} img_large={Portfolio_data[3].img_large} img_thumbnail={Portfolio_data[3].img_thumbnail}/>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item app web development">
                            <PorfolioDetail content={Portfolio_data[4].content} img_large={Portfolio_data[4].img_large} img_thumbnail={Portfolio_data[4].img_thumbnail}/>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item design development">
                            <PorfolioDetail content={Portfolio_data[5].content} img_large={Portfolio_data[5].img_large} img_thumbnail={Portfolio_data[5].img_thumbnail}/>
                        </div>
                    </div>

                </div>
            </div>
            <div className="overlay"> </div>
        </section>

    );
}

export default Portfolio
