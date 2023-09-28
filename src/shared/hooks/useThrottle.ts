/* eslint-disable consistent-return */
import { useEffect, useRef, useState } from 'react';

export const useThrottle = <T>(value: T, interval = 500) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastUpdated = useRef(null);

  useEffect(() => {
    const now = Date.now();

    if (lastUpdated.current && now >= lastUpdated.current + interval) {
      // @ts-ignore
      lastUpdated.current = now;
      setThrottledValue(value);
    } else {
      const id = setTimeout(() => {
        // @ts-ignore
        lastUpdated.current = now;
        setThrottledValue(value);
      }, interval);

      return () => clearTimeout(id);
    }
  }, [value, interval]);

  return throttledValue;
};

export default useThrottle;
