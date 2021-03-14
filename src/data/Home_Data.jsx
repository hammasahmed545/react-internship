import React from 'react'
/////// OURTEAM SECTION IMAGES ///////
import team_img1 from '../img/team-member-pic.jpg'
import team_img2 from '../img/team-member-pic2.jpg'
import team_img3 from '../img/team-member-pic4.jpg'
import team_img4 from '../img/team-member-pic3.jpg'
/////// ABOUTUS SECTION IMAGES ///////
import about_img from '../img/about_us_2.jpg'
import about_img1 from '../img/client_dp1.jpg'
/////// PORTFOLIO SECTION IMAGES ///////
import a from "../img/portfolio/thumbnail/project_1.jpg"
import b from "../img/portfolio/thumbnail/project_2.jpg"
import c from "../img/portfolio/thumbnail/project_3.jpg"
import d from "../img/portfolio/thumbnail/project_4.jpg"
import e from "../img/portfolio/thumbnail/project_5.jpg"
import f from "../img/portfolio/thumbnail/project_6.jpg"

import A from "../img/portfolio/large/project_1.jpg"
import B from "../img/portfolio/large/project_2.jpg"
import C from "../img/portfolio/large/project_3.jpg"
import D from "../img/portfolio/large/project_4.jpg"
import E from "../img/portfolio/large/project_5.jpg"
import F from "../img/portfolio/large/project_6.jpg"

/////// OURTEAM SECTION DETAILS ///////
const Sdata = [
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
/////// HEADER AND SECTION HEADINGS ///////
const Heading_data = [
    {
        title1:"Our ",
        title2:"Team",
        headingcontent:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        title1:"About ",
        title2:"Us",
        headingcontent:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        title1:"Portfolio ",
        headingcontent:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    }
]
/////// ABOUTUS SECTION DETAILS ///////
const About_data = [
    {
        pic:about_img,
        heading:"Providing best business solution for growing your business",
        text1:"Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
        text2:"Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
    }
]
/////// TESTIMONIAL SECTION DETAILS///////
const Testimonail_data = [
    {
        pic:about_img1,
        name: "Rebecca Stormville" ,
        position:"Designer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        pic:about_img1,
        name: "Rebecca Stormville" ,
        position:"Designer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
        pic:about_img1,
        name: "Rebecca Stormville" ,
        position:"Designer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        pic:about_img1,
        name: "Rebecca Stormville" ,
        position:"Designer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        pic:about_img1,
        name: "Rebecca Stormville" ,
        position:"Designer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
        pic:about_img1,
        name: "Rebecca Stormville" ,
        position:"Designer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
]
/////// PORTFOLIO SECTION DETAILS///////
const Portfolio_data = [
    {
        content: "Photographary",
        img_thumbnail:a,
        img_large:A
    },
    {
        content: "Ecommerce",
        img_thumbnail:b,
        img_large:B
    },
    {
        content: "Education",
        img_thumbnail:c,
        img_large:C
    },
    {
        content: "Real Estate",
        img_thumbnail:d,
        img_large:D
    },
    {
        content: "Bar & Restaurant",
        img_thumbnail:e,
        img_large:E
    },
    {
        content: "Saloon & Spa",
        img_thumbnail:f,
        img_large:F
    },
]

export {Sdata, Heading_data, About_data, Testimonail_data, Portfolio_data}