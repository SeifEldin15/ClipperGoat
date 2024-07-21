import React from 'react'
import radiengoat from "../../assets/raiden goat.png"
import "./HeroSectionLanding.css"
import AnimatedCounter from '../Counter/Counter'
import GetOfferBtn from '../GetOfferBtn/GetOfferBtn'

const HeroSectionLanding = () => {
  return (
    <div className='HeroSectionLanding121'>      <div className="overlay"></div>

<AnimatedCounter targetDate="2024-08-31T23:59:59" />        <img src={radiengoat} alt="" />
  
        <div className="HeroSectionContent121">
        <h1>CLIPPERGOAT</h1>
        <h2>$10 million dollar challenge</h2>
        </div>
    </div>
  )
}

export default HeroSectionLanding