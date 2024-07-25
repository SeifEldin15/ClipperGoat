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
        '--translate-end': translateEnd,
        // Add will-change for potential performance improvement
        'will-change': 'transform'
      }}
    >
      <div className='inner'>
        {children}
        {children}  {/* Render only two children for performance */}
      </div>
    </div>
  );
});

const ImageSlide = memo(({ src, title, description }) => {
  // Remove Intersection Observer for simplicity
  return (
    <div className='slide'>
      {src.endsWith('.mp4') ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="slide-media"
        />
      ) : (
        <img
          loading="lazy"
          src={src}
          alt={`slidetop ${title}`}
          className="slide-media"
        />
      )}
      <div className="slidetopoverlay">
        <p className="slidetopshow-container-title">{title}</p>
        <p className="slidetopshow-container-extra">{description}</p>
      </div>
    </div>
  );
});

const SliderTop = ({ images, direction }) => {
  useEffect(() => {
    // Preload the first slide's image or video
    const preloadImage = new Image();
    preloadImage.src = images[0].src;
  }, [images]);

  return (
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
};

export default SliderTop;
