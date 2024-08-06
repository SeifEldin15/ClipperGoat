import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import './Counter.css';

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const neonPulse = keyframes`
  0%, 100% {
    text-shadow: 0 0 3px #3a78ff, 0 0 6px #3a78ff, 0 0 9px #3a78ff;
  }
  50% {
    text-shadow: 0 0 4px #3a78ff, 0 0 8px #3a78ff, 0 0 12px #3a78ff;
  }
`;

const DigitBoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 30px rgba(20, 110, 255, 0.55), inset 0 0 75px rgba(20, 110, 255, 0.55);
  background-color: rgba(17, 24, 39, 0.75);
  padding: 20px;
  border-radius: 12px;
  z-index: 1000;
  border: 1.5px solid rgba(52, 130, 255, 1);
  ${props => props.shake && css`
    animation: ${shake} 0.5s ease-in-out;
  `}
  @media screen and (max-width: 750px) {
    padding: 15px;
    border-radius: 8px;
  }
`;

const DigitBox = styled.div`
  box-shadow: 0 0 7px rgba(59, 130, 246, 0.6);
  color: white;
  font-size: 36px;
  font-weight: bold;
  padding: 12px;
  margin: 0 7px;
  border-radius: 7px;
  min-width: 80px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1.5px solid rgba(52, 130, 255, 1);
  -webkit-text-stroke: 1.25px #3a78ff;
  animation: ${neonPulse} 1.5s infinite;

  @media screen and (max-width: 750px) {
    font-size: 24px;
    padding: 8px;
    margin: 0 5px;
    min-width: 60px;
    border-radius: 5px;
  }
`;

const TimeLabel = styled.p`
  font-size: 18px;
  margin: 10px;

  @media screen and (max-width: 750px) {
    font-size: 12px;
  }
`;

const AnimatedCounter = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [shakeCounter, setShakeCounter] = useState(false);

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const shakeTimer = setInterval(() => {
      setShakeCounter(true);
      setTimeout(() => setShakeCounter(false), 500);
    }, 3000); // Shake every 3 seconds

    return () => {
      clearInterval(timer);
      clearInterval(shakeTimer);
    };
  }, [targetDate]);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <animated.div className='counter-container'>
      <div className='counter-content'>
        <div className="landing-leader-counter-container-header ">
          <h1 className='glow-text-test'>CLIPPERGOAT</h1>
          <h1 className='glow-text-test'>$10 million challenge</h1>
        </div>
        <div className="counter-content-header">
          <CounterWrapper shake={shakeCounter}>
            <DigitBoxContainer>
              <DigitBox>{formatNumber(timeLeft.days || 0)}</DigitBox>
              <DigitBox>{formatNumber(timeLeft.hours || 0)}</DigitBox>
              <DigitBox>{formatNumber(timeLeft.minutes || 0)}</DigitBox>
              <DigitBox>{formatNumber(timeLeft.seconds || 0)}</DigitBox>
            </DigitBoxContainer>
            <DigitBoxContainer>
               <TimeLabel>days </TimeLabel>
             <TimeLabel>hours </TimeLabel>
             <TimeLabel>minutes </TimeLabel>
             <TimeLabel>seconds </TimeLabel> 
            </DigitBoxContainer>
          </CounterWrapper>
        </div>
      </div>
    </animated.div>
  );
};

export default AnimatedCounter;