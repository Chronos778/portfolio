'use client';

import { useState, useEffect } from 'react';

export function useTypingEffect(text: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
}

export function useCursorBlink(isVisible: boolean = true) {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, [isVisible]);

  return blink;
}
