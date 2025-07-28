import React from "react";
import './StudentNavbar.css';

function StudentNavbar() {
    return (
        <nav className="navbar">
            <h3 className="navbar-title">EduTrack</h3>
            <div className="navbar-search">
                <input type="text" placeholder="Search" />
                {/* <span>👤</span> */}
            </div>
        </nav>
    );
}

export default StudentNavbar;