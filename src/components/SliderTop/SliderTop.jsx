import React, { useState, useEffect, useRef } from 'react';
import './SliderTop.css';
import imgs12 from '../../assets/659224b5340d258123959c9f_IMG_9932-p-500 (1).png';
import imgs122 from '../../assets/659226b6a055423e4e0e59ca_Testimonials 5 (1)-p-500.png';

const SliderTop = () => {
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const trackRef1 = useRef(null);
  const trackRef2 = useRef(null);
  const images = [
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs122, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs122, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs122, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs122, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs122, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs122, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs122, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs122, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs12, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs122, title: '@Bendict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
  ];
  const doubledImages = [...images, ...images];

  useEffect(() => {
    const track1 = trackRef1.current;
    const track2 = trackRef2.current;
    const slideWidth = track1.firstChild.offsetWidth;
   
    const interval = setInterval(() => {
      setPosition1((prevPosition) => {
        if (prevPosition <= -slideWidth * images.length) {
          return 0;
        }
        return prevPosition - 1;
      });

      setPosition2((prevPosition) => {
        if (prevPosition >= 0) {
          return -slideWidth * images.length;
        }
        return prevPosition + 1;
      });
    }, 7);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="slidetopshow-container Container-Spacing-Lg ">
        <h1 className="custom-header-title">Unlock Your <span className="highlight glow-text">Full Potential</span></h1>
        
        <div
          className="slidetopshow-track Container-Spacing"
          ref={trackRef1}
          style={{ transform: `translateX(${position1}px)` }}
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

      <div className="slidetopshow-container ">
        <div
          className="slidetopshow-track Container-Spacing"
          ref={trackRef2}
          style={{ transform: `translateX(${position2}px)` }}
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
    </>
  );
};

export default SliderTop;