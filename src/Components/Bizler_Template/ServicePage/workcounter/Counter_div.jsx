import React from "react";

const Cdiv = (props) =>{
    return (
        <div className="counter-column col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="counter_content">

                <div className="display">
                    <span className="counter">{props.count}</span>%
                </div>

                <div className="title">{props.c_title}</div>
            </div>
        </div>

    )
}

export default Cdiv