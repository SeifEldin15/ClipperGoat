import React, { useState, useRef, useEffect } from 'react';
import './SliderTop.css';

const DURATION = 50000;

const InfiniteLoopSlider = ({ children, duration, direction }) => {
  const translateStart = direction === 'right' ? '-25%' : '0';
  const translateEnd = direction === 'right' ? '0' : '-25%';

  return (
    <div 
      className='loop-slider' 
      style={{ 
        '--duration': `${duration}ms`,
        '--translate-start': translateStart,
        '--translate-end': translateEnd
      }}
    >
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
          observer.disconnect(); 
        }
      },
      {
        rootMargin: '100px', 
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
            src={src}
            autoPlay
            loop
            muted
            playsInline
            ref={imageRef}
            className="slide-media"
          />
        ) : (
          <img
            // loading="lazy"
            src={src}
            alt={`slidetop ${title}`}
            ref={imageRef}
            className="slide-media"
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

const SliderTop = ({ images, direction }) => (
  <div className='SliderTop'>
    <div className='slider-container'>
      <InfiniteLoopSlider duration={DURATION} direction={direction}>
        {images.map((img, index) => (
          <ImageSlide
            src={img.src}
            title={img.title}
            description={img.description}
            key={index}
          />
        ))}
      </InfiniteLoopSlider>
    </div>
  </div>
);

export default SliderTop;
