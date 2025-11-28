import React, { useState } from "react";
import { useNotifications } from "../context/NotificationContext"; // 👈 make sure you have this context
import './ParentNavbar.css';

function ParentNavbar() {
    const { notifications } = useNotifications();
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <h3 className="navbar-title">EduTrack</h3>
            <div className="navbar-search">
                <input type="text" placeholder="Search" />

                {/* 🔔 Notification Bell */}
                <div className="notification-container">
                    <div className="bell" onClick={() => setOpen(!open)}>
                        🔔
                        {notifications.length > 0 && (
                            <span className="badge">{notifications.length}</span>
                        )}
                    </div>

                    {open && (
                        <div className="dropdown">
                            {notifications.length === 0 ? (
                                <p>No new notifications</p>
                            ) : (
                                notifications.map((note) => (
                                    <div key={note.id} className="dropdown-item">
                                        <p>{note.message}</p>
                                        <small>{note.time}</small>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default ParentNavbar;






// import React from "react";
// import './ParentNavbar.css';

// function ParentNavbar() {
    
//     return (
//         <nav className="navbar">
//             <h3 className="navbar-title">EduTrack</h3>
//             <div className="navbar-search">
//                 <input type="text" placeholder="Search" />
//                 <span>👤</span>
//             </div>
//         </nav>
//     );
// }
// export default ParentNavbar;