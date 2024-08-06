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
            Unlock Endless Virality with 
            ClipperGoat!
            <br />
            <h4 className="clippergoat-price">For just $120 </h4>
          </span>
        </h1>
        <p className="clippergoat-hero-subtitle">
          Repurpose your most viral clips 1000 times a month using our AI-powered Short Form Editor. Perfect for any industry, ClipperGoat AI transforms your content into fresh, engaging videos in minutes.
        </p>
        <button className="clippergoat-cta cta-hero-1">Get Started!</button>
       </div>
       <div className="clipper-hero-right ">

       <div className="landing-counter-container">

<AnimateCounter targetDate="2024-08-31T23:59:59" />  
<div className='clippergoat-cta-div'>

            <button className="clippergoat-cta cta-hero-2">Challenge Accepted</button>
        </div>
         
          </div>
   
       </div>
      </section>
    </>
  );
}

export default HeroSectionLandingHero;






