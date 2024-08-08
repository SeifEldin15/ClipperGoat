import React, { useEffect, useState } from 'react';
import './new.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [activeCircle, setActiveCircle] = useState(0);

  const circleSize = 20; // Size of each circle in pixels
  const gap = 50; // Gap between circles in pixels
  const sectionSize = 20; // Percentage of total progress for each section

  useEffect(() => {
    const container = document.querySelector('.content-container');
    let isScrolling = false;

    const handleScroll = () => {
      isScrolling = true;
    };

    const updateProgress = () => {
      if (!isScrolling) return;
      const newProgress = (window.scrollY / (container.offsetHeight - window.innerHeight)) * 100;
      setProgress(newProgress);
      setActiveCircle(Math.min(Math.floor(newProgress / sectionSize), 5));
      isScrolling = false;
    };

    const render = () => {
      requestAnimationFrame(render);
      updateProgress();
    };

    window.addEventListener('scroll', handleScroll);
    render();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getCirclePosition = (index) => {
    const basePosition = index * sectionSize;
    const maxMove = sectionSize - (gap / (window.innerHeight / 100));

    if (index === 0) {
      return Math.min(progress, maxMove);
    } else if (index === activeCircle) {
      return basePosition + Math.min(progress - basePosition, maxMove);
    } else if (index < activeCircle) {
      return basePosition + maxMove;
    } else {
      return basePosition;
    }
  };

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress-value" style={{ width: `${progress}%` }}></div>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`progress-circle ${index <= activeCircle ? 'active' : ''}`}
            style={{ left: `${getCirclePosition(index)}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div className="content-container">
        {/* Content divs to scroll */}
        <div className="scrollable-content"></div>
        <div className="scrollable-content"></div>
        <div className="scrollable-content"></div>
        <div className="scrollable-content"></div>
        <div className="scrollable-content"></div>
      </div>
      <ProgressBar />
    </div>
  );
};

export default App;
