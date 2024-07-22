import React, { useState, useRef, useEffect } from 'react';
import './Slider2.css';
import img1 from '../../assets/New folder/Industries/Affiliate Marketing.png';
import img2 from '../../assets/New folder/Industries/Agency & Course Owners.png';
import img3 from '../../assets/New folder/Industries/Automotive .png';
import img4 from '../../assets/New folder/Industries/Comedy.png';
import img5 from '../../assets/New folder/Industries/Cooking & Food Review.png';
import img6 from '../../assets/New folder/Industries/Crypto.png';
import img7 from '../../assets/New folder/Industries/DIY, Remodeling, Landscaping.png';
import img8 from '../../assets/New folder/Industries/E-commerce.png';
import img9 from '../../assets/New folder/Industries/Finance & Investment.png';
import img10 from '../../assets/New folder/Industries/Fitness & Wellness,.png';
import img11 from '../../assets/New folder/Industries/Gambling.png';
import img12 from '../../assets/New folder/Industries/Influencers.png';
import img13 from '../../assets/New folder/Industries/No Face Channels.png';
import img14 from '../../assets/New folder/Industries/OnlyFans Management.png';
import img15 from '../../assets/New folder/Industries/Podcast.png';
import img16 from '../../assets/New folder/Industries/Real Estate.png';
import img17 from '../../assets/New folder/Industries/Tech Review .png';
import img18 from '../../assets/New folder/Industries/Traval Vlogs.png';

const slides = [
  {
    author: 'Sneako',
    title: 'Active Income Mindset',
    content: 'Sneako reveals the Active Income Mindset that took him from a broke UberEats delivery driver to multimillionaire despite getting banned on YouTube and Twitch',
    image: img1
  },
  {
    author: 'Sneako',
    title: 'Active Income Mindset',
    content: 'Sneako reveals the Active Income Mindset that took him from a broke UberEats delivery driver to multimillionaire despite getting banned on YouTube and Twitch',
    image: img2
  },
  {
    author: 'Sneako',
    title: 'Active Income Mindset',
    content: 'Sneako reveals the Active Income Mindset that took him from a broke UberEats delivery driver to multimillionaire despite getting banned on YouTube and Twitch',
    image: img3
  },
  {
    author: 'Marcus Perez',
    title: 'High Ticket Awareness',
    content: 'Get the starting kit for making money online with nothing but a phone and an online memory card with pre-written content',
    color: '#1f2937',
    image: img4
  },
  {
    author: 'Sneako',
    title: 'Active Income Mindset',
    content: 'Sneako reveals the Active Income Mindset that took him from a broke UberEats delivery driver to multimillionaire despite getting banned on YouTube and Twitch',
    image: img5
  },
  {
    author: 'Sneako',
    title: 'Active Income Mindset',
    content: 'Sneako reveals the Active Income Mindset that took him from a broke UberEats delivery driver to multimillionaire despite getting banned on YouTube and Twitch',
    image: img6
  },
  {
    author: 'Sneako',
    title: 'Active Income Mindset',
    content: 'Sneako reveals the Active Income Mindset that took him from a broke UberEats delivery driver to multimillionaire despite getting banned on YouTube and Twitch',
    image: img7
  },
  {
    author: 'Marcus Perez',
    title: 'High Ticket Awareness',
    content: 'Get the starting kit for making money online with nothing but a phone and an online memory card with pre-written content',
    color: '#1f2937',
    image: img8
  },
  {
    author: 'Sneako',
    title: 'Active Income Mindset',
    content: 'Sneako reveals the Active Income Mindset that took him from a broke UberEats delivery driver to multimillionaire despite getting banned on YouTube and Twitch',
    image: img9
  },
  {
    author: 'Sneako',
    title: 'Active Income Mindset',
    content: 'Sneako reveals the Active Income Mindset that took him from a broke UberEats delivery driver to multimillionaire despite getting banned on YouTube and Twitch',
    image: img10
  },
  {
    author: 'Sneako',
    title: 'Active Income Mindset',
    content: 'Sneako reveals the Active Income Mindset that took him from a broke UberEats delivery driver to multimillionaire despite getting banned on YouTube and Twitch',
    image: img11
  },
  {
    author: 'Marcus Perez',
    title: 'High Ticket Awareness',
    content: 'Get the starting kit for making money online with nothing but a phone and an online memory card with pre-written content',
    color: '#1f2937',
    image: img12
  },
  {
    author: 'Sneako',
    title: 'Active Income Mindset',
    content: 'Sneako reveals the Active Income Mindset that took him from a broke UberEats delivery driver to multimillionaire despite getting banned on YouTube and Twitch',
    image: img13
  },
  {
    author: 'Sneako',
    title: 'Active Income Mindset',
    content: 'Sneako reveals the Active Income Mindset that took him from a broke UberEats delivery driver to multimillionaire despite getting banned on YouTube and Twitch',
    image: img14
  },
  {
    author: 'Sneako',
    title: 'Active Income Mindset',
    content: 'Sneako reveals the Active Income Mindset that took him from a broke UberEats delivery driver to multimillionaire despite getting banned on YouTube and Twitch',
    image: img15
  },
  {
    author: 'Marcus Perez',
    title: 'High Ticket Awareness',
    content: 'Get the starting kit for making money online with nothing but a phone and an online memory card with pre-written content',
    color: '#1f2937',
    image: img16
  },
  {
    author: 'Marcus Perez',
    title: 'High Ticket Awareness',
    content: 'Get the starting kit for making money online with nothing but a phone and an online memory card with pre-written content',
    color: '#1f2937',
    image: img17
  },
  {
    author: 'Marcus Perez',
    title: 'High Ticket Awareness',
    content: 'Get the starting kit for making money online with nothing but a phone and an online memory card with pre-written content',
    color: '#1f2937',
    image: img18
  },

];

const Slider2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);
  const sliderRef = useRef(null);

  const updateMaxSlide = useCallback(() => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.clientWidth;
      const slideWidth = 320; // 300px slide width + 20px gap
      const visibleSlides = Math.floor(containerWidth / slideWidth);
      setMaxSlide(slides.length - visibleSlides);
    }
  }, []);

  useEffect(() => {
    updateMaxSlide();
    const debouncedUpdateMaxSlide = debounce(updateMaxSlide, 250);
    window.addEventListener('resize', debouncedUpdateMaxSlide);
    return () => window.removeEventListener('resize', debouncedUpdateMaxSlide);
  }, [updateMaxSlide]);

  const scrollToSlide = (index) => {
    const newIndex = Math.max(0, Math.min(index, maxSlide));
    setCurrentSlide(newIndex);
    if (sliderRef.current) {
      const slideWidth = 320;
      sliderRef.current.style.transform = `translateX(-${newIndex * slideWidth}px)`;
    }
  };

  const handlePrev = () => scrollToSlide(currentSlide - 1);
  const handleNext = () => scrollToSlide(currentSlide + 1);

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
              <img src={slide.image} alt={slide.title} className='slider2img' loading="lazy" />
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

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default Slider2;
