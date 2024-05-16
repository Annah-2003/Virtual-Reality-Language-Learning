import React, { useState } from 'react';
import { motion } from 'framer-motion';

function VRScene() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const [showSecret, setShowSecret] = useState(false);

  const toggleSecret = () => {
    setShowSecret(!showSecret);
  };

  return (
    <div className="VRScene">
      <h2>Virtual Reality Scene</h2>
      <motion.div
        className="counter-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>Counter: {counter}</p>
        <div>
          <button onClick={increaseCounter}>Increase</button>
          <button onClick={decreaseCounter}>Decrease</button>
        </div>
      </motion.div>
      <motion.div
        className="dynamic-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p>This is some dynamic content that can change based on user interaction.</p>
      </motion.div>
      {/* Additional interactive content */}
      <motion.div
        className="secret-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <button onClick={toggleSecret}>Show Secret</button>
        {showSecret && (
          <p className="secret">🎉 You found the secret! 🎉</p>
        )}
      </motion.div>
    </div>
  );
}

export default VRScene;
