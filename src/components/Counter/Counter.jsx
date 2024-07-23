import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import goatcounter from '../../assets/goatcounter.png';
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
    text-shadow: 0 0 2px #3a78ff, 0 0 4px #3a78ff, 0 0 6px #3a78ff;
  }
  50% {
    text-shadow: 0 0 3px #3a78ff, 0 0 6px #3a78ff, 0 0 9px #3a78ff;
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
  box-shadow: 0 0 25px rgba(20, 110, 255, 0.5), inset 0 0 65px rgba(20, 110, 255, 0.5);
  background-color: rgba(17, 24, 39, 0.729);
  padding: 15px;
  border-radius: 10px;
  z-index: 1000;
  border: 1px solid rgba(52, 130, 255, 1);
  ${props => props.shake && css`
    animation: ${shake} 0.5s ease-in-out;
  `}
  @media screen and (max-width: 768px) {
    position: static;
    margin-top: 20px;
  }
`;

const DigitBox = styled.div`
  box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
  color: white;
  font-size: 27px;
  font-weight: bold;
  padding: 8px;
  margin: 0 5px;
  border-radius: 5px;
  min-width: 60px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(52, 130, 255, 1);
  -webkit-text-stroke: 1px #3a78ff;
  animation: ${neonPulse} 1.5s infinite;
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
        <div className="landing-counter-container-header">
          <h1>CLIPPERGOAT</h1>
          <h1>$10 million challenge</h1>
        </div>
        <div className="counter-content-header">
          <img src={goatcounter} alt="" />
          <CounterWrapper shake={shakeCounter}>
            <DigitBoxContainer>
              <DigitBox>{formatNumber(timeLeft.days || 0)}</DigitBox>
              <DigitBox>{formatNumber(timeLeft.hours || 0)}</DigitBox>
              <DigitBox>{formatNumber(timeLeft.minutes || 0)}</DigitBox>
              <DigitBox>{formatNumber(timeLeft.seconds || 0)}</DigitBox>
            </DigitBoxContainer>
            <div className="time-container">
              <p className="time">days</p>
              <p className="time">hours</p>
              <p className="time">minutes</p>
              <p className="time">seconds</p>
            </div>
          </CounterWrapper>
        </div>
      </div>
    </animated.div>
  );
};

export default AnimatedCounter;
