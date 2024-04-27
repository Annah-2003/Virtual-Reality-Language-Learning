// MultiplayerMode.js
import React from 'react';


function MultiplayerMode({ onJoin }) {
  const handleJoinClick = () => {
    onJoin();
  };

  return (
    <div className="MultiplayerMode">
      <h2>Multiplayer Mode</h2>
      <button onClick={handleJoinClick}>Join Multiplayer</button>
    </div>
  );
}

export default MultiplayerMode;
