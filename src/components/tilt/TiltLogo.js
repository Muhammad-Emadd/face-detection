import React from "react";

import Tilt from "react-parallax-tilt";
import "./ParallaxEffect.css";

const TiltLogo = ({ logo }) => (
  <Tilt
    className="parallax-effect-glare-scale flex__box"
    perspective={400}
    scale={1.3}
  >
    <div className="inner-element flex__box">
      <img src={logo} style={{ width: 50 }} alt="logo" />
    </div>
  </Tilt>
);

export default TiltLogo;
