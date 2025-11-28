import React from "react";
import "./TeacherBusTracking.css";

function TeacherBusTracking() {
  const buses = [
    {
      id: 1,
      route: "Parasi → Campus",
      driver: "Ram Shrestha",
      status: "On the way (2 km away)",
      eta: "10:05 AM",
    },
    {
      id: 2,
      route: "Butwal → Campus",
      driver: "Hari Sharma",
      status: "Arrived at stop",
      eta: "9:55 AM",
    },
    {
      id: 3,
      route: "Sunwal → Campus",
      driver: "Kiran Thapa",
      status: "Departed (5 km away)",
      eta: "10:15 AM",
    },
  ];

  return (
    <div className="bus-tracking-container">
      <h2>🚌 Bus Tracking</h2>
      <div className="bus-list">
        {buses.map((bus) => (
          <div className="bus-card" key={bus.id}>
            <h4>{bus.route}</h4>
            <p><strong>Driver:</strong> {bus.driver}</p>
            <p><strong>Status:</strong> {bus.status}</p>
            <p><strong>ETA:</strong> {bus.eta}</p>
            <div className="map-placeholder">[Bus Route Map]</div>
            <button className="btn-track">Track Live</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherBusTracking;
