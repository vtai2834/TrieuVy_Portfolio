import { useEffect, useState } from 'react';

/* Current time in the visitor's browser timezone, updated every `intervalMs`. */
export default function useClock(intervalMs = 1000) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return now;
}
