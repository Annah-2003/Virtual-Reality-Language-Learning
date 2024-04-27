// App.js
import React from 'react';
import './styles/App.css'; // Import your main CSS file

import VRScene from './components/VRScene';
import Conversation from './components/Conversation';
import ProgressTracker from './components/ProgressTracker';
import Settings from './components/Settings';
import MultiplayerMode from './components/MultiplayerMode';

function App() {
  // Placeholder data
  const conversationMessages = [
    { id: 1, sender: 'Virtual Character', message: 'Welcome to the virtual world! Let\'s practice some language.' },
    { id: 2, sender: 'You', message: 'Hi, nice to meet you!' },
    // Add more messages as needed
  ];

  const progressData = {
    level: 3,
    experience: 120,
    // Add more progress data as needed
  };

  const settings = {
    language: 'Spanish',
    difficulty: 'Intermediate',
    // Add more settings options as needed
  };

  const handleSettingsChange = (newSettings) => {
    // Handle settings change
    console.log('New settings:', newSettings);
  };

  const handleMultiplayerJoin = () => {
    // Handle joining multiplayer mode
    console.log('Joining multiplayer mode...');
  };

  return (
    <div className="App">
      <div className="background-image"></div> {/* This div holds the background image */}
      <h1>Virtual Reality Language Learning Game</h1>
      <div className="container">
        <VRScene />
        <div className="sidebar">
          <Conversation messages={conversationMessages} />
          <ProgressTracker data={progressData} />
          <Settings settings={settings} onSettingsChange={handleSettingsChange} />
          <MultiplayerMode onJoin={handleMultiplayerJoin} />
        </div>
      </div>
    </div>
  );
}

export default App;
