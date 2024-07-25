import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';
import imgs44 from '../../assets/New folder/clippergoat reviews/44.webp';
import imgs45 from '../../assets/New folder/clippergoat reviews/45.webp';
import imgs46 from '../../assets/New folder/clippergoat reviews/46.webp';
import imgs47 from '../../assets/New folder/clippergoat reviews/47.webp';
import imgs48 from '../../assets/New folder/clippergoat reviews/48.webp';
import imgs49 from '../../assets/New folder/clippergoat reviews/49.webp';
import imgs50 from '../../assets/New folder/clippergoat reviews/50.webp';
import imgs51 from '../../assets/New folder/clippergoat reviews/51.webp';
import imgs52 from '../../assets/New folder/clippergoat reviews/52.webp';
import imgs53 from '../../assets/New folder/clippergoat reviews/53.webp';
import imgs54 from '../../assets/New folder/clippergoat reviews/54.webp';
import imgs55 from '../../assets/New folder/clippergoat reviews/55.webp';
import imgs56 from '../../assets/New folder/clippergoat reviews/56.webp';
import imgs57 from '../../assets/New folder/clippergoat reviews/57.webp';
import imgs58 from '../../assets/New folder/clippergoat reviews/58.webp';
import imgs59 from '../../assets/New folder/clippergoat reviews/59.webp';
import imgs60 from '../../assets/New folder/clippergoat reviews/60.webp';
import imgs61 from '../../assets/New folder/clippergoat reviews/61.webp';
import imgs62 from '../../assets/New folder/clippergoat reviews/62.webp';
import imgs63 from '../../assets/New folder/clippergoat reviews/63.webp';
import imgs64 from '../../assets/New folder/clippergoat reviews/64.webp';
import imgs65 from '../../assets/New folder/clippergoat reviews/65.webp';
import imgs66 from '../../assets/New folder/clippergoat reviews/66.webp';
import imgs67 from '../../assets/New folder/clippergoat reviews/67.webp';
import imgs68 from '../../assets/New folder/clippergoat reviews/68.webp';

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
    <div className="slideshow-container212 Container-Spacing">
     
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
