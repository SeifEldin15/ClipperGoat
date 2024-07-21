import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';
import imgs12 from '../../assets/659226b6a055423e4e0e59ca_Testimonials 5 (1)-p-500.png';

const Slider = () => {
  const [position, setPosition] = useState(0);
  const trackRef = useRef(null);
  const images = [
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs12, title: 'Felix', description: 'Crypto Investor' },
  ];
  const doubledImages = [...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    const slideWidth = track.firstChild.offsetWidth;
   
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition <= -slideWidth * images.length) {
          return 0;
        }
        return prevPosition - 1;
      });
    }, 7);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container Container-Spacing-Lg">
      <h1 className="custom-header-title">Unlock Your <span className="highlight glow-text">Full Potential</span></h1>
      <p className="custom-header-subtitle">Exactly what you can find inside Active Income</p>
      <div
        className="slideshow-track Container-Spacing"
        ref={trackRef}
        style={{ transform: `translateX(${position}px)` }}
      >
        {doubledImages.map((image, index) => (
          <div key={index} className="slide ">
            <p className="slideshow-container-title">{image.title}</p>
            <p className="slideshow-container-desc">{image.description}</p>
            <div className="slide-content">
              <div className="slideoverlay"></div>
              <img src={image.src} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;