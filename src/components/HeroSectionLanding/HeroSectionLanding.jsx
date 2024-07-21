// App.js
import React from 'react';
import radiengoat from "../../assets/raiden goat.png"
import GetOfferBtn from '../GetOfferBtn/GetOfferBtn';
import './HeroSectionLanding.css';

function HeroSectionLanding() {
  return (
    <div className="clippergoat-app">
        <div className="overlay"></div>
      <img src={radiengoat} alt="" className='imghero'/>
      <HeroSectionLandingHero />
    </div>
  );
}

export default HeroSectionLanding;



// Hero.js
function HeroSectionLandingHero() {
  return (
<>
<section className="clippergoat-hero">
      <h1 className="clippergoat-hero-title">
        <span className="clippergoat-highlight">ReUse</span><br />
        Your Most Viral Clip<br />
        1000x a month with<br />
        <span className="clippergoat-highlight">ClipperGoat!</span>
      </h1>
      <p className="clippergoat-hero-subtitle">Great for any INDUSTRY!!! Use the AI powered Short Form Editor. Edit 100s of videos in minutes with ClipperGoat AI</p>
<GetOfferBtn />
    <div className="clippergoat-pricing">
      <h2 className="clippergoat-price">$120<span className="clippergoat-price-period">/month</span></h2>
      <p className="clippergoat-price-description">With ClipperGoat you can repurpose your most viral content 1000 times a month! Now that's a lot of content!</p>
      <button className="clippergoat-cta">Challenge</button>
      <ul className="clippergoat-features">
        <li className="clippergoat-feature-item">Great for ANY INDUSTRY</li>
        <li className="clippergoat-feature-item">IDEAL for short form marketing</li>
        <li className="clippergoat-feature-item">Use for Reels, Shorts, and Toks</li>
        <li className="clippergoat-feature-item">Use on EVERY PLATFORM</li>
      </ul>
    </div>    </section>

</>
  );
}