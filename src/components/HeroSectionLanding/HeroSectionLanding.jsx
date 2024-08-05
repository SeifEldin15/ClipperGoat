import React from 'react';

import './HeroSectionLanding.css';

import AnimateCounter from '../Counter/Counter';


function HeroSectionLandingHero() {
  return (
    <>
      <section className="clippergoat-hero">
       <div className="clipper-hero-left">
       <h1 className="clippergoat-hero-title">
          <span className="clippergoat-highlight glow-text">
            Unlock Endless Virality with <br />
            ClipperGoat!
            <br />
            <h4 className="clippergoat-price">For just $120 </h4>
          </span>
        </h1>
        <p className="clippergoat-hero-subtitle">
          Repurpose your most viral clips 1000 times a month using our AI-powered Short Form Editor. Perfect for any industry, ClipperGoat AI transforms your content into fresh, engaging videos in minutes.
        </p>
        <button className="clippergoat-cta">Get Started!</button>
       </div>
       <div className="clipper-hero-right">

       <div className="landing-counter-container">

<AnimateCounter targetDate="2024-08-31T23:59:59" />  
<div className="challenge-card ">
            <h2 className="clippergoat-price">
              $120<span className="clippergoat-challenge-period">/month</span>
            </h2>
            <p className="clippergoat-price-description">
              With ClipperGoat you can repurpose your most viral content 1000
              times a month! Now that's a lot of content!
            </p>
            <button className="clippergoat-cta">Challenge</button>
            <ul className="clippergoat-features">
              <li className="clippergoat-feature-item">
                Great for ANY INDUSTRY
              </li>
              <li className="clippergoat-feature-item">
                IDEAL for short form marketing
              </li>
              <li className="clippergoat-feature-item">
                Use for Reels, Shorts, and Toks
              </li>
              <li className="clippergoat-feature-item">
                Use on EVERY PLATFORM
              </li>
            </ul>
          </div>
  </div>
   
       </div>
      </section>
    </>
  );
}

export default HeroSectionLandingHero;






