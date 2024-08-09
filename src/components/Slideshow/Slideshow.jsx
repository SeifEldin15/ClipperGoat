import React, { useState, useRef, useEffect } from 'react';
import './Slideshow.css';
import img1 from '../../assets/New folder/Industries/Affiliate Marketing.webp';
import img2 from '../../assets/New folder/Industries/spencer__3_.webp';
import img3 from '../../assets/New folder/Industries/Automotive .webp';
import img4 from '../../assets/New folder/Industries/Comedy.webp';
import img5 from '../../assets/New folder/Industries/Cooking & Food Review.webp';
import img6 from '../../assets/New folder/Industries/Crypto.webp';
import img7 from '../../assets/New folder/Industries/DIY, Remodeling, Landscaping.webp';
import img8 from '../../assets/New folder/Industries/E-commerce.webp';
import img9 from '../../assets/New folder/Industries/Finance & Investment.webp';
import img10 from '../../assets/New folder/Industries/Fitness & Wellness,.webp';
import img11 from '../../assets/New folder/Industries/gaming.webp';
import img12 from '../../assets/New folder/Industries/unnamed.webp';
import img13 from '../../assets/New folder/Industries/No Face Channels.webp';
import img14 from '../../assets/New folder/Industries/spencer__1_.webp';
import img15 from '../../assets/New folder/Industries/Podcast.webp';
import img16 from '../../assets/New folder/Industries/Real Estate.webp';
import img17 from '../../assets/New folder/Industries/Tech Review .webp';
// import img18 from '../../assets/New folder/Industries/Traval Vlogs.webp';
import img19 from '../../assets/New folder/Industries/248281584_669313307384591_6746345535741826702_n.webp';
import img20 from '../../assets/New folder/Industries/spencer__2_.webp';
import img124132 from '../../assets/New folder/Industries/STREAMING .png';

import img2121 from '../../assets/New folder/Industries/TIKTOK SHOP.png';
const slides = [
  {
    
    title: 'Affiliate Marketing',
    content: 'Enhance your campaigns with high-quality, repurposed videos. ClipperGoat helps you attract and convert more leads effectively.',
    image: img1
  },
  {
    
    title: 'TikTok Shop',
    content: 'Sharing product clips increases visibility and drives more sales.',
    image: img2121
  },
  {
    
    title: 'Streaming',
    content: 'Reposting highlights and clips boosts engagement and attracts more viewers.',
    image: img124132
  },
  {
    
    title: 'Agency & Course Owners',
    content: 'Elevate your educational content and promotional materials with ClipperGoats AI tools. Keep your training programs fresh and engaging by continuously updating your video content.',
    image: img2
  },
  {
    
    title: 'Automotive',
    content: 'Showcase car reviews, maintenance tips, and automotive news. Keep your audience engaged with high-quality, informative videos using ClipperGoat.',
    image: img3
  },
  {
    author: 'Marcus Perez',
    title: 'Comedy',
    content: 'Grows audience by sharing funniest stand-up bits, skits, and humorous moments, keeping followers entertained and engaged.',
    color: '#1f2937',
    image: img4
  },
  {
    
    title: 'Food Industries & Channels',
    content: 'Create mouth-watering recipe videos and cooking tutorials. Engage your audience and attract more followers with delicious content using ClipperGoat.',
    image: img5
  },
  {
    
    title: 'Crypto',
    content: 'Attracts followers by highlighting market insights, investment tips, and significant trades, keeping the audience informed and engaged with timely and actionable financial content.',
    image: img6
  },

  {
    
    title: 'DIY, Remodeling, Landscaping',
    content: 'Attracts new clients by showcasing how-to guides, before-and-after transformations, and client testimonials, demonstrating value and expertise in the service offered.',
    image: img7
  },
  {
    author: 'Marcus Perez',
    title: 'E-commerce',
    content: 'Drive traffic and boost sales with engaging product videos. Use ClipperGoat to create consistent, high-quality content for your online store.',
    color: '#1f2937',
    image: img8
  },
  {
    
    title: 'Finance & Investment',
    content: 'Provide valuable insights and investment tips through well-crafted videos. Keep your audience informed and engaged with ClipperGoat.',
    image: img9
  },
  {
    
    title: 'Fitness & Wellness',
    content: 'Keep your audience motivated by repurposing workout routines and wellness tips. ClipperGoat helps you maintain fresh and inspiring content.',
    image: img10
  },
  {
    
    title: 'Gaming',
    content: 'Repurpose gameplay highlights and tutorials to keep your content fresh. Engage your gaming community with ClipperGoats AI tools.',
    image: img11
  },
  {
    
    title: 'Gambling',
    content: 'Engages audience by sharing big wins, betting strategies, and entertaining gameplay, creating excitement and drawing in viewers who are interested in the thrill of gambling.',
    image: img19
  },
  {
    
    title: 'Influencers',
    content: 'Maximize your online presence by repurposing your viral content. Stay relevant and engage your audience across all platforms with ClipperGoat.',
    color: '#1f2937',
    image: img12
  },
  {
    
    title: 'No Face Channels',
    content: 'Create and edit videos without revealing your identity. Perfect for channels focusing on gaming, tutorials, and more, using ClipperGoats AI capabilities.',
    image: img13
  },
  {
    title: 'Prohibited Industries',
    content: 'safely repurpose content to avoid restrictions and keep your audience engaged. ClipperGoat provides effective solutions for shadow-banned industries.',
    image: img14
  },
  {
    
    title: 'Podcast',
    content: 'Transform your audio content into engaging video snippets. Expand your reach and keep your audience entertained with ClipperGoat.',
    image: img15
  },
  {
    author: 'Marcus Perez',
    title: 'Real Estate',
    content: 'Create stunning property tours and market updates. Attract more buyers and sellers with high-quality video content using ClipperGoat.',
    color: '#1f2937',
    image: img16
  },
  {
    author: 'Marcus Perez',
    title: 'Tech Review',
    content: 'Repurpose tech review videos and tutorials. Keep your content relevant and engaging for your tech-savvy audience with ClipperGoat',
    color: '#1f2937',
    image: img17
  },

  {
    
    title: 'Travel',
    content: 'Repurpose travel footage and vlogs to keep your audience coming back for more adventures. Share your experiences through captivating videos.',
    image: img20
  },

];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);
  const SlideshowRef = useRef(null);

  useEffect(() => {
    const updateMaxSlide = () => {
      if (SlideshowRef.current) {
        const containerWidth = SlideshowRef.current.clientWidth;
        const slideWidth = 320; 
        const visibleSlides = Math.floor(containerWidth / slideWidth);
        setMaxSlide(slides.length - visibleSlides);
      }
    };

    updateMaxSlide();
    window.addEventListener('resize', updateMaxSlide);

    return () => window.removeEventListener('resize', updateMaxSlide);
  }, []);

  const scrollToSlide = (index) => {
    const newIndex = Math.max(0, Math.min(index, maxSlide));
    setCurrentSlide(newIndex);
    if (SlideshowRef.current) {
      const slideWidth = 320; 
      SlideshowRef.current.scrollTo({
        left: newIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    scrollToSlide(currentSlide - 1);
  };

  const handleNext = () => {
    scrollToSlide(currentSlide + 1);
  };

  return (
    <div className="Slideshow-wrapper">
      <div className="Slideshow-Controls">
        <button onClick={handlePrev} className="Slideshow-Button" disabled={currentSlide === 0}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={handleNext} className="Slideshow-Button" disabled={currentSlide === maxSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="Slideshow-container" ref={SlideshowRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`Slideshow-Slide ${index === currentSlide ? 'active2' : ''}`}
            style={{ backgroundColor: slide.color }}
          >
            <div className='Slideshowimgcontainer'>
              <img 
                loading="lazy"
                src={slide.image} alt={slide.title} className='Slideshowimg'/>
            </div>
            <div className="SlideShow-Overlay">
              <div className="slide-content2">
                <h2>{slide.title}</h2>
                <p className="Slideshow-Description">{slide.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;