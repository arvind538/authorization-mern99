import React from "react";
import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <div className="error-container">
            <h1 className="error-code">404</h1>

            <div className="error-line"></div>

            <h2 className="error-title">Page Not Found</h2>

            <p className="error-text">
                The page you are looking for might have been removed,
                had its name changed, or is temporarily unavailable.
            </p>

            <div className="error-buttons">
                <NavLink to="/" className="btn home-btn">
                    Return Home
                </NavLink>

                <NavLink to="/contact" className="btn contact-btn">
                    Contact Support
                </NavLink>
            </div>
        </div>
    );
};

export default Error;
