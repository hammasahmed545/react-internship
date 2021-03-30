import React from "react";
import Cdiv from "./Counter_div";
import {C_data} from '../../../../Data/Bizler_Data/Home_Data'
const CounterSection = () => {
    return (

        <section id="work-status" className="index-3">
            <h3 className="d-none">heading</h3>
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="row">
                        <Cdiv
                            count = {C_data[0].count}
                            c_title = {C_data[0].c_title}
                        />
                        <Cdiv
                            count = {C_data[1].count}
                            c_title = {C_data[1].c_title}
                        />
                        <Cdiv
                            count = {C_data[2].count}
                            c_title = {C_data[2].c_title}
                        />
                        <Cdiv
                            count = {C_data[3].count}
                            c_title = {C_data[3].c_title}
                        />
                    </div>
                </div>
            </div>
            <div className="overlay"> </div>
        </section>
    )
}
export default CounterSection