import React from 'react';
import Navbar from '../dekstop/navbar/Navbar';
import TopScreen from '../dekstop/topscreen/TopScreen';
import SolLudi from '../dekstop/SolLudi/SolLudi';
import MidScreen from '../dekstop/midScreen/MidScreen';
import Contact from '../dekstop/contact/Contact';

function DesktopLandingPage() {
    return (
        <div>
            <Navbar />
            <TopScreen />
            <SolLudi />
            <MidScreen />
            <Contact />
        </div>
      );
}

export default DesktopLandingPage;

