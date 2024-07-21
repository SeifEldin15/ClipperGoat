import React from 'react';
import './InfoCard.css';

const InfoCard = () => {
  return (
    <div className="financial-freedom">
      <div className="content">
        <h1>Financial Freedom Awaits</h1>
        <p>
          Once you're inside Active Income, you get instant access to everything
          that finally puts you on the path to financial freedom.
        </p>
        <button className="get-started">Get started</button>
        <p className="lock-in">
          <span className="icon">&#9201;</span> Lock in your membership spot today.
        </p>
      </div>
      <div className="images">
        {/* <div className="video-call"></div>
        <div className="mobile-apps"></div>
        <div className="chat"></div> */}
      </div>
    </div>
  );
};

export default InfoCard;