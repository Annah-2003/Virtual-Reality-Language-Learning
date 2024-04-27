// ProgressTracker.js
import React from 'react';


function ProgressTracker({ data }) {
  return (
    <div className="ProgressTracker">
      <h2>Progress Tracker</h2>
      <div className="progress-info">
        <p>Level: {data.level}</p>
        <p>Experience: {data.experience}</p>
      </div>
    </div>
  );
}

export default ProgressTracker;
