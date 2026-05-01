import React, { useState, useEffect } from 'react';

export default function Typewriter({ texts }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [isDel, setIsDel] = useState(false);

  useEffect(() => {
    const fullText = texts[idx];
    let speed = isDel ? 40 : 80;

    if (!isDel && text === fullText) {
      speed = 1200;
      setIsDel(true);
    } else if (isDel && text === '') {
      setIsDel(false);
      setIdx((idx + 1) % texts.length);
      speed = 500;
    }

    const timeout = setTimeout(() => {
      setText(fullText.substring(0, text.length + (isDel ? -1 : 1)));
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDel, idx, texts]);

  return <span>{text}<span className="animate-pulse">▮</span></span>;
}
