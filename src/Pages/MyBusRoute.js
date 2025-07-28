import React, { useState } from 'react';
import './MyBusRoute.css';

function MyBusRoute() {
  const [notifyMessage, setNotifyMessage] = useState('');
  const [waitMessage, setWaitMessage] = useState('');

  const busInfo = {
    busNumber: 'Bus-07',
    driverName: 'Deepak',
    driverPhone: '9800000000',
    pickupTime: '10:15 AM',
    busStop: 'Devkota Chowk',
    distanceFromStop: '500 meters',
    routeFrom: 'Parasi',
    routeTo: 'Mahakavi Devkota Campus',
    arrivalTime: '10:15 AM',
  };

  const handleNotify = () => {
    const messages = [
      `🚌 The bus has started from ${busInfo.routeFrom}.`,
      `🕒 Your bus is 30 minutes away.`,
      `🕒 Your bus is 20 minutes away.`,
      `🕒 Your bus is 10 minutes away.`,
      `🚨 Your bus is 2 minutes away.`,
      `📍 Your bus has reached ${busInfo.busStop}.`,
    ];

    let index = 0;
    setWaitMessage(''); // clear wait message when notify starts

    const interval = setInterval(() => {
      setNotifyMessage(messages[index]);
      index++;

      if (index === messages.length) {
        clearInterval(interval);
      }
    }, 4000); // shows a new message every 10 seconds
  };

  const handleWait = () => {
    setWaitMessage('✅ Driver has been notified to wait for you at the stop.');
  };

  return (
    <div className="bus-route-container">
      <h2>🚌 My Bus Route</h2>
      <div className="bus-route-content">
        {/* LEFT INFO CARD */}
        <div className="bus-card">
          <p><strong>Bus Number:</strong> {busInfo.busNumber}</p>
          <p><strong>Route:</strong> {busInfo.routeFrom} → {busInfo.routeTo}</p>
          <p><strong>Pickup Location:</strong> {busInfo.busStop}</p>
          <p><strong>Estimated Arrival:</strong> {busInfo.arrivalTime}</p>
          <hr />
          <p><strong>Driver Name:</strong> {busInfo.driverName}</p>
          <p><strong>Driver Contact:</strong> {busInfo.driverPhone}</p>
        </div>

        {/* RIGHT MAP + BUTTONS */}
        <div className="map-section">
          <div className="map-placeholder">[🗺️ Live Map Placeholder]</div>

          <div className="btn-group">
            <button className="btn notify" onClick={handleNotify}>Notify Me</button>
            <button className="btn wait" onClick={handleWait}>Wait For Me</button>
          </div>

          {/* Separate Messages */}
          {notifyMessage && (
            <div className="notification">{notifyMessage}</div>
          )}
          {waitMessage && (
            <div className="notification wait-msg">{waitMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyBusRoute;
