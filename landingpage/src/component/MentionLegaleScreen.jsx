import React from "react";
import Navbar from "./dekstop/navbar/Navbar";
import MobNavbar from "./mobile/navbar/MobNavbar";
import MentionsLegales from "./MentionsLegales";

function MentionLegaleScreen() {
  if (window.innerWidth < 880) {
    return (
      <div>
        <MobNavbar />
        <MentionsLegales />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <MentionsLegales />
      </div>
    );
  }
}

export default MentionLegaleScreen;
