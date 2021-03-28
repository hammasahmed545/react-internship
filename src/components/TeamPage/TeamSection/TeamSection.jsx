import React from 'react';
import Sectionheader from '../../reusable/Sectionheader'
import TeamDetail from "./TeamDetail";
import {Heading_data,SectionID_data} from '../../../Data/Team_Data'


const TeamSection = () => {
    return (
        <section id="our_team" className="inner index-3">
            <div id={SectionID_data[0].Id_name}>
                <div className="container">
                    <Sectionheader title1={Heading_data[0].title1}/>
                    <TeamDetail/>
                </div>
            </div>

            <div id={SectionID_data[1].Id_name} className="gray-bg">
                <div className="container">
                    <Sectionheader title1={Heading_data[1].title1}/>
                    <TeamDetail/>
                </div>
            </div>

            <div id={SectionID_data[2].Id_name}>
                <div className="container">
                    <Sectionheader title1={Heading_data[2].title1}/>
                    <TeamDetail/>
                </div>
            </div>
        </section>
    );
}
export default TeamSection;
