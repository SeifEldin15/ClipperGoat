// App.js
import React from 'react';
import GetOfferBtn from '../GetOfferBtn/GetOfferBtn';
import AnimateCounter from '../Counter/Counter';

import './HeroSectionLanding.css';

function HeroSectionLanding() {
  return (
    <div className=" ">
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
        <span className="clippergoat-highlight glow-text-test">Unlock 
Endless Virality
with <br />ClipperGoat!

       <br /></span>
        {/* <span className="clippergoat-highlight glow-text-test">ClipperGoat!</span> */}
      </h1>
      <p className="clippergoat-hero-subtitle ">Repurpose your most viral clips 1000 times a month using our AI-powered Short Form Editor. Perfect for any industry, ClipperGoat AI transforms your content into fresh, engaging videos in minutes.</p>
      <button className="clippergoat-cta">Get Started!</button>

<div>
  <div className="landing-counter-container">

<AnimateCounter targetDate="2024-08-31T23:59:59" />  
  </div>
    <div className="clippergoat-pricing">
      <h2 className="clippergoat-price">For just $120<span className="clippergoat-price-period">/month</span></h2>
      <p className="clippergoat-price-description">repurpose your most viral content 1000’s of times a month. Experience the ultimate content transformation and boost your reach effortlessly!"
      </p>
      <button className="clippergoat-cta">Challenge</button>
      <ul className="clippergoat-features">
        <li className="clippergoat-feature-item">Great for ANY INDUSTRY</li>
        <li className="clippergoat-feature-item">IDEAL for short form marketing</li>
        <li className="clippergoat-feature-item">Use for Reels, Shorts, and Toks</li>
        <li className="clippergoat-feature-item">Use on EVERY PLATFORM</li>
      </ul>
    </div> </div>   </section>
</>
  );
}