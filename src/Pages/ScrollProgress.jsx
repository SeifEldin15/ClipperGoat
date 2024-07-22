import React, { useState, useEffect, useRef } from 'react';

const ScrollProgressBar = ({ targetRef }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressBarRef = useRef(null);
  const [screenSize, setScreenSize] = useState(0);

  const screenSizes = [
    { maxWidth: 700, index: 0 },
    { maxWidth: 1000, index: 1 },
    { maxWidth: 1200, index: 2 },
    { maxWidth: 1274, index: 3 },
    { maxWidth: 1580, index: 4 },
    { maxWidth: 1736, index: 5 },
    { maxWidth: 1920, index: 6 },
    { maxWidth: Infinity, index: 7 },
  ];

  useEffect(() => {
    const handleResize = () => {
      const currentSize = screenSizes.find(size => window.innerWidth <= size.maxWidth);
      setScreenSize(currentSize.index);
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

  const progressBarHeights = [2800, 3300, 3800, 4500, 3000, 3500, 3600, 3700];

  const getCirclePositions = (height) => {
    return Array.from({ length: 6 }, (_, i) => Math.round(height * (i * 0.2)));
  };

  const circlePositions = progressBarHeights.map(getCirclePositions);

  const getSpeedMultiplier = (progress) => {
    return progress > 75 ? 1.9 : 1;
  };

  const getCirclePosition = (index) => {
    const currentPosition = circlePositions[screenSize][index];
    const nextPosition = index < 5 ? circlePositions[screenSize][index + 1] : progressBarHeights[screenSize];
    const stopPosition = nextPosition - (20 - screenSize * 5);

    const segmentStart = index * 20;
    const segmentEnd = (index + 1) * 20;

    let segmentProgress = Math.max(0, Math.min(20, scrollProgress - segmentStart));
    const speedMultiplier = getSpeedMultiplier(scrollProgress);

    if (scrollProgress <= segmentStart) {
      return currentPosition;
    } else if (scrollProgress >= segmentEnd) {
      return stopPosition;
    } else {
      const newPosition = currentPosition + (segmentProgress / 20) * (stopPosition - currentPosition) * speedMultiplier;
      return Math.min(stopPosition, newPosition);
    }
  };

  const getProgressBarHeight = () => {
    const activeSegment = Math.floor(scrollProgress / 20);
    const segmentProgress = scrollProgress % 20;
    const currentPosition = circlePositions[screenSize][activeSegment];
    const nextPosition = activeSegment < 5 ? circlePositions[screenSize][activeSegment + 1] : progressBarHeights[screenSize];
    const stopPosition = nextPosition - (30 + screenSize * 5);
    const speedMultiplier = getSpeedMultiplier(scrollProgress);

    if (segmentProgress < 15) {
      return getCirclePosition(activeSegment);
    } else {
      return stopPosition + ((segmentProgress - 15) / 5) * (30 + screenSize * 5) * speedMultiplier;
    }
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: `${progressBarHeights[screenSize]}px`,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div ref={progressBarRef} style={{
        position: 'sticky',
        top: '0px',
        width: `${1 + screenSize * 0.25}px`,
        left: `${10 + screenSize * 30}px`,
        height: '100%',
        backgroundColor: 'rgba(20, 110, 255, 0.2)',
      }}>
        <div style={{
          width: '100%',
          height: `${(getProgressBarHeight() / progressBarHeights[screenSize]) * 100}%`,
          backgroundColor: '#0077B6',
          transition: 'height 0.1s',
          position: 'relative',
          boxShadow: '0 0 10px #0077B6',
        }}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div key={index} style={{
              position: 'absolute',
              left: '50%',
              top: `${getCirclePosition(index)}px`,
              transform: 'translate(-50%, -50%)',
              width: `${8 + screenSize}px`,
              height: `${8 + screenSize}px`,
              borderRadius: '50%',
              backgroundColor: scrollProgress > index * 20 ? '#0077B6' : 'rgba(0, 120, 184, 0.2)',
              boxShadow: scrollProgress > index * 20 ? '0 0 15px #0077B6' : 'none',
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