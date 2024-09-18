import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import { mobile } from "../Responsive";

const Type = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (!typewriterRef.current) return;

    const typewriter = new Typewriter(typewriterRef.current, {
      strings: ['Close To Nature'],
      autoStart: true,
      loop: true, // Set loop to true for infinite loop
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <div
      ref={typewriterRef}
      style={{
        position: 'absolute',
        left: '70%', // Center horizontally
        transform: 'translateX(-50%)', // Center horizontally
        top: '30%', // Center vertically
        color: 'cyan',
        fontWeight: 'bold',
        fontSize:'20px',
        fontFamily:'monospace',
      }}
    />
  );
};

export default Type;
