// slideshow.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className={`absolute inset-0 ${images[currentIndex].color} object-cover`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            width: images[currentIndex].width,
            height: images[currentIndex].height,
            margin: "auto",
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Slideshow;
