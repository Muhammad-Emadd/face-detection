import React from "react";
import TiltLogo from "../tilt/TiltLogo";
import brain from "./face.webp";
import "./logo.css";

function Logo() {
  return (
    <div>
      <div className="facerec__logo">
        <TiltLogo logo={brain} />
      </div>
    </div>
  );
}

export default Logo;
