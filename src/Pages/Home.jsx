import React, { useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSectionLanding from '../components/HeroSectionLanding/HeroSectionLanding';
import PricingSection from '../components/PricingSection/PricingSection';
import LogoSlideshow from '../components/LogoSlideshow/LogoSlideshow';
import GetOfferBtn from '../components/GetOfferBtn/GetOfferBtn';
import FAQ from '../components/FAQ/FAQ';
// import Slider2 from '../components/Slider2/Slider2';
import AnimateCounter from '../components/Counter/Counter';
// import SliderOpposite from '../components/SliderTop/SliderOpposite';
// import VideoBackground from '../components/VideoBackground/VideoBackground';


import imgs21 from '../assets/New folder/influncers bottom rown/Adin Ross.webp';
import imgs22 from '../assets/New folder/influncers bottom rown/Andrew Tate.webp';
import imgs4 from '../assets/New folder/influncers bottom rown/drake .mp4';
import imgs24 from '../assets/New folder/influncers bottom rown/bradly Martin .webp';
import imgs241 from '../assets/New folder/influncers bottom rown/Fresh.webp';
import imgs27 from '../assets/New folder/influncers bottom rown/HUAK THUA.mp4';
import imgs28 from '../assets/New folder/influncers bottom rown/Ishowspeed.mp4';
import imgs239 from '../assets/New folder/influncers bottom rown/KaiCent.webp';
import imgs210 from '../assets/New folder/influncers bottom rown/Miami Swim week.mp4';
import imgs211 from '../assets/New folder/influncers bottom rown/Neon.mp4';
import imgs212 from '../assets/New folder/influncers bottom rown/Mr Beast.webp';
import imgs213 from '../assets/New folder/influncers bottom rown/Russel Brunson.webp';


import imgs1 from '../assets/New folder/Influncers Top row/Alex Hormozi.webp';
import imgs2 from '../assets/New folder/Influncers Top row/Donald Trump .webp';
import imgs3 from '../assets/New folder/Influncers Top row/joe Rogan.mp4';
import imgs3224 from '../assets/New folder/Influncers Top row/Jack Doherty .webp';
import imgs5 from '../assets/New folder/Influncers Top row/Elon Musk.webp';
import imgs6 from '../assets/New folder/Influncers Top row/myron Gains.mp4';
import imgs7 from '../assets/New folder/Influncers Top row/Nija.webp';
import imgs8 from '../assets/New folder/Influncers Top row/Sophie Rain.mp4';
import imgs9 from '../assets/New folder/Influncers Top row/Stevewilldoit.mp4';
import imgs10 from '../assets/New folder/Influncers Top row/Suga Sean Omalley.webp';
import imgs11 from '../assets/New folder/Influncers Top row/XQC.mp4';
import imgs12 from '../assets/New folder/Influncers Top row/Yodit Yemane .webp';

 import SliderTop from '../components/SliderTop/SliderTop';
// numbers for ranking 
//counter similar to pricing section
// nft goat edit
// bullet points for infocard
// glow for button on hover
// import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';
import ScrollProgressBar from './ScrollProgress'; 
import './Home.css';
import homeimg from '../assets/first.png'
const Home = () => {

  const INFLUENCERS = [

    { src: imgs212, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs210, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs28, title: '@124124', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs241, title: '@124124', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs24, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs4, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs22, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs21, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs27, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs239, title: '@21412', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs211, title: '@41241', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs213, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
  ];
const IMAGES = [
  { src: imgs8, title: '@Sophie Rain', description: "Social media influencer." },
  { src: imgs1, title: '@Alex Hormozi', description: "Business growth strategist and entrepreneur." },
  { src: imgs2, title: '@Donald Trump', description: "45th President of the United States." },
  { src: imgs3, title: '@Joe Rogan', description: "Comedian, podcast host, and UFC commentator." },
  { src: imgs3224, title: '@Jack Doherty', description: "YouTuber and social media personality." },
  { src: imgs5, title: '@Elon Musk', description: "CEO of SpaceX and Tesla." },
  { src: imgs6, title: '@Myron Gains', description: "Fitness coach and podcast host." },
  { src: imgs7, title: '@Ninja', description: "Professional gamer and streamer." },
  { src: imgs9, title: '@Stevewilldoit', description: "YouTuber known for extreme challenges." },
  { src: imgs10, title: '@Suga Sean OMalley', description: "UFC fighter and athlete." },
  { src: imgs12, title: '@Yodit Yemane', description: "Model and Instagram influencer." },
  { src: imgs11, title: '@XQC', description: "Popular Twitch streamer and former Overwatch pro." },
];


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
      icon: <i class="fa-regular fa-paper-plane"></i>,
      title: "Repost",
      description: "With our best in class email automation, you can automate your entire emailing process.",
      image: homeimg
    },
    {
      icon: <i class="fa-solid fa-repeat"></i>,
      title: "Repeat",
      description: "With our best in class email automation, you can automate your entire emailing process.",
      image: homeimg
    },
  ];
  return (
      <>  
      
                  <div className="starry-background"></div>;

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

<div className="Container-Spacing">
<div>
      <h1 className="information-container-header custom-header-title">Unlock Your <span className="glow-text">Full Potential</span></h1>
      <p className="custom-header-subtitle ">Exactly what you can find inside Active Income</p>
    </div>
<SliderTop images={IMAGES} direction = 'left' />
<SliderTop images={INFLUENCERS} direction = 'right' />

</div>
          
          <div className="information-container Container-Spacing-LG" ref={targetRef}>
  <ScrollProgressBar targetRef={targetRef} />
  <div className=''>
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
            <img loading="lazy" src={item.image} alt="" />
            
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
{/* <Slider2/> */}
<div className='Container-Spacing'></div>
<PricingSection />
          {/* <Slider items={items} /> */}
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
