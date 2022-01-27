import React from "react";
import "./facerecognition.css";

function FaceRecognition({ imageUrl, faceBox, imgHeight }) {
  return (
    <div className="facerec__facerecognition flex__box section__padding">
      <img id="inputimage" alt="" src={imageUrl} />
      <div
        className="facerec__facerecognition-box"
        style={{ height: imgHeight }}
      >
        <div
          className="bounding-box"
          style={{
            top: faceBox.topRow,
            right: faceBox.rightCol,
            bottom: faceBox.bottomRow,
            left: faceBox.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
}

export default FaceRecognition;
