import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  style?: string;
  delay?: number;
  initialDelay?: number; // Add this line
}

const Typewriter: React.FC<TypewriterProps> = ({
  style = "",
  text,
  delay = 200,
  initialDelay = 0,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false); // Add this line

  useEffect(() => {
    if (!hasStarted) {
      const initialTimeOut = setTimeout(() => {
        setHasStarted(true);
      }, initialDelay);
      return () => clearTimeout(initialTimeOut);
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, hasStarted, initialDelay]);

  return <span className={style}>{currentText}</span>;
};

export default Typewriter;
