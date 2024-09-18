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
    <>{isVisible && <span className="text-white bg-white/80 text-xs ml-1 h-6">|</span>}</>
  );
};

export default Cursor;
