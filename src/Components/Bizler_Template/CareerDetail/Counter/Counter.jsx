import React from "react";
import Counter_Div from "./Counter_Div";
import {Stat} from '../../../../Data/Bizler_Data/CareerDetail_Data'
const Counter = () => {
    return (

        <section id="work-status" className="index-3">
            <h3 className="d-none">heading</h3>
            <div className="container">
                <div className="col-lg-12">
                    <div className="row">

                        <Counter_Div title = {Stat[0].title} value={Stat[0].value}/>
                        <Counter_Div title = {Stat[1].title} value={Stat[1].value}/>
                        <Counter_Div title = {Stat[2].title} value={Stat[2].value}/>
                    </div>
                </div>
            </div>
            <div className="overlay"> </div>
        </section>
    )
}
export default Counter