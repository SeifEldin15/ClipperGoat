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

const IMAGES = [
  { src: imgs8, title: '@Sophie Rain', description: "Social media influencer." },
  { src: imgs1, title: '@Alex Hormozi', description: "Business growth strategist and entrepreneur." },
  { src: imgs2, title: '@Donald Trump', description: "45th President of the United States." },
  { src: imgs3, title: '@Joe Rogan', description: "Comedian, podcast host, and UFC commentator." },
  { src: imgs4, title: '@Jack Doherty', description: "YouTuber and social media personality." },
  { src: imgs5, title: '@Elon Musk', description: "CEO of SpaceX and Tesla." },
  { src: imgs6, title: '@Myron Gains', description: "Fitness coach and podcast host." },
  { src: imgs7, title: '@Ninja', description: "Professional gamer and streamer." },
  { src: imgs9, title: '@Stevewilldoit', description: "YouTuber known for extreme challenges." },
  { src: imgs10, title: '@Suga Sean OMalley', description: "UFC fighter and athlete." },
  { src: imgs12, title: '@Yodit Yemane', description: "Model and Instagram influencer." },
  { src: imgs11, title: '@XQC', description: "Popular Twitch streamer and former Overwatch pro." },
];

const DURATION = 31000;

const InfiniteLoopSlider = ({ children, duration }) => {
  return (
    <div className='loop-slider' style={{ '--duration': `${duration}ms` }}>
      <div className='inner'>
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};

const ImageSlide = ({ src, title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the image is in view
        }
      },
      {
        rootMargin: '100px', // Load image before it appears in the viewport
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className='slide'>
      {isVisible ? (
        src.endsWith('.mp4') ? (
          <video
            loading="lazy"
            src={src}
            autoPlay
            loop
            muted
            playsInline
            ref={imageRef}
          />
        ) : (
          <img
            loading="lazy"
            src={src}
            alt={`slidetop ${title}`}
            ref={imageRef}
          />
        )
      ) : (
        <div className='slide-placeholder' ref={imageRef}></div>
      )}
      <div className="slidetopoverlay">
        <p className="slidetopshow-container-title">{title}</p>
        <p className="slidetopshow-container-extra">{description}</p>
      </div>
    </div>
  );
};


const SliderTop = () => (
  <div className='SliderTop'>
    <div className='slider-container'>
      <InfiniteLoopSlider duration={DURATION}>
        {IMAGES.map((img, index) => {
          console.log(`Rendering image at index ${index}:`, img);
          return <ImageSlide src={img.src} title={img.title} description={img.description} key={index} />;
        })}
      </InfiniteLoopSlider>
    </div>
  </div>
);

export default SliderTop;
