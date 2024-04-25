import React from 'react';
import Navbar from '../navbar/Navbar';
import TopScreen from '../topscreen/TopScreen';
import SolLudi from '../SolLudi/SolLudi';
import MidScreen from '../midScreen/MidScreen';
import Contact from '../contact/Contact';

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

