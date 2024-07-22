import React, { useState, useRef, useEffect } from 'react';
import './SliderTop.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GetOfferBtn from '../GetOfferBtn/GetOfferBtn';
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



import imgs21 from '../../assets/New folder/influncers bottom rown/Adin Ross.png';
import imgs22 from '../../assets/New folder/influncers bottom rown/Andrew Tate.png';
// import imgs23 from '../../assets/New folder/influncers bottom rown/drake .mp4';
import imgs24 from '../../assets/New folder/influncers bottom rown/bradly Martin .png';
import imgs241 from '../../assets/New folder/influncers bottom rown/Fresh.png';
import imgs27 from '../../assets/New folder/influncers bottom rown/HUAK THUA.mp4';
import imgs28 from '../../assets/New folder/influncers bottom rown/Ishowspeed.mp4';
import imgs239 from '../../assets/New folder/influncers bottom rown/KaiCent.png';
import imgs210 from '../../assets/New folder/influncers bottom rown/Miami Swim week.mp4';
import imgs211 from '../../assets/New folder/influncers bottom rown/Neon.mp4';
import imgs212 from '../../assets/New folder/influncers bottom rown/Mr Beast.png';
import imgs213 from '../../assets/New folder/influncers bottom rown/Russel Brunson.png';

const LazyVideo = ({ src, ...props }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const placeholderRef = useRef();

  useEffect(() => {
    if (!shouldLoad && placeholderRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        { rootMargin: "100px" }
      );
      observer.observe(placeholderRef.current);
      return () => observer.disconnect();
    }
  }, [shouldLoad]);

  if (!shouldLoad) {
    return <div ref={placeholderRef} style={{height: '360.65px', background: '#000'}} />;
  }

  return <video src={src} {...props} />;
};

const SliderTop = () => {
  const [positionRight1, setPositionRight1] = useState(0);
  const [positionRight2, setPositionRight2] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const trackRef1 = useRef(null);
  const trackRef2 = useRef(null);

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

  const images2 = [
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

  const doubledImages1 = [...images1, ...images1];
  const doubledImages2 = [...images2, ...images2];

  useEffect(() => {
    const track1 = trackRef1.current;
    const track2 = trackRef2.current;
    const slideWidth1 = track1.firstChild.offsetWidth;
    const slideWidth2 = track2.firstChild.offsetWidth;

    let animationFrameId;
    let lastTimestamp = 0;

    const animate = (timestamp) => {
      if (timestamp - lastTimestamp > 16) {  // ~60fps
        setPositionRight1((prevPosition) => {
          if (prevPosition <= -slideWidth1 * images1.length) {
            return 0;
          }
          return prevPosition - 1;
        });
        setPositionRight2((prevPosition) => {
          if (prevPosition >= 0) {
            return -slideWidth2 * images2.length;
          }
          return prevPosition + 1;
        });
        lastTimestamp = timestamp;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [images1.length, images2.length]);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const walk = (x - startX) * 3;
    setPositionRight1(prevPosition => prevPosition + walk);
    setPositionRight2(prevPosition => prevPosition - walk);
    setStartX(x);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {doubledImages1.map((image, index) => (
            <div key={index} className="slidetop">
              <div className="slidetop-content">
              {image.src.endsWith('.mp4') ? (
                <LazyVideo src={image.src} autoPlay loop muted playsInline />
              ) : (
                <LazyLoadImage
                  src={image.src}
                  alt={`slidetop ${index + 1}`}
                  effect="blur"
                />
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

      <div className="slidetopshow-container">
        <div
          className="slidetopshow-track"
          ref={trackRef2}
          style={{ transform: `translateX(${positionRight2}px)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {doubledImages2.map((image, index) => (
            <div key={index} className="slidetop">
              <div className="slidetop-content">
              {image.src.endsWith('.mp4') ? (
                <LazyVideo src={image.src} autoPlay loop muted playsInline />
              ) : (
                <LazyLoadImage
                  src={image.src}
                  alt={`slidetop ${index + 1}`}
                  effect="blur"
                />
              )}
                <div className="slidetopoverlay">
                  <p className="slidetopshow-container-title">{image.title}</p>
                  <p className="slidetopshow-container-extra">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="Slider-Top-Get-Btn">
        </div>
        <div className="getofferbtnslider">
          <GetOfferBtn />
        </div>
      </div>
    </>
  );
};

export default SliderTop;