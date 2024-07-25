import React, { useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSectionLanding from "../components/HeroSectionLanding/HeroSectionLanding";
import PricingSection from "../components/PricingSection/PricingSection";
import LogoSlideshow from "../components/LogoSlideshow/LogoSlideshow";
import GetOfferBtn from "../components/GetOfferBtn/GetOfferBtn";
import FAQ from "../components/FAQ/FAQ";
import Slider2 from "../components/Slider2/Slider2";
import AnimateCounter from "../components/Counter/Counter";
import Slider from "../components/Slider/Slider";
import Adin from "../assets/New folder/influncers bottom rown/Adin Ross.webp";
import Andrew from "../assets/New folder/influncers bottom rown/Andrew Tate.webp";
import drake from "../assets/New folder/influncers bottom rown/drake .mp4";
import bradly from "../assets/New folder/influncers bottom rown/bradly Martin .webp";
import Fresh from "../assets/New folder/influncers bottom rown/Fresh.webp";
import HUAK from "../assets/New folder/influncers bottom rown/HUAK THUA.mp4";
import Ishowspeed from "../assets/New folder/influncers bottom rown/Ishowspeed.mp4";
import KaiCent from "../assets/New folder/influncers bottom rown/KaiCent.webp";
import Miami from "../assets/New folder/influncers bottom rown/Miami Swim week.mp4";
import Neon from "../assets/New folder/influncers bottom rown/Neon.mp4";
import Beast from "../assets/New folder/influncers bottom rown/Mr Beast.webp";
import Brunson from "../assets/New folder/influncers bottom rown/Russel Brunson.webp";
import imgs1 from "../assets/New folder/Influncers Top row/Alex Hormozi.webp";
import imgs2 from "../assets/New folder/Influncers Top row/Donald Trump .webp";
import imgs3 from "../assets/New folder/Influncers Top row/joe Rogan.mp4";
import imgs3224 from "../assets/New folder/Influncers Top row/Jack Doherty .webp";
import imgs5 from "../assets/New folder/Influncers Top row/Elon Musk.webp";
import imgs6 from "../assets/New folder/Influncers Top row/myron Gains.mp4";
import imgs7 from "../assets/New folder/Influncers Top row/Nija.webp";
import imgs8 from "../assets/New folder/Influncers Top row/Sophie Rain.mp4";
import imgs9 from "../assets/New folder/Influncers Top row/Stevewilldoit.mp4";
import imgs10 from "../assets/New folder/Influncers Top row/Suga Sean Omalley.webp";
import imgs11 from "../assets/New folder/Influncers Top row/XQC.mp4";
import imgs12 from "../assets/New folder/Influncers Top row/Yodit Yemane .webp";
import SliderTop from "../components/SliderTop/SliderTop";
import Footer from "../components/Footer/Footer";
import ScrollProgressBar from "./ScrollProgress";
import "./Home.css";
import imageSmall from './radiengoat-small.webp';
import imageMedium from './radiengoat-medium.webp';
import imageLarge from './radiengoat-large.webp';
import homeimg from "../assets/first.webp";
const Home = () => {
  const INFLUENCERS = [
    {
      src: Beast,
      title: "@MrBeast",
      description:
        "Gained popularity through high-budget, philanthropic, and viral YouTube videos.",
    }, 

    {
      src: Brunson,  

      title: "@Russell Brunson",
      description:
        "Used social media to share marketing strategies, building a large online community.",
    },
    {
      src: Ishowspeed,  

      title: "@IShowSpeed",
      description:
        "Built influence through energetic and humorous gaming content on YouTube and Twitch.",
    },
    {
      src: Fresh,  
      title: "@FreshPrinceCeo",
      description:
        "Built influence sharing dating and self-improvement content on social media.",
    },
    {
      src: bradly,  

      title: "@Bradley Martin",
      description:
        " Shared workout routines and fitness tips on social media, promoting his gym business.",
    },
    {
      src: drake, 
      title: "@Drake",
      description:
        "Used Instagram, Twitter, and Kick to promote music, connect with fans, and gambling.",
    },
    {  

      src: Adin,
      title: "@Adin Ross",
      description:
        "Built following by streaming games and live chats with celebrities on Twitch.",
    },
    {
      src: Miami,
      title: "@Miami Swim Week",
      description:  
        "Promoted shows and designers on Instagram and YouTube, creating global buzz.",
    },
    {  
      src: Neon,
      title: "@Neon",
      description:
        "Gained popularity with entertaining gaming content on YouTube and Twitch.",
    },
    {
      src: KaiCent,
      title: "@Kai Cenat",
      description:
        "Grew influence with engaging Twitch and YouTube streams, often collaborating.",
    },
    {  
      src: HUAK,
      title: "@Hauk Thua Girl",
      description:
        "Grew influence with relatable beauty and lifestyle content on Instagram and TikTok..",
    },
    {
      src: Andrew,
      title: "@Andrew Tate",
      description:
        "Used controversial content on Instagram and YouTube to build a large following.",
    },
  ];
  const IMAGES = [
    {
        src: imgs8,
        title: "@Sophie Rain",
        description: "Grew presence by sharing lifestyle, beauty, and travel content on Instagram and TikTok.",
    },
    {
        src: imgs1,
        title: "@Alex Hormozi",
        description: "Business growth strategist and entrepreneur.",
    },
    {
        src: imgs2,
        title: "@Donald Trump",
        description: "45th President of the United States.",
    },
    {
        src: imgs3,
        title: "@Joe Rogan",
        description: "Comedian, podcast host, and UFC commentator.",
    },
    {
        src: imgs3224,
        title: "@Jack Doherty",
        description: "Built influence with daring challenge videos, pranks, and vlogs on YouTube.",
    },
    {
        src: imgs5,
        title: "@Elon Musk",
        description: "CEO of SpaceX and Tesla.",
    },
    {
        src: imgs6,
        title: "@Myron Gaines",
        description: "Grew following with dating advice and lifestyle content on social media.",
    },
    {
        src: imgs7,
        title: "@Ninja",
        description: "Gained massive fame through Fortnite streams on Twitch and YouTube.",
    },
    {
        src: imgs9,
        title: "@SteveWillDoIt",
        description: "Gained popularity through outrageous challenges and stunts on YouTube and Instagram.",
    },
    {
        src: imgs10,
        title: "@Sean O'Malley",
        description: "Used social media to share training routines and fight highlights, connecting with fans.",
    },
    {
        src: imgs12,
        title: "@Yodit Yemane",
        description: "Model and Instagram influencer.",
    },
    {
        src: imgs11,
        title: "@XQC",
        description: "Became one of the most-watched streamers by engaging Twitch audiences with various games.",
    },
];

  const targetRef = useRef(null);
  const items = [
    { name: "Chloe", description: "Crypto Investing", content: "asgdasgs" },
    { name: "William", description: "Amazon FBA", content: "asgdasgs" },
    { name: "Arthur", description: "Amazon FBA", content: "asgdasgs" },
    { name: "Eric", description: "Amazon FBA", content: "asgdasgs" },
  ];
  const homeItems = [
    {
      icon: <i class="fa-regular fa-video-arrow-down-left text-xl"></i>,
      title: "Rip",
      description:
        "With our best in class email automation, you can automate your entire emailing process.",
      image: homeimg,
    },
    {
      icon: <i class="fa-regular fa-hand-sparkles text-xl"></i>,
      title: "Rinse",
      description:
        "With our best in class email automation, you can automate your entire emailing process.",
      image: homeimg,
    },
    {
      icon: <i class="fa-regular fa-paper-plane"></i>,
      title: "Repost",
      description:
        "With our best in class email automation, you can automate your entire emailing process.",
      image: homeimg,
    },
    {
      icon: <i class="fa-solid fa-repeat"></i>,
      title: "Repeat",
      description:
        "With our best in class email automation, you can automate your entire emailing process.",
      image: homeimg,
    },
  ];
  return (
    <>
  <div className="homeheroimg">
  <img
      alt="A captivating image of a radiant goat"
      className="imghero"
      src={imageMedium} // Default image
      srcset={`${imageSmall} 320w, ${imageMedium} 640w, ${imageLarge} 1024w`}
    />
 

  <div className="overlay"></div>   
      <Navbar />         <HeroSectionLanding />
      </div>
      <div>
        <div className="AnimateCounterHomePhone">
          <section>
            <AnimateCounter targetDate="2024-08-31T23:59:59" />
          </section>
        </div>
        <div className="challenge-container-phone">
          <div className="challenge-card ">
            <h2 className="clippergoat-price">
              $120<span className="clippergoat-challenge-period">/month</span>
            </h2>
            <p className="clippergoat-price-description">
              With ClipperGoat you can repurpose your most viral content 1000
              times a month! Now that's a lot of content!
            </p>
            <button className="clippergoat-cta">Challenge</button>
            <ul className="clippergoat-features">
              <li className="clippergoat-feature-item">
                Great for ANY INDUSTRY
              </li>
              <li className="clippergoat-feature-item">
                IDEAL for short form marketing
              </li>
              <li className="clippergoat-feature-item">
                Use for Reels, Shorts, and Toks
              </li>
              <li className="clippergoat-feature-item">
                Use on EVERY PLATFORM
              </li>
            </ul>
          </div>
        </div>
        <div className="Container-Spacing">
          <div className="spacing-counter">
            <h1 className="information-container-header custom-header-title">
              Unlock Your <span className="glow-text-test">Full Potential</span>
            </h1>
            <p className="custom-header-subtitle ">
              Exactly what you can find inside Active Income
            </p>
          </div>
          <div className="Container-Spacing">
          <SliderTop images={IMAGES} direction="left" />
          <SliderTop images={INFLUENCERS} direction="right" />
          </div>
        </div>
        <div
          className="information-container Container-Spacing"
          ref={targetRef}
        >
          <ScrollProgressBar targetRef={targetRef} />
          <div className="">
            <div className="information-container-header-div">
              <h1 className="information-container-header custom-header-title">
                Unlock Your <span className="glow-text-test">Full Potential</span>
              </h1>
              <p className="custom-header-subtitle ">
                Exactly what you can find inside Active Income
              </p>
            </div>
            {homeItems.map((item, index) => (
              <div className="HomeImgContainer" key={index}>
                <div className="HomeImgContainerHeader">
                  <div className="HomeImgContainerHeaderContent">
                    <span className="glow-text">{item.icon}</span>
                    <p className="HomeImgContainerHeaderFirst">{item.title}</p>
                    <p className="HomeImgContainerHeaderSecond">
                      {item.description}
                    </p>
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
        </div>{" "}
        <LogoSlideshow />{" "}
        <div>

          <h1 className="information-container-header custom-header-title">
          Industries that  <span className="glow-text-test">NEED THIS!</span>
          </h1>
          <p className="custom-header-subtitle ">
          ClipperGoat is ideal for short form marketing, addressing the high demand for online attention and traffic in today's era of short attention spans and constant phone usage across social media, sales funnels, video games, influencers, online education, explicit sites, and subscription services.
          </p>
        </div>        <div className="Container-Spacing"></div>

        <Slider2 />
        <div className="Container-Spacing"></div>
        <PricingSection />
        <div className="Container-Spacing">
          <h1 className="information-container-header custom-header-title">
            Unlock Your <span className="glow-text-test">Full Potential</span>
          </h1>
          <p className="custom-header-subtitle ">
            Exactly what you can find inside Active Income
          </p>
        </div>  
        <Slider items={items} />
      </div>
      <div>
        <div className="Container-Spacing"> 

          <h1 className="information-container-header custom-header-title Container-Spacing">
          Frequently Asked <span className="glow-text-test">Questions</span>
          </h1> 

          <p className="custom-header-subtitle ">
          You have questions, we have answers
          </p>        <FAQ />

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
