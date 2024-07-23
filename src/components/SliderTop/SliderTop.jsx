import React, { useState, useRef, useEffect } from 'react';
import './SliderTop.css';
 import imgs1 from '../../assets/New folder/Influncers Top row/Alex Hormozi.webp';
import imgs2 from '../../assets/New folder/Influncers Top row/Donald Trump .webp';
import imgs3 from '../../assets/New folder/Influncers Top row/joe Rogan.mp4';
import imgs4 from '../../assets/New folder/Influncers Top row/Jack Doherty .webp';
import imgs5 from '../../assets/New folder/Influncers Top row/Elon Musk.webp';
import imgs6 from '../../assets/New folder/Influncers Top row/myron Gains.mp4';
import imgs7 from '../../assets/New folder/Influncers Top row/Nija.webp';
import imgs8 from '../../assets/New folder/Influncers Top row/Sophie Rain.mp4';
import imgs9 from '../../assets/New folder/Influncers Top row/Stevewilldoit.mp4';
import imgs10 from '../../assets/New folder/Influncers Top row/Suga Sean Omalley.webp';
import imgs11 from '../../assets/New folder/Influncers Top row/XQC.mp4';
import imgs12 from '../../assets/New folder/Influncers Top row/Yodit Yemane .webp';

const SliderTop = () => {
  const [position, setPosition] = useState(0);
  const trackRef = useRef(null);

  const images = [
    { src: imgs1, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs2, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs3, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs4, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs5, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs6, title: '@dsgsdgdsgdsg', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs7, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs8, title: '@sdgdsgdsg', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs9, title: '@dsgdsg', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs10, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs11, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@21rfew', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
  ];
  useEffect(() => {
    const track = trackRef.current;
    const slideWidth = track.children[0].offsetWidth;
    const totalWidth = slideWidth * images.length;

    const animate = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 0.9; // Adjust speed here
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

  const tripleImages = [...images, ...images, ...images];

  return (
    <div className="slidetopshow-container Container-Spacing">
      <h1 className="custom-header-title">
        Unlock Your <span className="highlight glow-text">Full Potential</span>
        <p className="custom-header-subtitle">Exactly what you can find inside Active Income</p>
      </h1>
      
      <div className="slidetopshow-track-container">
        <div
          className="slidetopshow-track "
          ref={trackRef}
          style={{ transform: `translateX(${position}px)` }}
        >
          {tripleImages.map((image, index) => (
            <div key={index} className="slidetop">
              <div className="slidetop-content">
                {image.src.endsWith('.mp4') ? (
                  <video 
                  loading="lazy"
                  src={image.src} autoPlay loop muted playsInline />
                ) : (
                  <img 
                  // loading="lazy"
                  src={image.src} alt={`slidetop ${index + 1}`} />
                )}
                <div className="slidetopoverlay">
                  <p className="slidetopshow-container-title">{image.title}</p>
                  <p className="slidetopshow-container-extra">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SliderTop;