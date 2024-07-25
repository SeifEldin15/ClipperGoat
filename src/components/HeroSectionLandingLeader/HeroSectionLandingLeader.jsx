// App.js
import React from 'react';
import GetOfferBtn from '../GetOfferBtn/GetOfferBtn';
import AnimateCounterLeader from '../Counter/AnimateCounterLeader';

import './HeroSectionLandingLeader.css';

function HeroSectionLanding() {
  return (
    <div className="clippergoat-app-header">
      <HeroSectionLandingHero />
    </div>
  );
}

export default HeroSectionLanding;



// Hero.js
function HeroSectionLandingHero() {
  return (
<>
<section className="clippergoat-hero-leader">

<AnimateCounterLeader targetDate="2024-08-31T23:59:59" />  

<div className="leader-getoffer-btn"><GetOfferBtn />
</div>
<div>
     </div>   </section>

</>
  );
}