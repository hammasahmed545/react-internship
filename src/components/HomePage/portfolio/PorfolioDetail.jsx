import React from "react";

const PortfolioDetail = ({img_thumbnail, img_large, content}) => {
    return (
        <div className="project portfolio-inner">
            <img src={img_thumbnail} alt="project"/>
            <div className="label">
                <div className="label-text">
                    <a href="#" className="text-title">{content}</a>
                </div>
                <div className="label-bg"> </div>
            </div>
            <div className="zoom">
                <a href={img_large} className="popup-box" data-lightbox="image" data-title="Project">
                    <i className="flat flaticon-magnifying-glass"> </i>
                </a>
            </div>
        </div>
    );
}
export default PortfolioDetail