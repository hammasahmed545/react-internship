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
import portfolio_a from "../img/portfolio/thumbnail/project_1.jpg"
import portfolio_b from "../img/portfolio/thumbnail/project_2.jpg"
import portfolio_c from "../img/portfolio/thumbnail/project_3.jpg"
import portfolio_d from "../img/portfolio/thumbnail/project_4.jpg"
import portfolio_e from "../img/portfolio/thumbnail/project_5.jpg"
import portfolio_f from "../img/portfolio/thumbnail/project_6.jpg"

import portfolio_A from "../img/portfolio/large/project_1.jpg"
import portfolio_B from "../img/portfolio/large/project_2.jpg"
import portfolio_C from "../img/portfolio/large/project_3.jpg"
import portfolio_D from "../img/portfolio/large/project_4.jpg"
import portfolio_E from "../img/portfolio/large/project_5.jpg"
import portfolio_F from "../img/portfolio/large/project_6.jpg"

/////// OURTEAM SECTION DETAILS ///////
import ourclient_a from "../img/client-1.jpg"
import ourclient_b from "../img/client-1.jpg"
import ourclient_c from "../img/client-1.jpg"
import ourclient_d from "../img/client-1.jpg"
import ourclient_e from "../img/client-1.jpg"
import ourclient_f from "../img/client-1.jpg"

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
        title1:"About",
        title2:"Us",
        headingcontent:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        title1:"Our",
        title2:"Team",
        headingcontent:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        title1:"portfolio",
        headingcontent:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    },
    {
        title1:"What",
        title2:"people say",
        headingcontent:"Lorem Ipsum has ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        title1:"Our Client",
    },
    {
        title1: "Our",
        title2: "Pricing",
        headingcontent:"Lorem Ipsum has ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
        img_thumbnail:portfolio_a,
        img_large:portfolio_A
    },
    {
        content: "Ecommerce",
        img_thumbnail:portfolio_b,
        img_large:portfolio_B
    },
    {
        content: "Education",
        img_thumbnail:portfolio_c,
        img_large:portfolio_C
    },
    {
        content: "Real Estate",
        img_thumbnail:portfolio_d,
        img_large:portfolio_D
    },
    {
        content: "Bar & Restaurant",
        img_thumbnail:portfolio_e,
        img_large:portfolio_E
    },
    {
        content: "Saloon & Spa",
        img_thumbnail:portfolio_f,
        img_large:portfolio_F
    },
]
/////// OurClient Section Data ///////
const OurClient = [
    {
        pic:ourclient_a
    },
    {
        pic:ourclient_b
    },
    {
        pic:ourclient_c
    },
    {
        pic:ourclient_d
    },
    {
        pic:ourclient_e
    },
    {
        pic:ourclient_f
    },
]
/////// OurPricing Section Data ///////
const Pdata = [
    {
        heading : "Personal",
        price : "$9"
    },
    {
        heading : "Ultimate",
        price : "$199"
    },
    {
        heading : "Business",
        price : "$99"
    }

]
/////// OurPricing Section Data ///////
const C_data = [
    {
        count:"95",
        c_title:"Web Design",
    },
    {
        count:"80",
        c_title:"Web Development",
    },
    {
        count:"70",
        c_title:"web Hosting"
    },
    {
        count:"75",
        c_title:"Digital Marketing",
    },
]

export {Sdata, Heading_data, About_data, Testimonail_data, Portfolio_data, OurClient, Pdata, C_data}
