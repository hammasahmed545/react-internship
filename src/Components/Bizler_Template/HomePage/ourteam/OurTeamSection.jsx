import React from 'react';
import TeamMemberCard from './TeamMemberCard'
import Sectionheader from '../../reusable/Sectionheader'
import Button_Common from '../../reusable/Button_Common'
import {Sdata, Heading_data} from '../../../../Data/Bizler_Data/Home_Data'


const OurTeamSection = () => {
    return (

            <section id="our_team" className="index-3">
                <div className="container">
                    <Sectionheader title1={Heading_data[0].title1 } title2={Heading_data[0].title2} headingcontent={Heading_data[0].headingcontent}  />
                    <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
                        <div className="row">
                            <TeamMemberCard
                                pic={Sdata[0].pic}
                                content={Sdata[0].content}
                                name={Sdata[0].name}
                                position={Sdata[0].position}
                            />

                            <TeamMemberCard
                                pic={Sdata[1].pic}
                                name={Sdata[1].name}
                                position={Sdata[1].position}
                                content={Sdata[1].content}
                            />

                            <TeamMemberCard
                                pic={Sdata[2].pic}
                                name={Sdata[2].name}
                                position={Sdata[2].position}
                                content={Sdata[2].content}
                            />

                            <TeamMemberCard
                                pic={Sdata[3].pic}
                                name={Sdata[3].name}
                                position={Sdata[3].position}
                                content={Sdata[3].content}
                            />

                            <Button_Common cname='view_more' link='javascript:void(0)'/>
                        </div>
                    </div>
                </div>
                <div className="clearfix" > </div>
            </section>

    );
}
export default OurTeamSection;
