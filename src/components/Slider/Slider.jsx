import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';
import imgs44 from '../../assets/New folder/clippergoat reviews/44.png';
import imgs45 from '../../assets/New folder/clippergoat reviews/45.png';
import imgs46 from '../../assets/New folder/clippergoat reviews/46.png';
import imgs47 from '../../assets/New folder/clippergoat reviews/47.png';
import imgs48 from '../../assets/New folder/clippergoat reviews/48.png';
import imgs49 from '../../assets/New folder/clippergoat reviews/49.png';
import imgs50 from '../../assets/New folder/clippergoat reviews/50.png';
import imgs51 from '../../assets/New folder/clippergoat reviews/51.png';
import imgs52 from '../../assets/New folder/clippergoat reviews/52.png';
import imgs53 from '../../assets/New folder/clippergoat reviews/53.png';
import imgs54 from '../../assets/New folder/clippergoat reviews/54.png';
import imgs55 from '../../assets/New folder/clippergoat reviews/55.png';
import imgs56 from '../../assets/New folder/clippergoat reviews/56.png';
import imgs57 from '../../assets/New folder/clippergoat reviews/57.png';
import imgs58 from '../../assets/New folder/clippergoat reviews/58.png';
import imgs59 from '../../assets/New folder/clippergoat reviews/59.png';
import imgs60 from '../../assets/New folder/clippergoat reviews/60.png';
import imgs61 from '../../assets/New folder/clippergoat reviews/61.png';
import imgs62 from '../../assets/New folder/clippergoat reviews/62.png';
import imgs63 from '../../assets/New folder/clippergoat reviews/63.png';
import imgs64 from '../../assets/New folder/clippergoat reviews/64.png';
import imgs65 from '../../assets/New folder/clippergoat reviews/65.png';
import imgs66 from '../../assets/New folder/clippergoat reviews/66.png';
import imgs67 from '../../assets/New folder/clippergoat reviews/67.png';
import imgs68 from '../../assets/New folder/clippergoat reviews/68.png';

const Slider = () => {
  const [position, setPosition] = useState(0);
  const trackRef = useRef(null);
  const images = [
    { src: imgs44, title: 'Felix', description: 'Crypto Investor' },
    { src: imgs45, title: 'Jane', description: 'Blockchain Enthusiast' },
    { src: imgs46, title: 'Max', description: 'DeFi Expert' },
    { src: imgs47, title: 'Emma', description: 'NFT Artist' },
    { src: imgs48, title: 'Liam', description: 'Crypto Trader' },
    { src: imgs49, title: 'Sophia', description: 'Smart Contract Developer' },
    { src: imgs50, title: 'Lucas', description: 'Crypto Analyst' },
    { src: imgs51, title: 'Mia', description: 'Blockchain Developer' },
    { src: imgs52, title: 'Noah', description: 'Crypto Investor' },
    { src: imgs53, title: 'Olivia', description: 'Crypto Enthusiast' },
    { src: imgs54, title: 'Ethan', description: 'DeFi Investor' },
    { src: imgs55, title: 'Ava', description: 'Crypto Researcher' },
    { src: imgs56, title: 'Alexander', description: 'Blockchain Consultant' },
    { src: imgs57, title: 'Isabella', description: 'Crypto Blogger' },
    { src: imgs58, title: 'James', description: 'Crypto Trader' },
    { src: imgs59, title: 'Amelia', description: 'Blockchain Enthusiast' },
    { src: imgs60, title: 'William', description: 'Crypto Developer' },
    { src: imgs61, title: 'Charlotte', description: 'Crypto Analyst' },
    { src: imgs62, title: 'Benjamin', description: 'Crypto Investor' },
    { src: imgs63, title: 'Elijah', description: 'NFT Collector' },
    { src: imgs64, title: 'Harper', description: 'Crypto Enthusiast' },
    { src: imgs65, title: 'Henry', description: 'DeFi Developer' },
    { src: imgs66, title: 'Evelyn', description: 'Blockchain Analyst' },
    { src: imgs67, title: 'Michael', description: 'Crypto Investor' },
    { src: imgs68, title: 'Ella', description: 'Crypto Enthusiast' },
  ];
  
  const tripleImages = [...images, ...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    const slideWidth = track.children[0].offsetWidth;
    const totalWidth = slideWidth * images.length;

    const animate = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 0.7; // Adjust speed here
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
  }, [images.length]);

  return (
    <div className="slideshow-container212 Container-Spacing-Lg">
      <h1 className="custom-header-title">Unlock Your <span className="highlight glow-text">Full Potential</span></h1>
      <p className="custom-header-subtitle">Exactly what you can find inside Active Income</p>
      <div className="slideshow-track-container">
        <div
          className="slideshow-track212 Container-Spacing"
          ref={trackRef}
          style={{ transform: `translateX(${position}px)` }}
        >
          {tripleImages.map((image, index) => (
            <div key={index} className="slide212">
              <p className="slideshow-container-title">{image.title}</p>
              <p className="slideshow-container-desc">{image.description}</p>
              <div className="slide-content212">
                <div className="slideoverlay"></div>
                <img 
                loading="lazy"                
                src={image.src} alt={`Slide212 ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
