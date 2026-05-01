import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, isFloat }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start;
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const easeOut = 1 - Math.pow(1 - Math.min(progress / 2000, 1), 3);
        const current = easeOut * value;
        setCount(isFloat ? current.toFixed(2) : Math.floor(current));
        if (progress < 2000) requestAnimationFrame(animate);
        else setCount(isFloat ? value.toFixed(2) : value);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, isFloat]);

  return <span ref={ref}>{count}</span>;
}
