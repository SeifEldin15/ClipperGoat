// LeaderboardHeroSection.js
import React from 'react';
import AnimateCounterLeader from '../Counter/AnimateCounterLeader';
import StartClippingBtn from '../StartClippingBtn/StartClippingBtn';

import './HeroSectionLeader.css';

function HeroSectionLeader() {
  return (
    <div className="clippergoat-app-header">
      <LeaderboardHero />
    </div>
  );
}

export default HeroSectionLeader;

function LeaderboardHero() {
  return (
    <>
      <section className="clippergoat-leaderboard-hero">
        <AnimateCounterLeader targetDate="2024-08-31T23:59:59" />
        <div className="leaderboard-getoffer-btn">
          <StartClippingBtn
            style={{ marginTop: '30px' }}
            text="Become an Affiliate"
            to="/reviving-clips"
          />
        </div>
        <div>
        </div>
      </section>
    </>
  );
}