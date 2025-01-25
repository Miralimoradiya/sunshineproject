import React from "react";

const Section3 = ({ currentIndex, goToNext, goToPrevious, numbers }) => {
  return (
    <div className="project1-section3">
      <div className="downsec">
        <p className="row-per-page">Row per Page:</p>
        <select name="" id="" className="selectbox">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>

      <div className="navigation">
        <button onClick={goToPrevious}>&lt;</button>
        <div className="number-display">
          {numbers.map((number, index) => (
            <span key={index} className={index === currentIndex ? "active" : "inactive"}>
              {number}
            </span>
          ))}
        </div>
        <button onClick={goToNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Section3;
