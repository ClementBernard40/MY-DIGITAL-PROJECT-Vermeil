import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MobileLandingPage from './component/MobileLandingPage/MobileLandingPage';
import DesktopLandingPage from './component/DesktopLandingPage/DesktopLandingPage';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const redirectToMobile = () => {
    return <Navigate to="/mobile" />;
  };

  const redirectToDesktop = () => {
    return <Navigate to="/desktop" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isMobile ? redirectToMobile() : redirectToDesktop()} />
        <Route path="/mobile" element={<MobileLandingPage />} />
        <Route path="/desktop" element={<DesktopLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
