import React, { useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSectionLanding from '../components/HeroSectionLanding/HeroSectionLanding';
import PricingSection from '../components/PricingSection/PricingSection';
import LogoSlideshow from '../components/LogoSlideshow/LogoSlideshow';
import GetOfferBtn from '../components/GetOfferBtn/GetOfferBtn';
import FAQ from '../components/FAQ/FAQ';
import Slider2 from '../components/Slider2/Slider2';
import AnimateCounter from '../components/Counter/Counter';
import SliderOpposite from '../components/SliderTop/SliderOpposite';

import styled from 'styled-components';

 import SliderTop from '../components/SliderTop/SliderTop';
// numbers for ranking 
//counter similar to pricing section
// nft goat edit
// bullet points for infocard
// glow for button on hover
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';
import ScrollProgressBar from './ScrollProgress'; 
import './Home.css';
import homeimg from '../assets/first.png'
const Home = () => {
  const targetRef = useRef(null);
  const items = [
    { name: 'Chloe', description: 'Crypto Investing', content: 'asgdasgs' },
    { name: 'William', description: 'Amazon FBA', content:'asgdasgs' },
    { name: 'Arthur', description: 'Amazon FBA', content: 'asgdasgs' },
    { name: 'Eric', description: 'Amazon FBA', content:'asgdasgs' },
  ];
  const homeItems = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail-forward h-8 w-8 text-secondary"><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>,
      title: "Rip",
      description: "With our best in class email automation, you can automate your entire emailing process.",
      image: homeimg
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail-forward h-8 w-8 text-secondary"><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>,
      title: "Rinse",
      description: "With our best in class email automation, you can automate your entire emailing process.",
      image: homeimg
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail-forward h-8 w-8 text-secondary"><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>,
      title: "Repost",
      description: "With our best in class email automation, you can automate your entire emailing process.",
      image: homeimg
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail-forward h-8 w-8 text-secondary"><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>,
      title: "Repeat",
      description: "With our best in class email automation, you can automate your entire emailing process.",
      image: homeimg
    },
  ];
  return (
      <>              <div className="starry-background"></div>;

        <Navbar />
        <div>
          <HeroSectionLanding />
          <div className="AnimateCounterHomePhone">

       <section><AnimateCounter targetDate="2024-08-31T23:59:59" />  
       </section>
      </div>
          <div className="challenge-container-phone">
          <div className='challenge-card '>
          <h2 className="clippergoat-price">$120<span className="clippergoat-challenge-period">/month</span></h2>
      <p className="clippergoat-price-description">With ClipperGoat you can repurpose your most viral content 1000 times a month! Now that's a lot of content!</p>
      <button className="clippergoat-cta">Challenge</button>
      <ul className="clippergoat-features">
        <li className="clippergoat-feature-item">Great for ANY INDUSTRY</li>
        <li className="clippergoat-feature-item">IDEAL for short form marketing</li>
        <li className="clippergoat-feature-item">Use for Reels, Shorts, and Toks</li>
        <li className="clippergoat-feature-item">Use on EVERY PLATFORM</li>
      </ul>
    
  </div>
  
</div>

<div className="spacing-counter">
<SliderTop />
<SliderOpposite />
</div>
          
          <div className="information-container " ref={targetRef}>
  <ScrollProgressBar targetRef={targetRef} />
  <div>
    <div className='information-container-header-div'>
      <h1 className="information-container-header custom-header-title">Unlock Your <span className="glow-text">Full Potential</span></h1>
      <p className="custom-header-subtitle ">Exactly what you can find inside Active Income</p>
    </div>
    {homeItems.map((item, index) => (
      <div className='HomeImgContainer' key={index}>
        <div className='HomeImgContainerHeader'>
          <span>{item.icon}</span>
          <div>
            <p className='HomeImgContainerHeaderFirst'>{item.title}</p>
            <p className='HomeImgContainerHeaderSecond'>{item.description}</p>
          </div>
          <div className="getofferlarge">
          <GetOfferBtn />
          </div>

        </div>
        <div className="image-box-container">
          <div className="image-box">
            <img src={item.image} alt="" />
            
          </div>
          
        </div>
        <div className="getoffersmall">
          <GetOfferBtn />
          </div>

      </div>
    ))}
  </div>
</div>        <LogoSlideshow />     <div>
      <h1 className="information-container-header custom-header-title">Unlock Your <span className="glow-text">Full Potential</span></h1>
      <p className="custom-header-subtitle ">Exactly what you can find inside Active Income</p>
    </div>
<Slider2/>
<div className='Container-Spacing'></div>
<PricingSection />
          <Slider items={items} />
        </div>
        <div>
        <div className='Container-Spacing'>
      <h1 className="information-container-header custom-header-title Container-Spacing">Unlock Your <span className="glow-text">Full Potential</span></h1>
      <p className="custom-header-subtitle ">Exactly what you can find inside Active Income</p>
    </div>
    <FAQ />

        </div>

        <Footer />
      </>
    );
  }

export default Home;
