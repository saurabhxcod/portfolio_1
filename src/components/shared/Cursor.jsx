import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorDot.current) cursorDot.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };
    document.addEventListener('mousemove', onMouseMove);

    let animationFrameId;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (cursorRing.current) cursorRing.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={cursorDot} className="fixed top-0 left-0 w-[10px] h-[10px] bg-cyan rounded-full pointer-events-none z-[10000] -ml-[5px] -mt-[5px]" />
      <div ref={cursorRing} className="fixed top-0 left-0 w-[28px] h-[28px] border-2 border-cyan rounded-full pointer-events-none z-[9999] transition-all duration-100 ease-out -ml-[14px] -mt-[14px]" />
    </>
  );
}
