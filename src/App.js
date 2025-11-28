import React, { useState, useEffect } from "react";
import { NotificationProvider } from "./context/NotificationContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import StudentNavbar from "./components/StudentNavbar";
import ParentNavbar from "./components/ParentNavbar";
import Sidebar from "./components/Sidebar";
import StudentSidebar from "./components/StudentSidebar";
import ParentSidebar from "./components/ParentSidebar";
import DriverRoute from "./components/Driver/DriverRoute";
import DriverNavbar from "./components/Driver/DriverNavbar";
import DriverSidebar from "./components/Driver/DriverSidebar";



//Pages
import Dashboard from "./Pages/Dashboard";
import StudentDashboard from "./Pages/StudentDashboard";
import ParentDashboard from "./Pages/ParentDashboard";
import MyAttendance from "./Pages/MyAttendance";
import MyBusRoute from "./Pages/MyBusRoute";
import MyProfile from "./Pages/MyProfile";
import ChildrenAttendance from "./Pages/ChildrenAttendance";
import ChildrenBusRoute from "./Pages/ChildrenBusRoute";
import ParentProfile from "./Pages/ParentProfile";
import TeacherSettings from "./Pages/TeacherSettings";
import TeacherBusTracking from "./Pages/TeacherBusTracking";
import TeacherReports from "./Pages/TeacherReports";
import StudentManagement from "./Pages/StudentManagement";
import DriverDashboard from "./Pages/DriverDashboard";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  const renderNavbar = () => {
    switch (user?.role) {
      case "teacher":
        return <Navbar />;
      case "student":
        return <StudentNavbar />;
      case "parent":
        return <ParentNavbar />;
      case "driver":
        return <DriverNavbar driverName={user?.email || "Driver"} onLogout={handleLogout} />;
      default:
        return null;
    }
  };

  const renderDashboard = () => {
    switch (user?.role) {
      case "teacher":
        return <Dashboard />;
      case "student":
        return <StudentDashboard />;
      case "parent":
        return <ParentDashboard />;
      case "driver":
        return <DriverDashboard />;
      default:
        return <div>Unauthorized</div>;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const renderSidebar = () => {
    switch (user?.role) {
      case "teacher":
        return <Sidebar onLogout={handleLogout} />;
      case "student":
        return <StudentSidebar onLogout={handleLogout} />;
      case "parent":
        return <ParentSidebar onLogout={handleLogout} />;
      case "driver":
        return <DriverSidebar />; 
      default:
        return null;
    }
  };

  return (
     <NotificationProvider> 
    <Router>
      {!user ? (
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <div>
          {renderNavbar()}
          <div style={{ display: "flex", height: "calc(100vh - 70px)" }}>
            {renderSidebar()}
            <main
              style={{
                flex: 1,
                padding: "20px",
                backgroundColor: "#f9fafb",
                overflow: "auto",
              }}
            >
              <Routes>
                <Route path="/" element={renderDashboard()} />
                <Route path="/myattendance" element={<MyAttendance />} />
                <Route path="/mybus" element={<MyBusRoute />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/attendance" element={<ChildrenAttendance />} />
                <Route path="/bus" element={<ChildrenBusRoute />} />
                <Route path="/profile" element={<ParentProfile />} />
                <Route path="/settings" element={<TeacherSettings />} />
                <Route path="/bustracking" element={<TeacherBusTracking />} />
                <Route path="/reports" element={<TeacherReports />} />
                <Route path="/st-attendance" element={<StudentManagement />} />
                <Route path="/driver/*" element={<DriverRoute><DriverDashboard /></DriverRoute>} />
              </Routes>
             
            </main>
          </div>
        </div>
      )}
    </Router>
      </NotificationProvider>
  );
}

export default App;
