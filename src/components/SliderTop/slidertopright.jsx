import React, { useState, useEffect, useRef } from 'react';
import './SliderTop.css';
import imgs1 from '../../assets/New folder/Influncers Top row/Alex Hormozi.png';
import imgs2 from '../../assets/New folder/Donald Trump .png';
import imgs3 from '../../assets/New folder/joe Rogan.mp4';


const sliderTop = () => {
  const [positionright, setPositionright] = useState(0);
  const trackRef = useRef(null);
  const images = [
    { src: imgs1, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs2, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs3, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
  ];
  const doubledImages = [...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    const slideWidth = track.firstChild.offsetWidth;
   
    const interval = setInterval(() => {
        setPositionright((prevPosition) => {
        if (prevPosition >= 0) {
          return -slideWidth * images.length;
        }
        return prevPosition + 1;
      });
    }, 7);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slidetopshow-container Container-Spacing-Lg ">
      <h1 className="custom-header-title">Unlock Your <span className="highlight glow-text">Full Potential</span></h1>
      
      <div
        className="slidetopshow-track Container-Spacing"
        ref={trackRef}
        style={{ transform: `translateX(${positionright}px)` }}
      >
   {doubledImages.map((image, index) => (
          <div key={index} className="slidetop ">
            <div className="slidetop-content ">
              <img src={image.src} alt={`slidetop ${index + 1}`} />
              <div className="slidetopoverlay ">
                <p className="slidetopshow-container-title ">{image.title}</p>
                 <p className="slidetopshow-container-extra">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default sliderTop;