import React, { useEffect, useRef, useState } from 'react';
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
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const logoWidth = track.children[0].offsetWidth;
    const totalWidth = logoWidth * logos.length;

    const animate = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 0.5; // Adjust speed here
        if (newPosition <= -totalWidth) {
          return 0;
        }
        return newPosition;
      });
    };

    const animationId = requestAnimationFrame(function animation() {
      animate();
      requestAnimationFrame(animation);
    });

    return () => cancelAnimationFrame(animationId);
  }, []);

  const tripleLogos = [...logos, ...logos, ...logos];

  return (
    <div className="LogoSlideshow-container11 Container-Spacing-Lg element">
      <div className="LogoSlideshow-container">
        <h2>Trusted by <span className="glow-text">big industries</span></h2>
        <div 
          className="LogoSlideshowslideshow" 
          ref={trackRef}
          style={{ transform: `translateX(${position}px)` }}
        >
          {tripleLogos.map((logo, index) => (
            <img 
              loading="lazy"
              key={index} 
              src={logo.src} 
              alt={`Logo ${index + 1}`} 
              className={`logo ${logo.className}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlideshow;