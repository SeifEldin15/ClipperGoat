import React, { useState, useRef, useEffect } from 'react';
import './FAQ.css'; // Make sure to create this CSS file

const FAQItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  return (
    <div className="faq-item ">
      <div 
        className="faq-question" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {question}
        <span>{isExpanded ? '-' : '+'}</span>
      </div>
      <div 
        className="faq-answer-wrapper" 
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="faq-answer">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "Isn't this just the same information I can find on Google or YouTube?",
      answer: "Answer here..."
    },
    {
      question: "What makes Active Income different from other programs?",
      answer: "Answer here..."
    },
    {
      question: "Can I do this even if I live outside the US?",
      answer: "Answer here..."
    },
    {
      question: "Do I need startup capital to make money inside Active Income?",
      answer: "Answer here..."
    },
    {
      question: "What if I'm interested in passive income?",
      answer: "Answer here..."
    },
    {
      question: "What is the price of Active Income?",
      answer: "Answer here..."
    },
    {
      question: "I don't have any money, can I get access for free?",
      answer: "Answer here..."
    },
    {
      question: "But is Active Income really guaranteed to work?",
      answer: "Answer here..."
    }
  ];

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;