import React from "react";

const Counter_Div = (props) =>{
    return (
        <div className="counter-column col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="counter_content">
                <div className="display">
                    <span className="counter">{props.value}</span>
                </div>
                <div className="title">{props.title}</div>
            </div>
        </div>

    )
}

export default Counter_Div