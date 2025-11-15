'use client';

import React, { useState, useEffect } from 'react';

export default function StatusBar() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border-t border-[#333333] px-6 py-2 flex justify-between items-center text-xs text-[#999999] font-mono">
      <div className="flex gap-6">
        <span className="text-[#58a6ff]">● Python</span>
        <span className="text-[#bc8cff]">● React Native</span>
        <span className="text-[#ff5e5e]">● ML/AI</span>
      </div>
      <div className="flex gap-6">
        <span>📍 IN (India)</span>
        <span>{time || '--:--:--'}</span>
      </div>
    </div>
  );
}
