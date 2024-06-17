import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MobileLandingPage from "./component/MobileLandingPage/MobileLandingPage";
import DesktopLandingPage from "./component/DesktopLandingPage/DesktopLandingPage";
import Validation from "./component/achat/Validation";
import "./App.css";
import Achat from "./component/achat/achat";
import Valide from "./component/achat/Valide";
import MentionLegaleScreen from "./component/MentionLegaleScreen";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesktopLandingPage />} />
        <Route path="/mobile" element={<MobileLandingPage />} />
        <Route path="/desktop" element={<DesktopLandingPage />} />
        <Route path="/achat" element={<Achat />} />
        <Route path="/validation" element={<Validation />} />
        <Route path="/valide" element={<Valide />} />
        <Route path="/mentionsLegales" element={<MentionLegaleScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
