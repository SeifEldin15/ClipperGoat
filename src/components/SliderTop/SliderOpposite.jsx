import React, { useState, useRef, useEffect } from 'react';
import './SliderTop.css';
import GetOfferBtn from '../GetOfferBtn/GetOfferBtn';
import imgs21 from '../../assets/New folder/influncers bottom rown/Adin Ross.png';
import imgs22 from '../../assets/New folder/influncers bottom rown/Andrew Tate.png';
import imgs4 from '../../assets/New folder/influncers bottom rown/drake .mp4';
import imgs24 from '../../assets/New folder/influncers bottom rown/bradly Martin .png';
import imgs241 from '../../assets/New folder/influncers bottom rown/Fresh.png';
import imgs27 from '../../assets/New folder/influncers bottom rown/HUAK THUA.mp4';
import imgs28 from '../../assets/New folder/influncers bottom rown/Ishowspeed.mp4';
import imgs239 from '../../assets/New folder/influncers bottom rown/KaiCent.png';
import imgs210 from '../../assets/New folder/influncers bottom rown/Miami Swim week.mp4';
import imgs211 from '../../assets/New folder/influncers bottom rown/Neon.mp4';
import imgs212 from '../../assets/New folder/influncers bottom rown/Mr Beast.png';
import imgs213 from '../../assets/New folder/influncers bottom rown/Russel Brunson.png';


const SliderOpposite = () => {
  const [position, setPosition] = useState(0);
  const trackRef = useRef(null);

  const images = [

    { src: imgs212, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs210, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs28, title: '@124124', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs241, title: '@124124', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs24, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs4, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs22, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs21, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs27, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs239, title: '@21412', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs211, title: '@41241', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
    { src: imgs213, title: '@Benedict Ang', description: "No point in making money if you're fat, ugly and repulsive. Get jacked and high energy with the best routines and habits for maximum performance." },
  ];

  useEffect(() => {
    const track = trackRef.current;
    const slideWidth = track.children[0].offsetWidth;
    const totalWidth = slideWidth * images.length;

    const animate = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition + 0.9;  
        if (newPosition >= 0) {
          return -totalWidth;
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

  return ( <>
    <div className="slidetopshow-container ">

      <div className="slidetopshow-track-container">
        <div
          className="slidetopshow-track opposite"
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
         <div className="Slider-Top-Get-Btn">
         <GetOfferBtn />
       </div>
      </>
  );
};

export default SliderOpposite;