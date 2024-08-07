// App.js
import React from 'react';
import GetOfferBtn from '../GetOfferBtn/GetOfferBtn';
import AnimateCounterLeader from '../Counter/AnimateCounterLeader';

import './HeroSectionLeader.css';

function HeroSectionLeader () {
  return (
    <div className="clippergoat-app-header">
      <HeroLeader />
    </div>
  );
}

export default HeroSectionLeader;



function HeroLeader () {
  return (
<>
<section className="clippergoat-hero-leader">

<AnimateCounterLeader targetDate="2024-08-31T23:59:59" />  

<div className="leader-getoffer-btn">
  <button className='clippergoat-cta'>Become an Affiliate</button>
</div>
<div>
     </div>   </section>

</>
  );
}