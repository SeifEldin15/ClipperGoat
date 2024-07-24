import React, { useState, useRef, useEffect, useCallback } from 'react';
import './SliderTop.css';

const DURATION = 50000;

const InfiniteLoopSlider = React.memo(({ children, duration, direction }) => {
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
});

const preloadMedia = (src) => {
  return new Promise((resolve, reject) => {
    if (src.endsWith('.mp4')) {
      const video = document.createElement('video');
      video.src = src;
      video.onloadeddata = resolve;
      video.onerror = reject;
    } else {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    }
  });
};

const ImageSlide = React.memo(({ src, title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const mediaRef = useRef(null);

  useEffect(() => {
    preloadMedia(src).then(() => setIsVisible(true));
  }, [src]);

  return (
    <div className='slide'>
      {isVisible ? (
        src.endsWith('.mp4') ? (
          <video
            src={src}
            autoPlay
            loop
            loading='lazy'
            muted
            playsInline
            ref={mediaRef}
            className="slide-media"
          />
        ) : (
          <img
            src={src}
            alt={`slidetop ${title}`}
            ref={mediaRef}              loading='lazy'

            className="slide-media"
          />
        )
      ) : (
        <div className='slide-placeholder' ref={mediaRef}></div>
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
