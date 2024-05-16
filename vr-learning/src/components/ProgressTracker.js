import React, { useState, useEffect } from 'react';

function ProgressTracker() {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/progress')
      .then(response => response.json())
      .then(data => setProgress(data.progress))
      .catch(error => console.error('Error fetching progress:', error));
  }, []);

  return (
    <div className="ProgressTracker">
      {/* Progress UI */}
    </div>
  );
}

export default ProgressTracker;
