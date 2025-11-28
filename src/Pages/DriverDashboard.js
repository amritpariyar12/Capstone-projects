import React, { useState, useEffect } from "react";
import DriverLayout from "../components/Driver/DriverLayout";
import DriverMap from "../components/Driver/DriverMap";
import { getDriverBusInfo, updateLocation, sendNotification } from '../api/driverApi';

function DriverDashboard() {
  const [bus, setBus] = useState(null);
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [driverName, setDriverName] = useState("John Doe"); // replace with real login name

  useEffect(() => {
    async function fetchData() {
      const data = await getDriverBusInfo();
      setBus(data);
      setLocation({ lat: data.current_lat, lng: data.current_lng });
    }
    fetchData();
  }, []);

  const handleLocationUpdate = async () => {
    await updateLocation(location);
    alert("📍 Location updated!");
  };

  const handleSendNotification = async (stopId) => {
    await sendNotification(stopId, "🚌 Bus is near your stop. Please get ready!");
    alert("✅ Notification sent to parents/students!");
  };

  return (
    <DriverLayout driverName={driverName}>
      <h2>Bus #{bus?.number} - {bus?.name}</h2>
      <DriverMap busLocation={location} stops={bus?.stops} />
      <button onClick={handleLocationUpdate}>Update Location</button>
      <button onClick={() => handleSendNotification(bus?.stops[0]?.id)}>
        Send Near Stop Notification
      </button>
    </DriverLayout>
  );
}

export default DriverDashboard;
