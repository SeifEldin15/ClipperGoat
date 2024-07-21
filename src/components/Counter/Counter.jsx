import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import './Counter.css'

const shake = keyframes`
  // 0% { transform: translateX(0); }
  // 25% { transform: translateX(-5px); }
  // 50% { transform: translateX(5px); }
  // 75% { transform: translateX(-5px); }
  // 100% { transform: translateX(0); }
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
  background: #1F2937;
  padding: 20px;
  margin-top: 80px;
  border-radius: 10px;
  animation: ${shake} 0.5s ease-in-out infinite;
  z-index: 1000;
  @media screen and (max-width: 768px) {
    position: static;
    margin-top: 20px;
  }
`;

const DigitBoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DigitBox = styled.div`
  box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
  background: #111827;
  color: white;
  font-size: 27px;
  font-weight: bold;
  padding: 8px;
  margin: 0 5px;
  border-radius: 5px;
  min-width: 60px;
  text-align: center;
  transition: all 0.3s ease;
`;

const AnimatedCounter = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

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

    return () => clearInterval(timer);
  }, [targetDate]);

  const slideInStyles = useSpring({
    from: { transform: 'translateY(-900%)' },
    to: { transform: 'translateY(10%)' },
    config: { tension: 170, friction: 36 }
  });

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <animated.div style={slideInStyles} className='counter-container'>
      <CounterWrapper>
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
    </animated.div>
  );
};

export default AnimatedCounter;