import React from 'react'
import radiengoat from "../../assets/raiden goat.png"
import "./HeroSectionLanding.css"
import AnimatedCounter from '../Counter/Counter'
import GetOfferBtn from '../GetOfferBtn/GetOfferBtn'

const HeroSectionLanding = () => {
  return (
    <div className='HeroSectionLanding'>
        <AnimatedCounter targetValue={100000} />
        <img src={radiengoat} alt="" />
        <div className='overlay'></div>
        <div className="lightning-container">
            <div className="lightning"></div>
        </div>
        <div className="HeroSectionContent">
            <p className="CustomLargeHeader">
                Why CLIPPERGOAT?
            </p>
            <p className="CustomSmallHeader HeroSectionContentP" style={{ maxWidth: '1200px' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia excepturi alias sed Quia excepturi alias sed fuga fugiat offici!
                <br />
                Lorem ipsum dolor sit amet, Quia excepturi alias sed Quia excepturi alias sed fuga fugiat offici!
            </p>
            <GetOfferBtn />
        </div>
    </div>
  )
}

export default HeroSectionLanding