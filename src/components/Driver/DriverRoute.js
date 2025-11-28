import React from "react";
import { Navigate } from "react-router-dom";

function DriverRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const isDriverLoggedIn = user?.role === "driver"; // ✅ fixed

  if (!isDriverLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default DriverRoute;
