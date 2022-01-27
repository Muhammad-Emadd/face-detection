import React from "react";
import "./navigation.css";

function Navigation({ onRouteChange, isSigned }) {
  if (isSigned) {
    return (
      <nav className=" facerec__navbar">
        <div className="facerec__navbar-content flex__box">
          <p className="btn__one" onClick={() => onRouteChange("signin")}>
            Sign Out
          </p>
        </div>
      </nav>
    );
  } else if (isSigned === false) {
    return (
      <nav className=" facerec__navbar">
        <div className="facerec__navbar-content flex__box">
          <p className="btn__one" onClick={() => onRouteChange("register")}>
            Sign Up
          </p>
          <p className="btn__one" onClick={() => onRouteChange("signin")}>
            Sign In
          </p>
        </div>
      </nav>
    );
  }
}

export default Navigation;
