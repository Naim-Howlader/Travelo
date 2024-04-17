import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ start, end, time, title }) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, 
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = time / Math.abs(end - start);
      const increment = end > start ? 1 : -1;
      const timer = setInterval(() => {
        setCount(prevCount => {
          if ((increment === 1 && prevCount >= end) || (increment === -1 && prevCount <= end)) {
            clearInterval(timer);
            return end;
          }
          return prevCount + increment;
        });
      }, duration);

      return () => clearInterval(timer);
    }
  }, [start, end, time, isVisible]);

  return (
    <div ref={counterRef} className='text-center '>
      {isVisible && <h1 className='text-[60px] font-[500] text-red-500'>{count}</h1>}
      <p className='text-base font-[500] text-gray-600 pt-3'>{title}</p>
    </div>
  );
};

export default Counter;
