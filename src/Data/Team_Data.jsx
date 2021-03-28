import React from 'react'

/////// OURTEAM SECTION IMAGES ///////
import team_img1 from '../img/team-member-pic.jpg'
import team_img2 from '../img/team-member-pic2.jpg'
import team_img3 from '../img/team-member-pic4.jpg'
import team_img4 from '../img/team-member-pic3.jpg'

const Heading_data = [
    {
        title1: "Ui/UX Designers",
    },
    {
        title1: "Web Developers",
    },
    {
        title1: "SEO/SMO",
    }
]

const SectionID_data = [
    {
        Id_name: "ui-ux"
    },
    {
        Id_name: "web-developer"
    },
    {
        Id_name: "seo-smo"
    }
]

const Section_data = [
    {
        pic: team_img1,
        name: "Alec Thompson" ,
        position:"Developer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        pic: team_img4,
        name: "Tania Andrew" ,
        position:"Designer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        pic:team_img3,
        name: "Christian Mike" ,
        position:"Developer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        pic:team_img2,
        name: "Rebecca Stormville" ,
        position:"Designer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
]

export {Section_data,SectionID_data ,Heading_data}