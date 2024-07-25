import React, { useState, useRef, useEffect, memo } from 'react';
import './SliderTop.css';

const DURATION = 50000;

const InfiniteLoopSlider = memo(({ children, duration, direction }) => {
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
        {Array.from({ length: 4 }, (_, index) => (
          <React.Fragment key={index}>
            {children}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
});

const ImageSlide = memo(({ src, title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const rootMarginValue = window.innerWidth < 768 ? '100px' : '400px';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      {
        rootMargin: rootMarginValue, 
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
            loading="lazy"
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
});

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
