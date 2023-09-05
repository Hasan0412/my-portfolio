// Footer.js
import React from "react";
import "../CSS/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="copyright">
                &copy; 2023 Hasan Malik. All Rights Reserved.
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/hasan-malik-5866b7195/">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/Hasan0412">
                    <i className="fab fa-github"></i> GitHub
                </a>
            </div>
        </footer>
    );
}

export default Footer;
