import React from 'react';
import { Link } from 'react-router-dom';
import './StartClipping.css';

const StartClippingBtn = ({ text, to }) => {
  return (
    <Link to={to} className="StartClipping">
      {text}
    </Link>
  );
}

export default StartClippingBtn;
