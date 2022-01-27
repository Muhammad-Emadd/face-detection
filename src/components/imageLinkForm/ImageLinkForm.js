import React from "react";
import "./imagelinkform.css";

function ImageLinkForm({ onInputChange, onSubmit }) {
  return (
    <div className="facerec__imagelink flex__box section__margin">
      <div className="facerec__imagelink-content">
        <p>{`This magic Brain will detect faces in your pictures. Give it a try`}</p>
      </div>
      <div className="facerec__imagelink-input flex__box form">
        <input onChange={onInputChange} type="text" />
        <button onClick={onSubmit} className="grow btn__two">
          Detect
        </button>
      </div>
    </div>
  );
}

export default ImageLinkForm;
