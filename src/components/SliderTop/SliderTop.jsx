import React, { useState, useRef, useEffect } from 'react';
import './SliderTop.css';

import imgs1 from '../../assets/New folder/Influncers Top row/Alex Hormozi.png';
import imgs2 from '../../assets/New folder/Influncers Top row/Donald Trump .png';
import imgs3 from '../../assets/New folder/Influncers Top row/joe Rogan.mp4';
import imgs4 from '../../assets/New folder/Influncers Top row/Jack Doherty .png';
import imgs5 from '../../assets/New folder/Influncers Top row/Elon Musk.png';
import imgs6 from '../../assets/New folder/Influncers Top row/myron Gains.mp4';
import imgs7 from '../../assets/New folder/Influncers Top row/Nija.png';
import imgs8 from '../../assets/New folder/Influncers Top row/Sophie Rain.mp4';
import imgs9 from '../../assets/New folder/Influncers Top row/Stevewilldoit.mp4';
import imgs10 from '../../assets/New folder/Influncers Top row/Suga Sean Omalley.png';
import imgs11 from '../../assets/New folder/Influncers Top row/XQC.mp4';
import imgs12 from '../../assets/New folder/Influncers Top row/Yodit Yemane .png';




const SliderTop = () => {
  const [positionRight1, setPositionRight1] = useState(0);
  const trackRef1 = useRef(null);


  const images1 = [
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

  const totalWidth = useRef(0);

  useEffect(() => {
    const track1 = trackRef1.current;
    const slideWidth1 = track1.firstChild.offsetWidth;
    
    // Calculate the total width of all slides
    totalWidth.current = slideWidth1 * images1.length;

    const interval1 = setInterval(() => {
      setPositionRight1((prevPosition) => {
        const newPosition = prevPosition - 1;
        // When we've scrolled the full width, reset to 0
        return newPosition <= -totalWidth.current ? 0 : newPosition;
      });
    }, 7);

    return () => {
      clearInterval(interval1);
    };
  }, [images1.length]);

  return (
    <>
      <div className="slidetopshow-container Container-Spacing-Lg">
        <h1 className="custom-header-title">
          Unlock Your <span className="highlight glow-text">Full Potential</span>
          <p className="custom-header-subtitle ">Exactly what you can find inside Active Income</p>
        </h1>
        
        <div
          className="slidetopshow-track Container-Spacing"
          ref={trackRef1}
          style={{ transform: `translateX(${positionRight1}px)` }}
        >
          {images1.concat(images1).map((image, index) => (
            <div key={index} className="slidetop">
              <div className="slidetop-content">
              {image.src.endsWith('.mp4') ? (
                <video src={image.src} autoPlay loop muted playsInline />
              ) : (
                <img src={image.src} alt={`slidetop ${index + 1}`} />
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
    </>
  );
};

export default SliderTop;
