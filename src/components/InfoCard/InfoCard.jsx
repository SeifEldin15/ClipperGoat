import React from 'react';
import './InfoCard.css';
import WhatsApp1 from '../../assets/WhatsApp1.png'
import WhatsApp2 from '../../assets/WhatsApp2.png'
import WhatsApp3 from '../../assets/WhatsApp3.png'

const InfoCard = () => {
  return (
  <>
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
        <img src={WhatsApp1} alt="" />
  
      </div>
    </div>
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
        <img src={WhatsApp2} alt="" />
  
      </div>
    </div>
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
        <img src={WhatsApp3} alt="" />
  
      </div>
    </div>
  </>
  );
};

export default InfoCard;