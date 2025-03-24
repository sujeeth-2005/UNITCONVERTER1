import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const LoadingAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.to(textRef.current, {
      backgroundPosition: '200% center',
      duration: 3,
      ease: 'none'
    });

    gsap.to(containerRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
      style={{ opacity: 0 }}
    >
      <div
        ref={textRef}
        className="text-4xl font-bold"
        style={{
          background: 'linear-gradient(to right, #4ade80, #60a5fa, #4ade80)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          whiteSpace: 'nowrap'
        }}
      >
        Sujeeth Sivanarasimman Saran
      </div>
    </div>
  );
};