import React, { useRef } from 'react';

export default function TiltCard({ children, className }) {
  const cardRef = useRef(null);
  const highlightRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !highlightRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    highlightRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1), transparent 40%)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !highlightRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    cardRef.current.style.transition = `transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)`;
    highlightRef.current.style.background = `transparent`;
    setTimeout(() => { if (cardRef.current) cardRef.current.style.transition = ''; }, 500);
  };

  return (
    <div ref={cardRef} className={`relative rotating-border ${className}`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="absolute inset-0 z-10 pointer-events-none" ref={highlightRef} />
      <div className="bg-card w-full h-full relative z-0 p-6 rounded-lg overflow-hidden flex flex-col">{children}</div>
    </div>
  );
}
