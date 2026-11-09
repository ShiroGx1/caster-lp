import { useState, useEffect } from "react";

const statusTexts = [
  "Initializing the Realm...",
  "Summoning the Dragons...",
  "Forging the Legion...",
  "Loading Assets...",
  "Preparing the Battlefield...",
  "Almost Ready...",
];

export const usePreloader = (minTime = 4000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current = Math.min(current + Math.random() * 1.2 + 0.4, 100);
      setProgress(current);

      const idx = Math.min(
        Math.floor((current / 100) * statusTexts.length),
        statusTexts.length - 1,
      );
      setStatusIndex(idx);
    }, 100);

    // Pastikan preloader tampil minimal `minTime` ms
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setStatusIndex(statusTexts.length - 1);
      setTimeout(() => setIsLoading(false), 500);
    }, minTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [minTime]);

  return { isLoading, progress, statusText: statusTexts[statusIndex] };
};
