// App.js
import React from 'react';
import AnimateCounterLeader from '../Counter/AnimateCounterLeader';
import StartClippingBtn from '../StartClippingBtn/StartClippingBtn';

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
<StartClippingBtn 
  style={{ marginTop: '30px' }} 
  text="Become an Affiliate" 
  to="/reviving-clips" 
/>
</div>
<div>
     </div>   </section>

</>
  );
}