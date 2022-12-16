import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Buttons({ swipeLeft, swipeRight }) {
  return (
    <>
      <button className="prev" onClick={swipeLeft}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={swipeRight}>
        <FiChevronRight />
      </button>
    </>
  );
}

export default Buttons;
