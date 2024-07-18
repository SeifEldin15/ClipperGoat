import React from 'react'
import HeroSectionLanding from '../components/HeroSectionLanding/HeroSectionLanding'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './Leaderboard.css'
const Leaderboard = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionLanding />
      <div className='LeaderFooter'>
      <div className="PricingSection Container-Spacing">
      <h1 className="custom-header-title">Choose Your <span className="information-container-header-span glow-text">Income Path</span></h1>
     <div className="pricing-container">       
  <div className='pricing-card WEALTH'>
    <p className='pricing-card-header'></p>
    <div className="price"></div>
    <p className='BilledMonthly'><i class="fa-solid fa-credit-card"></i> Billed Monthly</p>
    <button className=''>Get started</button>
    <ul>
    <li>asg</li>
    <li>dsg</li>
    <li>dsg</li>
    <li>dsg</li>
    <li>gregre</li>
    </ul>
  </div>
    </div>
        </div>
      <Footer />
      </div>
    </div>
  )
}

export default Leaderboard
