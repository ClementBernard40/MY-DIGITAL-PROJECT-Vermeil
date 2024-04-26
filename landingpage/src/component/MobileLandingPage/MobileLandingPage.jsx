import React from 'react';

import MobContact from '../mobile/contact/MobContact';
import MobNavbar from '../mobile/navbar/MobNavbar';
import MobSolLudi from '../mobile/SolLudi/MobSolLudi';
import MobMidScreen from '../mobile/midScreen/MobMidScreen';
import MobTopScreen from '../mobile/topscreen/MobTopScreen';

function MobileLandingPage() {
    return (
        <div>
            <MobNavbar />
            <MobTopScreen />
            <MobSolLudi />
            <MobMidScreen />
            <MobContact />
        </div>
      );
}

export default MobileLandingPage;

