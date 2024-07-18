import React, { useState, useEffect, useRef } from 'react';

const ScrollProgressBar = ({ targetRef }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressBarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current && progressBarRef.current) {
        const targetElement = targetRef.current;
        const windowHeight = window.innerHeight;
        const targetRect = targetElement.getBoundingClientRect();
        const targetTop = targetRect.top;
        const targetHeight = targetRect.height;

        const scrollableHeight = targetHeight + windowHeight;
        const scrolledAmount = windowHeight - targetTop;
        const progress = (scrolledAmount / scrollableHeight) * 100;
        setScrollProgress(Math.max(0, Math.min(100, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetRef]);

  const progressBarHeight = isMobile ? 1600 : 2500;
  const circlePositions = isMobile
    ? [0, 350, 750, 1350, 1750,]
    : [0, 650, 1450, 2190, 2500, ];

  const getSpeedMultiplier = (progress) => {
    return progress > 75 ? 1.9 : 1;
  };

  const getCirclePosition = (index) => {
    const currentPosition = circlePositions[index];
    const nextPosition = index < 3 ? circlePositions[index + 1] : progressBarHeight;
    const stopPosition = nextPosition - (isMobile ? 15 : 30);

    const segmentStart = index * 25;
    const segmentEnd = (index + 1) * 25;

    let segmentProgress = Math.max(0, Math.min(25, scrollProgress - segmentStart));
    const speedMultiplier = getSpeedMultiplier(scrollProgress);

    if (scrollProgress <= segmentStart) {
      return currentPosition;
    } else if (scrollProgress >= segmentEnd) {
      return stopPosition;
    } else {
      const newPosition = currentPosition + (segmentProgress / 25) * (stopPosition - currentPosition) * speedMultiplier;
      return Math.min(stopPosition, newPosition);
    }
  };

  const getProgressBarHeight = () => {
    const activeSegment = Math.floor(scrollProgress / 25);
    const segmentProgress = scrollProgress % 25;
    const currentPosition = circlePositions[activeSegment];
    const nextPosition = activeSegment < 3 ? circlePositions[activeSegment + 1] : progressBarHeight;
    const stopPosition = nextPosition - (isMobile ? 25 : 50);
    const speedMultiplier = getSpeedMultiplier(scrollProgress);

    if (segmentProgress < 20) {
      return getCirclePosition(activeSegment);
    } else {
      return stopPosition + ((segmentProgress - 20) / 5) * (isMobile ? 25 : 50) * speedMultiplier;
    }
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: `${progressBarHeight}px`,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div ref={progressBarRef} style={{
        position: 'sticky',
        top: '0px',
        width: isMobile ? '1px' : '2px',
        left: isMobile ? '10px' : '200px',
        height: '100%',
        backgroundColor: 'rgba(20, 110, 255, 0.2)',
      }}>
        <div style={{
          width: '100%',
          height: `${(getProgressBarHeight() / progressBarHeight) * 100}%`,
          backgroundColor: '#0077B6',
          transition: 'height 0.1s',
          position: 'relative',
          boxShadow: '0 0 10px #0077B6',
        }}>
          {[0, 1, 2, 3].map((index) => (
            <div key={index} style={{
              position: 'absolute',
              left: '50%',
              top: `${getCirclePosition(index)}px`,
              transform: 'translate(-50%, -50%)',
              width: isMobile ? '8px' : '12px',
              height: isMobile ? '8px' : '12px',
              borderRadius: '50%',
              backgroundColor: scrollProgress > index * 25 ? '#0077B6' : 'rgba(0, 120, 184, 0.2)',
              boxShadow: scrollProgress > index * 25 ? '0 0 15px #0077B6' : 'none',
              transition: 'top 0.1s, background-color 0.3s, box-shadow 0.3s',
              zIndex: 2,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollProgressBar;