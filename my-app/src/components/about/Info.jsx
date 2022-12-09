import React from "react";

const Info = () => {
    return (
         <div className="about_info grid">
            <div className="about_box">
            <i class='bx bxs-school about_icon'></i>
                <h3 className="about_title">Study</h3>
                <span className="about_subtitle">Phayao of University</span>
            </div>

            <div className="about_box">
            <i class='bx bx-book-reader about_icon'></i>
                <h3 className="about_title">Major</h3>
                <span className="about_subtitle">Software Engineering</span>
            </div>

            <div className="about_box">
            <i class='bx bx-face about_icon'></i>
                <h3 className="about_title">Person</h3>
                <span className="about_subtitle">Patient and passionate</span>
            </div>
         </div>
    )
}

export default Info