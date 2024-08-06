import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';
import imgs44 from '../../assets/New folder/clippergoat reviews/Comedy Reels.png';
import imgs45 from '../../assets/New folder/clippergoat reviews/Cooking Youtube.png';
import imgs46 from '../../assets/New folder/clippergoat reviews/Crypto Shorts.png';
import imgs47 from '../../assets/New folder/clippergoat reviews/DIY Youtube.png';
import imgs48 from '../../assets/New folder/clippergoat reviews/Ecom Affiliate.png';
import imgs49 from '../../assets/New folder/clippergoat reviews/facebook short.png';
import imgs50 from '../../assets/New folder/clippergoat reviews/Finance & Investment Reels.png';
import imgs51 from '../../assets/New folder/clippergoat reviews/Fitness Affiliate.png';
import imgs52 from '../../assets/New folder/clippergoat reviews/Gambaling Affilate.png';
import imgs53 from '../../assets/New folder/clippergoat reviews/Gambaling Affilate.png';
import imgs54 from '../../assets/New folder/clippergoat reviews/Gaming Reels.png';
import imgs55 from '../../assets/New folder/clippergoat reviews/Influncer .png';
import imgs56 from '../../assets/New folder/clippergoat reviews/Prank Youtube .png';
import imgs57 from '../../assets/New folder/clippergoat reviews/Prohibited Industries.png';
import imgs58 from '../../assets/New folder/clippergoat reviews/Real estate shorts.png';
import imgs59 from '../../assets/New folder/clippergoat reviews/Streaming Shorts.png';
import imgs60 from '../../assets/New folder/clippergoat reviews/Tech Review Shorts.png';
import imgs61 from '../../assets/New folder/clippergoat reviews/TikTok Affiliate.png';
import imgs62 from '../../assets/New folder/clippergoat reviews/TikTok Shop.png';
import imgs63 from '../../assets/New folder/clippergoat reviews/Traval Tiktok.png';
import imgs64 from '../../assets/New folder/clippergoat reviews/Youtube Influncer.png';

const Slider = () => {
  const [position, setPosition] = useState(0);
  const trackRef = useRef(null);
  const images = [
    { src: imgs44, title: 'Felix', description: 'Comedy Reels' },
    { src: imgs45, title: 'Jane', description: 'Cooking Youtuber' },
    { src: imgs46, title: 'Max', description: 'Crypto Shorts' },
    { src: imgs47, title: 'Emma', description: 'DIY Youtuber' },
    { src: imgs48, title: 'Liam', description: 'Ecom Affiliate' },
    { src: imgs49, title: 'Sophia', description: 'facebook short' },
    { src: imgs50, title: 'Lucas', description: 'Finance & Investment Reels' },
    { src: imgs52, title: 'Noah', description: 'Gambling Affilate' },
    { src: imgs51, title: 'Mia', description: 'Fitness Affiliate' },
    { src: imgs53, title: 'Olivia', description: 'Gambling Affiliate ' },
    { src: imgs54, title: 'Ethan', description: 'Gaming Reels' },
    { src: imgs55, title: 'Ava', description: 'Influncer' },
    { src: imgs56, title: 'Alexander', description: 'Prank Youtuber' },
    { src: imgs57, title: 'Isabella', description: 'Prohibited Industries' },
    { src: imgs58, title: 'James', description: 'Real estate shorts' },
    { src: imgs59, title: 'Amelia', description: 'Streaming Shorts' },
    { src: imgs60, title: 'William', description: 'Tech Review Shorts' },
    { src: imgs61, title: 'Charlotte', description: 'TikTok Affiliate' },
    { src: imgs62, title: 'Benjamin', description: 'TikTok Shop' },
    { src: imgs63, title: 'Elijah', description: 'Travel Tiktok' },
    { src: imgs64, title: 'Harper', description: 'Youtube Influncer' },

  ];
  
  const tripleImages = [...images, ...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    const slideWidth = track.children[0].offsetWidth;
    const totalWidth = slideWidth * images.length;

    const animate = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 0.7; 
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
    <div className="slideshow-container212 ">
     {/* Container-Spacing */}

     
      <div className="slideshow-track-container">
     {/* Container-Spacing */}

        <div
          className="slideshow-track212 " 
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
