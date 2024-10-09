import { useState, useEffect } from "react";

const Cursor = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 530);

    // Cleanup timer
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <>{isVisible && <span className="h-6 ml-1 text-xs text-white bg-white/80">|</span>}</>
  );
};

export default Cursor;
