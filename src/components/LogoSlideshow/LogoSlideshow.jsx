import React, { useEffect, useState } from 'react';
import './LogoSlideshow.css';
import netflix from '../../assets/netflix.webp';
import google from '../../assets/google.webp';
import onlyfans from '../../assets/onlyfans.webp';
import meta from '../../assets/meta3.png';

const logos = [
  { src: netflix, className: 'netflix' },
  { src: google, className: 'google' },
  { src: meta, className: 'meta' },
  { src: onlyfans, className: 'onlyfans' },
  { src: netflix, className: 'netflix' },
  { src: google, className: 'google' },
  { src: meta, className: 'meta' },
  { src: onlyfans, className: 'onlyfans' },
];

const LogoSlideshow = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition - 1) % (logos.length * 100));
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="LogoSlideshow-container11  Container-Spacing-Lg element " >
    <div className="LogoSlideshow-container">
      <h2>Trusted by <span className="glow-text">big industries</span></h2>
      <div className=" LogoSlideshowslideshow" style={{ transform: `translateX(${position}px)` }}>
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo.src} alt={`Logo ${index + 1}`} className={`logo ${logo.className}`} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default LogoSlideshow;
