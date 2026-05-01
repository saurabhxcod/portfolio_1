import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedChart({ data }) {
  const [dashOffset, setDashOffset] = useState(1000);
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start;
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const easeOut = 1 - Math.pow(1 - Math.min(progress / 1500, 1), 3);
        setDashOffset(1000 * (1 - easeOut));
        if (progress < 1500) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView]);

  const pts = data.map((v, i) => [10 + i * 20, 90 - (v - 9) * 80]);
  const pathD = `M ${pts[0][0]} ${pts[0][1]} L ${pts[1][0]} ${pts[1][1]} L ${pts[2][0]} ${pts[2][1]} L ${pts[3][0]} ${pts[3][1]} L ${pts[4][0]} ${pts[4][1]}`;

  return (
    <svg ref={chartRef} viewBox="0 0 100 100" className="w-full h-48 drop-shadow-[0_0_15px_rgba(0,245,255,0.4)]">
      {[20, 40, 60, 80].map(y => <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(0,245,255,0.1)" strokeWidth="0.5" />)}
      <path d={pathD} fill="none" stroke="#00f5ff" strokeWidth="2" strokeDasharray="1000" strokeDashoffset={dashOffset} />
      {isInView && pts.map((p, i) => (
        <motion.circle key={i} cx={p[0]} cy={p[1]} r="2" fill="#00f5ff" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 + i * 0.1 }} className="drop-shadow-[0_0_5px_#ff6b00]" />
      ))}
      {[1, 2, 3, 4, 5].map(i => <text key={i} x={10 + (i - 1) * 20} y="98" fill="#8892a4" fontSize="4" fontFamily="monospace" textAnchor="middle">Sem{i}</text>)}
    </svg>
  );
}
