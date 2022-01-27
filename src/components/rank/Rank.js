import React from "react";
import "./rank.css";

function Rank({ name, entries }) {
  return (
    <div className="facerec__rank">
      <div>
        <h3 className="gradient__text">{name},You Used The AI :</h3>
      </div>
      <div>
        <h3 className="gradient__text"># {entries} times </h3>
      </div>
    </div>
  );
}

export default Rank;
