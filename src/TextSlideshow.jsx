import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextSlideshow = ({ paragraphs, duration = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
    }, duration);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [paragraphs, duration]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex} // Ensure unique key for each paragraph
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center text-5xl text-white p-24 font-christmas"
        >
          {paragraphs[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextSlideshow;