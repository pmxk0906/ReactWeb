import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/CV.pdf";
import Info from "./Info";


const About = () => {
    return (
         <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My introduction</span>

            <div className="about_container container grid">
                <img src={AboutImg} alt="" className="about_img"/>
               
                <div className="about_data">
                    <Info />

                    <p className="about_description">Hi, My name is Pimchanok but you can call me Mine. <br />
                    I want to learn and gain experience in Front-End Developer</p>
                    <a download="" href={CV} className="button button-flex">Download CV
                    </a>
                </div>
            </div>
         </section>
    )
}

export default About