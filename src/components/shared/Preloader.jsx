import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [isFading, setIsFading] = useState(false);
  const fullLogs = [
    "> Loading modules...",
    "> Connecting to cloud...",
    "> Mounting components...",
    "> Calibrating 3D engine...",
    "> Welcome, Recruiter."
  ];

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += 2;
      setProgress(p);
      if (p >= 100) clearInterval(interval);
    }, 36);

    fullLogs.forEach((log, i) => {
      setTimeout(() => setLogs(prev => [...prev, log]), 400 + i * 200);
    });

    setTimeout(() => {
      setIsFading(true);
      setTimeout(onComplete, 200);
    }, 2400);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isFading) return <div className="fixed inset-0 bg-white z-[9999] animate-ping" />;

  return (
    <div className="fixed inset-0 bg-[#050508] z-[9999] flex flex-col items-center justify-center font-mono">
      <h1 className="text-cyan text-xl mb-4">INITIALIZING PORTFOLIO...</h1>
      <div className="w-64 h-2 border border-cyan/30 rounded overflow-hidden mb-4">
        <div className="h-full bg-cyan transition-all duration-75" style={{ width: `${progress}%` }} />
      </div>
      <div className="w-64 text-cyan text-xs text-left h-24">
        {logs.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  );
}
