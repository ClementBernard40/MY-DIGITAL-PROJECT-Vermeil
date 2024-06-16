import React from 'react';
import Navbar from '../dekstop/navbar/Navbar';
import MobPaiement from './MobPaiement'
import Paiement from './Paiement';


import MobNavbar from '../mobile/navbar/MobNavbar';
function Achat() {
    if (window.innerWidth < 880 ) {
        return (
        <div>
            <MobNavbar />
            <MobPaiement />
        </div>
        )
    } else {
        return (
            <div>
                <Navbar />
                <Paiement/>
            </div>
          );
    }
    }
    

export default Achat;

