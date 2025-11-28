import React from 'react';
import './ChildrenBusRoute.css';

function ChildrenBusRoute() {
  return (
    <div className="children-bus-route">
      <h2>🚌 Children Bus Route</h2>
      <div className="bus-info-card">
        <p><strong>Child Name:</strong> Amrit Pariyar</p>
        <p><strong>Route:</strong> Parasi → Campus</p>
        <p><strong>Status:</strong> Bus on the way (500m away)</p>
        <div className="map-placeholder">[Bus Tracking Map]</div>
        <div className="btn-group">
          <button className="btn btn-primary">Track Bus</button>
        </div>
      </div>
    </div>
  );
}

export default ChildrenBusRoute;
