// components/ScrollToTopLink.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ScrollToTopLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
    window.scrollTo(0, 0);
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default ScrollToTopLink;
