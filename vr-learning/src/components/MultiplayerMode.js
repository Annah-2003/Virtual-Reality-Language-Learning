import React, { useState } from 'react';

function MultiplayerMode({ onJoin }) {
  const [players, setPlayers] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [message, setMessage] = useState('');
  const [selectedAvatars, setSelectedAvatars] = useState([]);

  const avatars = [
    { id: 1, src: 'https://i.pinimg.com/564x/74/26/b4/7426b4c1421fe1b12e37b49e40ce7143.jpg' },
    { id: 2, src: 'https://i.pinimg.com/564x/96/78/e5/9678e599877bfc79751fc8ba3545d862.jpg' },
    { id: 3, src: 'https://i.pinimg.com/564x/d9/c0/0e/d9c00eeab7675cf521e017aedc99b862.jpg' },
    // Add more avatar options as needed
  ];

  const handleJoinClick = () => {
    onJoin();
    // Add the current player to the player list with the selected avatar
    setPlayers([...players, { id: players.length + 1, name: 'Player' + (players.length + 1), avatar: selectedAvatar }]);
    setSelectedAvatars([...selectedAvatars, selectedAvatar]);
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    const selectedPlayer = players.length + 1;
    setMessage(`Player ${selectedPlayer} selected`);
  };

  const handleSendMessage = () => {
    // Implement message sending functionality
    // For simplicity, let's just display the message in the console
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="MultiplayerMode">
      <h2>Multiplayer Mode</h2>
      <button onClick={handleJoinClick}>Join Multiplayer</button>
      <div className="avatar-selection">
        <h3>Select Avatar:</h3>
        <div className="avatar-options">
          {avatars.map(avatar => (
            <img
              key={avatar.id}
              src={avatar.src}
              alt={`Avatar ${avatar.id}`}
              className={selectedAvatar === avatar.id ? 'selected' : ''}
              onClick={() => handleAvatarSelect(avatar.id)}
              style={{
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                cursor: 'pointer',
                margin: '5px',
                border: selectedAvatars.includes(avatar.id) ? '2px solid green' : 'none',
              }}
            />
          ))}
        </div>
      </div>
      <div className="player-list">
        <h3>Players:</h3>
        <ul>
          {players.map(player => (
            <li key={player.id}>
              <img src={`avatar${player.avatar}.png`} alt={`Avatar ${player.avatar}`} />
              {player.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-box">
        <h3>Chat:</h3>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      {/* Other features like scoreboard, mini games, etc. can be added here */}
    </div>
  );
}

export default MultiplayerMode;
