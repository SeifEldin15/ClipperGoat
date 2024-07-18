import React, { useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSectionLanding from '../components/HeroSectionLanding/HeroSectionLanding';
import PricingSection from '../components/PricingSection/PricingSection';
import LogoSlideshow from '../components/LogoSlideshow/LogoSlideshow';
import SliderTop from '../components/SliderTop/SliderTop';

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
      title: "Email Automation",
      description: "With our best in class email automation, you can automate your entire emailing process.",
      image: homeimg
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail-forward h-8 w-8 text-secondary"><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>,
      title: "Email Automation",
      description: "With our best in class email automation, you can automate your entire emailing process.",
      image: homeimg
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail-forward h-8 w-8 text-secondary"><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>,
      title: "Email Automation",
      description: "With our best in class email automation, you can automate your entire emailing process.",
      image: homeimg
    },
    // Add more items here
  ];
  return (
      <>
        <Navbar />
        <div>
          <HeroSectionLanding />
          <header className="home-header ">
            <div className="feature-bar highlight glow-text">
              <span><i className="fa-regular fa-clock"></i> IMMEDIATE ACCESS</span>
              <span><i className="fa-solid fa-right-from-bracket"></i> ALWAYS UP-TO-DATE</span>
              <span><i className="fa-regular fa-badge-check"></i> 14-DAY GUARANTEE</span>
              <span><i className="fa-regular fa-lock"></i> SECURE PURCHASE</span>
            </div>
          </header>
          <SliderTop />
          <div className="information-container Container-Spacing-Lg" ref={targetRef}>
  <ScrollProgressBar targetRef={targetRef} />
  <div>
    <div>
      <p className="custom-header-subtitle glow-text">Exactly what you can find inside Active Income</p>
      <h1 className="information-container-header custom-header-title">Unlock Your <span className="glow-text">Full Potential</span></h1>
    </div>
    {homeItems.map((item, index) => (
      <div className='HomeImgContainer' key={index}>
        <div className='HomeImgContainerHeader'>
          <span>{item.icon}</span>
          <div>
            <p className='HomeImgContainerHeaderFirst'>{item.title}</p>
            <p className='HomeImgContainerHeaderSecond'>{item.description}</p>
          </div>
        </div>
        <div className="image-box-container">
          <div className="image-box">
            <img src={item.image} alt="" />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
          <Slider items={items} />
        </div>
        <PricingSection />
        <LogoSlideshow /> 
        <Footer />
      </>
    );
  }

export default Home;
