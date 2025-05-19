import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/background.webp";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [show, setShow] = useState(true);
  const [screenOpacity, setScreenOpacity] = useState(1);
  const [textOpacity, setTextOpacity] = useState(0);
  const [textTransform, setTextTransform] = useState("translateY(20px)");

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setTextOpacity(1);
      setTextTransform("translateY(0)");
    }, 200);

    if (!isLoading) {
      setScreenOpacity(0);

      const screenTimer = setTimeout(() => {
        setShow(false);
      }, 500);

      return () => {
        clearTimeout(screenTimer);
        clearTimeout(textTimer);
      };
    }

    return () => clearTimeout(textTimer);
  }, [isLoading]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-600"
      style={{
        opacity: screenOpacity,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1
        className="text-4xl font-bold text-white/70 transition-all duration-500 ease-in-out"
        style={{
          opacity: textOpacity,
          transform: textTransform,
        }}
      >
        Welcome
      </h1>
    </div>
  );
};

export default LoadingScreen;
