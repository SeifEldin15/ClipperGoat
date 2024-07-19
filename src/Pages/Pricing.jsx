import React from 'react';
import './Privacy.css';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import PricingSection from '../components/PricingSection/PricingSection'
import ReviewSlider from '../components/ReviewSlider/ReviewSlider'
import LogoSlideshow from '../components/LogoSlideshow/LogoSlideshow'

const Pricing = () => {
  return (
    <div>
         <Navbar />
         <div className='Container-Spacing'>
         <PricingSection />
         </div>
         <LogoSlideshow />
         <ReviewSlider />
          <Footer />

    </div>
  )
}

export default Pricing
