import React, { useState } from "react";
import "./ButtonToTop.css";

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <button
      className={`button-to-top ${isVisible ? "visible" : ""}`}
      onClick={handleClick}
    >
      <i class="fa-regular fa-arrow-up"></i> 
    </button>
  );
};

export default ButtonToTop;