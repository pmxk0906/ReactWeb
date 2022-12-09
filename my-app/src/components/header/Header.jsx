import React from "react";
import { useState } from "react";
import "./header.css";

const Header = () => {
    /* Change Background Header*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // when the scroll is higher than 200 viewport height,add the scroll-header class to a tag with the header tag
        if (this.scrollY > 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
    /* Toggle Menu */
    const[Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className = "header">
            <nav className = "nav container">
                <a href="index.html" className="nav_logo">Pimchanok</a>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" onclick={() => setActiveNav('#home')}  className={activeNav === "#home" ? "nav_link active-link" : "nav_link active-link"}  >
                                <i className="uil uil-estate nav_icon"></i> Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about"onclick={() => setActiveNav('#about')}  className={activeNav === "#about" ? "nav_link active-link" : "nav_link active-link"}>
                                <i className="uil uil-user-circle nav_icon"></i> About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" onclick={() => setActiveNav('#skills')}  className={activeNav === "#skills" ? "nav_link active-link" : "nav_link active-link"}>
                                <i className="uil uil-file-alt nav_icon"></i> Skills
                            </a>
                        </li>

                    </ul>
                    <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header