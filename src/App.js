import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Login from './components/Login';
import Navbar from './components/Navbar';
import StudentNavbar from './components/StudentNavbar';
import ParentNavbar from './components/ParentNavbar';
import Sidebar from './components/Sidebar';
import StudentSidebar from './components/StudentSidebar';
import ParentSidebar from './components/ParentSidebar';

//Pages
import Dashboard from './Pages/Dashboard';
import StudentDashboard from './Pages/StudentDashboard';
import ParentDashboard from './Pages/ParentDashboard';

function App() {
  
  const [user, setUser] = useState(null);          // ✅ This was missing
  const [loading, setLoading] = useState(true);    // For startup

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
     setLoading(false); // wait for localStorage check
  }, []);

  const renderNavbar = () => {
    switch (user?.role) {
      case 'teacher': return <Navbar />;
      case 'student': return <StudentNavbar />;
      case 'parent': return <ParentNavbar />;
      default: return null;
    }
  };


  const renderDashboard = () => {
    switch (user?.role) {
      case 'teacher': return <Dashboard />;
      case 'student': return <StudentDashboard />;
      case 'parent': return <ParentDashboard />;
      default: return <div>Unauthorized</div>;
    }
  };
  const handleLogout = () => {
  localStorage.removeItem('user');
  setUser(null); // log out
};
  const renderSidebar = () => {
  switch (user?.role) {
    case 'teacher': return <Sidebar onLogout={handleLogout} />;
    case 'student': return <StudentSidebar onLogout={handleLogout} />;
    case 'parent': return <ParentSidebar onLogout={handleLogout} />;
    default: return null;
  }
};

  return (
    <Router>
      {!user ? (
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <div>
          {renderNavbar()}
          <div style={{ display: 'flex', minHeight: '100vh' }}>
            {renderSidebar()}
            <main style={{ flex: 1, padding: '20px', backgroundColor: '#f9fafb' }}>
              <Routes>
                <Route path="/" element={renderDashboard()} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        </div>
      )}
    </Router>
  );
 

}


export default App;
