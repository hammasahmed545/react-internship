import React from 'react';
import Team_Member_Card from './Team_Member_Card'
import Section_Header from '../reusable/Section_Header'
import Button_Common from '../reusable/Button_Common'
import {Sdata, Heading_data} from '../../data/Homepage'
 

const Our_Team_Section = () => {
    return (
        <>
        <section id="our_team" className="index-3">
          <div className="container">
            <Section_Header title1={Heading_data[0].title1 } title2={Heading_data[0].title2} headingcontent={Heading_data[0].headingcontent}  />
            <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
              <div className="row">
                <Team_Member_Card
                pic={Sdata[0].pic}
                name={Sdata[0].name} 
                position={Sdata[0].position}  
                content={Sdata[0].content} 
                />

                <Team_Member_Card
                pic={Sdata[1].pic}
                name={Sdata[1].name} 
                position={Sdata[1].position}  
                content={Sdata[1].content} 
                />

                <Team_Member_Card
                pic={Sdata[2].pic}
                name={Sdata[2].name} 
                position={Sdata[2].position}  
                content={Sdata[2].content} 
                />

               <Team_Member_Card
                pic={Sdata[3].pic} 
                name={Sdata[3].name} 
                position={Sdata[3].position}  
                content={Sdata[3].content} 
                /> 
                
                <Button_Common cname='view_more' link='javascript:void(0)'/>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
        </>
    );
}
export default Our_Team_Section;
