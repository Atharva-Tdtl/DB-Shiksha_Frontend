import { useState, useEffect } from 'react';

const useCountUp = (end, duration = 2000, active = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || end === 0) return;

    let startTimestamp = null;
    let requestId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestId = window.requestAnimationFrame(step);
      }
    };

    requestId = window.requestAnimationFrame(step);

    return () => {
      if (requestId) {
        window.cancelAnimationFrame(requestId);
      }
    };
  }, [end, duration, active]);

  return count;
};

export default useCountUp;
