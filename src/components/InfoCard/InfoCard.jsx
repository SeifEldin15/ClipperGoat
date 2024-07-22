import React from 'react';
import './InfoCard.css';

const InfoCard = () => {
  return (
    <div className="financial-freedom">
      <div className="content">
        <h1>Financial Freedom Awaits</h1>
        <p>
          <span className="check-circle">✓</span> Once you're inside Active Income, you get instant access to everything
        </p>
        <p>
          <span className="check-circle">✓</span> that finally puts you on the path to financial freedom.
        </p>
        <button className="get-started">Get started</button>
      </div>
      <div className="images">
      </div>
    </div>
  );
};

export default InfoCard;