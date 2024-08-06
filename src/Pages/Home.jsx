import React, { useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSectionLanding from "../components/HeroSectionLanding/HeroSectionLanding";
import PricingSection from "../components/PricingSection/PricingSection";
import LogoSlideshow from "../components/LogoSlideshow/LogoSlideshow";
import GetOfferBtn from "../components/GetOfferBtn/GetOfferBtn";
import BackToTopPhone from "../components/BackToTopPhone/BackToTopPhone";

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
import radiengoat from "../assets/videos/9;16 hero.mp4";
import cleanvid from "../assets/videos/clean.mov";
import ripvid from "../assets/videos/rip finished edit.mov";
import repost from "../assets/videos/post CG lp.mov";
import repeatvid from "../assets/videos/Repeat fin CG.mov";
import rinsephone from "../assets/videos/rinse 640 x 480.mov";
import updatedFinal from "../assets/videos/Updated final.mp4";

import ripvidphone from "../assets/videos/rip  640 x 480.mov";
import repostphone from "../assets/videos/post CG lp.mov";
import repeatvidphone from "../assets/videos/repeat  640 x 480.mov";
import "./Home.css";

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
      description:
        "Grew presence by sharing lifestyle, beauty, and travel content on Instagram and TikTok.",
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
      description:
        "Built influence with daring challenge videos, pranks, and vlogs on YouTube.",
    },
    {
      src: imgs5,
      title: "@Elon Musk",
      description: "CEO of SpaceX and Tesla.",
    },
    {
      src: imgs6,
      title: "@Myron Gaines",
      description:
        "Grew following with dating advice and lifestyle content on social media.",
    },
    {
      src: imgs7,
      title: "@Ninja",
      description:
        "Gained massive fame through Fortnite streams on Twitch and YouTube.",
    },
    {
      src: imgs9,
      title: "@SteveWillDoIt",
      description:
        "Gained popularity through outrageous challenges and stunts on YouTube and Instagram.",
    },
    {
      src: imgs10,
      title: "@Sean O'Malley",
      description:
        "Used social media to share training routines and fight highlights, connecting with fans.",
    },
    {
      src: imgs12,
      title: "@Yodit Yemane",
      description: "Model and Instagram influencer.",
    },
    {
      src: imgs11,
      title: "@XQC",
      description:
        "Became one of the most-watched streamers by engaging Twitch audiences with various games.",
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
      icon: <i className="fa-regular fa-video-arrow-down-left text-xl"></i>,
      title: "Rip",
      description:
        "Easily download your old content from any social media platform. Whether it's Instagram, TikTok, YouTube, or Facebook, our system allows you to retrieve your previous viral hits with just a few clicks.",
      videoSrc: ripvidphone,
      className: "text-rip-color",
    },
    {
      icon: <i class="fa-regular fa-hand-sparkles "></i>,
      title: "Rinse",
      description:
        "Clear all metadata and refresh your videos using our Meta Magic cleaner and video editor AI. This step ensures your content is treated as new by social media algorithms, increasing its chances of going viral again.",
      videoSrc: rinsephone,
      className: "text-clean-color",
    },
    {
      icon: <i class="fa-regular fa-paper-plane"></i>,
      title: "Repost",
      description:
        "Repeat the process to keep your content evergreen. Continue to rip, rinse, and repost to maintain a constant presence and engagement on social media.",
      videoSrc: repost, 
      className: "text-repost-color", 
    },
    {
      icon: <i className="fa-regular fa-repeat text-xl"></i>,
      title: "Repeat",
      description:
        "Utilize the TTYM method to repost your content across top platforms: TikTok, Twitter, YouTube Shorts, and Meta. This multi-platform approach boosts your reach and engagement.",
      videoSrc: repeatvidphone, 
      className: "text-repeat-color", 
    },
  ];
  return (
    <>
    <BackToTopPhone />
      <div className="homeheroimg">
      <video
    className="imghero"
    loading="lazy"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={radiengoat} media="(max-width: 600px)" type="video/mp4" />
    <source src={updatedFinal} media="(min-width: 601px)" type="video/mp4" />
    <track kind="captions" srclang="en" label="English captions" />
    Your browser does not support the video tag.
  </video>
        <div className="overlay"></div>
        <Navbar />
        <HeroSectionLanding />
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
              Top <span className="glow-text">Influencers</span>
            </h1>
            <p className="custom-header-subtitle ">
              Top Influencers Using ClipperGoat Join the ranks of elite
              influencers who trust ClipperGoat to maximize their content:
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
              <h1 className="information-container-header custom-header-title ">
                <span className="serivces-section">
                Revitalize Your Content
                </span>
                <span className="glow-text serivces-section">
                  {" "}<br/>
                     Rip, Rinse,  Repost, Repeat!
                </span>
              </h1>
              <p className="custom-header-subtitle ">
                Transform your viral content and dominate social media platforms
                effortlessly.
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
                    <video
                      loading="lazy"
                      src={item.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <track
                        kind="captions"
                        srclang="en"
                        label="English captions"
                      />
                      Your browser does not support the video tag.
                    </video>
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
          <h1 className="information-container-header custom-header-title ">
            Industries that <div className="break-div"><br/></div><span className="glow-text">NEED THIS!</span>
          </h1>
          <p className="custom-header-subtitle ">
            ClipperGoat is ideal for short form marketing, addressing the high
            demand for online attention and traffic in today's era of short
            attention spans and constant phone usage across social media, sales
            funnels, video games, influencers, online education, explicit sites,
            and subscription services.
          </p>
        </div>
        <div className="Container-Spacing"></div>
        <Slider2 />
        <div className="Container-Spacing">
          <PricingSection />
        </div>
        <div className="Container-Spacing">
          <h1 className="information-container-header custom-header-title">
            Unlock Your <div className="break-div"><br/></div><span className="glow-text">Full Potential</span>
          </h1>
          <p className="custom-header-subtitle ">
          ClipperGoat revolutionizes social media management, driving traffic and engagement across all social media platforms. Users praise its powerful tools for optimizing content and maximizes reach.
          </p>
        </div>
        <Slider items={items} />
      </div>
      <div>
        <div className="Container-Spacing-Lg">
          <h1 className="information-container-header custom-header-title ">
            Frequently <div className="break-div"><br/></div> Asked <div className="break-div"><br/></div> <span className="glow-text">Questions</span>
          </h1>
          <p className="custom-header-subtitle ">
            You have questions, we have answers
          </p>
          <FAQ />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
