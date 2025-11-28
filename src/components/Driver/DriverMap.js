import React from "react";

function DriverMap({ busLocation, stops }) {
  return (
    <div style={{ height: "400px", background: "#eee", margin: "20px 0", textAlign: "center", lineHeight: "400px" }}>
      🗺️ Map Placeholder: Bus at ({busLocation.lat}, {busLocation.lng})
    </div>
  );
}

export default DriverMap;
