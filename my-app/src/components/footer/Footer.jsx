import React from "react";
import "./footer.css";

const Footer = () => {
    return (
         <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Pimchanok</h1>
                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer_link">Skills</a>
                    </li>

                </ul>

                <div className="footer_social">
                <a href="https://web.facebook.com/pimyyyy0609" className="footer_social-link" target={"_blank"} rel="noreferrer">
                <i class='bx bxl-facebook' ></i>
                </a>
                <a href="https://github.com/pmxk0906/ReactWeb" className="footer_social-link" target={"_blank"} rel="noreferrer">
                <i class='bx bxl-github' ></i>
                </a>
                </div>

                <span className="footer_copy">&#169; Crypticalcoder. All rights reserved</span>
            </div>
         </footer>
    )
}

export default Footer