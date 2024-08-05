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
    text-shadow: 0 0 4px #3a78ff, 0 0 8px #3a78ff, 0 0 12px #3a78ff;
  }
  50% {
    text-shadow: 0 0 6px #3a78ff, 0 0 12px #3a78ff, 0 0 18px #3a78ff;
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
  box-shadow: 0 0 35px rgba(20, 110, 255, 0.6), inset 0 0 85px rgba(20, 110, 255, 0.6);
  background-color: rgba(17, 24, 39, 0.8);
  padding: 20px;
  border-radius: 15px;
  z-index: 1000;
  border: 2px solid rgba(52, 130, 255, 1);
  ${props => props.shake && css`
    animation: ${shake} 0.5s ease-in-out;
  `}

  @media screen and (min-width: 769px) {
    padding: 15px;
    transform: scale(0.9);
  }

  @media screen and (max-width: 768px) {
    padding: 15px;
    margin-top: 20px;
  }
`;

const DigitBox = styled.div`
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
  font-size: 24px;
  font-weight: bold;
  padding: 8px;
  margin: 0 8px;
  border-radius: 10px;
  min-width: 60px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid rgba(52, 130, 255, 1);
  -webkit-text-stroke: 1.5px #3a78ff;
  animation: ${neonPulse} 1.5s infinite;

  @media screen and (max-width: 768px) {
    font-size: 27px;
    padding: 10px;
    min-width: 70px;
    margin: 0 5px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
    padding: 8px;
    min-width: 50px;
    margin: 0 3px;
  }
`;

const TimeLabel = styled.p`
  font-size: 14px;
  margin-top: 5px;
  margin: 8px 8px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
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
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(shakeTimer);
    };
  }, [targetDate]);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <animated.div className='counter-container'>
      <div className='counter-content'>
        <div className="landing-counter-container-header">
          <h1 className='glow-text-test'>Join the $10 Million</h1>
          <h1 className='glow-text-test'>ClipperGoat Challenge!</h1>
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
              <TimeLabel>days</TimeLabel>
              <TimeLabel>hours</TimeLabel>
              <TimeLabel>minutes</TimeLabel>
              <TimeLabel>seconds</TimeLabel>
            </DigitBoxContainer>
          </CounterWrapper>
        </div>
      </div>
    </animated.div>
  );
};

export default AnimatedCounter;