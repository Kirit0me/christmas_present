import React from "react";
import { motion } from "framer-motion";

const Snowfalls = () => {
  const snowflakes = Array.from({ length: 50 });

  // Snowflake SVG paths for variety
  const snowflakePaths = [
    "M12 0 L12 24 M0 12 L24 12 M3.5 3.5 L20.5 20.5 M20.5 3.5 L3.5 20.5", // Simple snowflake
    "M12 2 L12 22 M2 12 L22 12 M4 4 L20 20 M20 4 L4 20 M12 8 L16 12 L12 16 L8 12 Z", // Star-like snowflake
    "M12 0 L12 24 M0 12 L24 12 M6 6 L18 18 M18 6 L6 18", // Cross-like snowflake
  ];

  return (
    <div className="w-screen h-screen overflow-hidden fixed top-0 left-0 pointer-events-none">
      {snowflakes.map((_, index) => {
        const size = Math.random() * 15 + 10; // Random size for snowflakes
        const horizontalStart = Math.random() * 100; // Random horizontal start position
        const randomPath = snowflakePaths[Math.floor(Math.random() * snowflakePaths.length)];
        const delay = Math.random() * 5; // Random delay for staggered effect

        return (
          <motion.svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="absolute"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${horizontalStart}vw`,
              fill: "none",
              stroke: "white",
              strokeWidth: 2,
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: "110vh",
              opacity: 1,
              x: `${horizontalStart + (Math.random() - 0.5) * 20}vw`,
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              delay,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <path d={randomPath} />
          </motion.svg>
        );
      })}
    </div>
  );
};

export default Snowfalls;
