import React from 'react';
import Navbar from '../dekstop/navbar/Navbar';
import TopScreen from '../dekstop/topscreen/TopScreen';
import SolLudi from '../dekstop/SolLudi/SolLudi';
import MidScreen from '../dekstop/midScreen/MidScreen';
import Contact from '../dekstop/contact/Contact';
import MobContact from '../mobile/contact/MobContact';
import MobMidScreen from '../mobile/midScreen/MobMidScreen';
import MobNavbar from '../mobile/navbar/MobNavbar';
import MobSolLudi from '../mobile/SolLudi/MobSolLudi';
import MobTopScreen from '../mobile/topscreen/MobTopScreen';

function DesktopLandingPage() {
    if (window.innerWidth < 880 ) {
        return (
        <div>
            <MobNavbar />
            <MobTopScreen />
            <MobSolLudi />
            <MobMidScreen />
            <MobContact />
        </div>
        )
    } else {
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
    }
    

export default DesktopLandingPage;

