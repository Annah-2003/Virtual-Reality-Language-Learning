import React, { useState, useEffect } from 'react';
import './styles/App.css'; // Import your main CSS file

import VRScene from './components/VRScene';
import Conversation from './components/Conversation';
import ProgressTracker from './components/ProgressTracker';
import Settings from './components/Settings';
import MultiplayerMode from './components/MultiplayerMode';

function App() {
  // Define state variables to hold fetched data
  const [conversationMessages, setConversationMessages] = useState([]);
  const [progressData, setProgressData] = useState({});
  const [settings, setSettings] = useState({});
  const [multiplayerStatus, setMultiplayerStatus] = useState('');

  // Function to fetch data from the JSON server
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/');
      const data = await response.json();
      // Update state variables with fetched data
      setConversationMessages(data.conversations);
      setProgressData(data.progress);
      setSettings(data.settings);
      setMultiplayerStatus(data.multiplayer.status);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call fetchData function when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const handleSettingsChange = (newSettings) => {
    // Handle settings change
    console.log('New settings:', newSettings);
    // Update settings state
    setSettings(newSettings);
  };

  const handleMultiplayerJoin = () => {
    // Handle joining multiplayer mode
    console.log('Joining multiplayer mode...');
    // You can implement multiplayer join logic here
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
          <MultiplayerMode onJoin={handleMultiplayerJoin} status={multiplayerStatus} />
        </div>
      </div>
    </div>
  );
}

export default App;
