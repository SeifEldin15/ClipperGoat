import React, { useState, useRef, useEffect } from 'react';
import './Slider2.css';
import img1 from '../../assets/New folder/Industries/Affiliate Marketing.webp';
import img2 from '../../assets/New folder/Industries/Agency & Course Owners.webp';
import img3 from '../../assets/New folder/Industries/Automotive .webp';
import img4 from '../../assets/New folder/Industries/Comedy.webp';
import img5 from '../../assets/New folder/Industries/Cooking & Food Review.webp';
import img6 from '../../assets/New folder/Industries/Crypto.webp';
import img7 from '../../assets/New folder/Industries/DIY, Remodeling, Landscaping.webp';
import img8 from '../../assets/New folder/Industries/E-commerce.webp';
import img9 from '../../assets/New folder/Industries/Finance & Investment.webp';
import img10 from '../../assets/New folder/Industries/Fitness & Wellness,.webp';
import img11 from '../../assets/New folder/Industries/Gambling.webp';
import img12 from '../../assets/New folder/Industries/Influencers.webp';
import img13 from '../../assets/New folder/Industries/No Face Channels.webp';
import img14 from '../../assets/New folder/Industries/OnlyFans Management.webp';
import img15 from '../../assets/New folder/Industries/Podcast.webp';
import img16 from '../../assets/New folder/Industries/Real Estate.webp';
import img17 from '../../assets/New folder/Industries/Tech Review .webp';
import img18 from '../../assets/New folder/Industries/Traval Vlogs.webp';

const slides = [
  {
    author: 'Sneako',
    title: 'Affiliate Marketing',
    content: 'Enhance your campaigns with high-quality, repurposed videos. ClipperGoat helps you attract and convert more leads effectively.',
    image: img1
  },
  {
    author: 'Sneako',
    title: 'Agency & Course Owners',
    content: 'Elevate your educational content and promotional materials with ClipperGoats AI tools. Keep your training programs fresh and engaging by continuously updating your video content.',
    image: img2
  },
  {
    author: 'Sneako',
    title: 'Automotive',
    content: 'Create and edit videos without revealing your identity. Perfect for channels focusing on gaming, tutorials, and more, using ClipperGoats AI capabilities.',
    image: img3
  },
  {
    author: 'Marcus Perez',
    title: 'Comedy',
    content: 'Enhance your campaigns with high-quality, repurposed videos. ClipperGoat helps you attract and convert more leads effectively.',
    color: '#1f2937',
    image: img4
  },
  {
    author: 'Sneako',
    title: 'Food Industries & Channels',
    content: 'Create mouth-watering recipe videos and cooking tutorials. Engage your audience and attract more followers with delicious content using ClipperGoat.',
    image: img5
  },
  {
    author: 'Sneako',
    title: 'Crypto',
    content: 'Keep your audience motivated by repurposing workout routines and wellness tips. ClipperGoat helps you maintain fresh and inspiring content.',
    image: img6
  },
  {
    author: 'Sneako',
    title: 'DIY, Remodeling, Landscaping',
    content: 'Provide valuable insights and investment tips through well-crafted videos. Keep your audience informed and engaged with ClipperGoat.',
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
    author: 'Sneako',
    title: 'Finance & Investment',
    content: 'Provide valuable insights and investment tips through well-crafted videos. Keep your audience informed and engaged with ClipperGoat.',
    image: img9
  },
  {
    author: 'Sneako',
    title: 'Fitness & Wellness',
    content: 'Keep your audience motivated by repurposing workout routines and wellness tips. ClipperGoat helps you maintain fresh and inspiring content.',
    image: img10
  },
  {
    author: 'Sneako',
    title: 'Gambling',
    content: 'Sneako reveals the Active Income Mindset that took him from a broke UberEats delivery driver to multimillionaire despite getting banned on YouTube and Twitch',
    image: img11
  },
  {
    author: 'Marcus Perez',
    title: 'Influencers',
    content: 'Maximize your online presence by repurposing your viral content. Stay relevant and engage your audience across all platforms with ClipperGoat.',
    color: '#1f2937',
    image: img12
  },
  {
    author: 'Sneako',
    title: 'No Face Channels',
    content: 'Create and edit videos without revealing your identity. Perfect for channels focusing on gaming, tutorials, and more, using ClipperGoats AI capabilities.',
    image: img13
  },
  {
    title: 'OnlyFans Management',
    content: 'Safely repurpose content to avoid restrictions and keep your audience engaged. ClipperGoat provides effective solutions for shadow-banned industries.',
    image: img14
  },
  {
    author: 'Sneako',
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
    author: 'Marcus Perez',
    title: 'Traval Vlogs',
    content: 'Get the starting kit for making money online with nothing but a phone and an online memory card with pre-written content',
    color: '#1f2937',
    image: img18
  },

];

const Slider2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateMaxSlide = () => {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.clientWidth;
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
    if (sliderRef.current) {
      const slideWidth = 320; 
      sliderRef.current.scrollTo({
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
    <div className="slider-wrapper2">
      <div className="slider-controls2">
        <button onClick={handlePrev} className="slider-button2" disabled={currentSlide === 0}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={handleNext} className="slider-button2" disabled={currentSlide === maxSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="slider-container2" ref={sliderRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide2 ${index === currentSlide ? 'active2' : ''}`}
            style={{ backgroundColor: slide.color }}
          >
            <div className='slider2imgcontainer'>
              <img 
                loading="lazy"
                src={slide.image} alt={slide.title} className='slider2img'/>
            </div>
            <div className="slidetopoverlay12">
              <div className="slide-content2">
                <h2>{slide.title}</h2>
                <p className="description2">{slide.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider2;