import React from 'react'
import radiengoat from "../../assets/raiden goat.png"
import "./HeroSectionLanding.css"
import AnimatedCounter from '../Counter/Counter'
import GetOfferBtn from '../GetOfferBtn/GetOfferBtn'

const HeroSectionLanding = () => {
  return (
    <div className='HeroSectionLanding'>      <div className="overlay"></div>

        <AnimatedCounter targetValue={100000} />
        <img src={radiengoat} alt="" />
        <div className="lightning-container">
            <div className="lightning"></div>
        </div>
        <div className="HeroSectionContent">
        <h1>CLIPPERGOAT</h1>
        <h2>$10 million dollar challenge</h2>
        </div>
    </div>
  )
}

export default HeroSectionLanding