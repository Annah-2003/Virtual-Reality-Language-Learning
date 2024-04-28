import React from 'react';

import './styles/App.css'; // Import your main CSS file

import VRScene from './components/VRScene';
import Conversation from './components/Conversation';
import ProgressTracker from './components/ProgressTracker';
import Settings from './components/Settings';
import MultiplayerMode from './components/MultiplayerMode';

function App() {
  // Placeholder data
  const currentTime = new Date().getHours();
  let conversationMessages = [];

  if (currentTime < 12) {
    conversationMessages.push({ id: 1, sender: 'Virtual Character', message: 'Good morning! Ready to start learning?' });
  } else if (currentTime < 18) {
    conversationMessages.push({ id: 1, sender: 'Virtual Character', message: 'Good afternoon! How is your day going?' });
  } else {
    conversationMessages.push({ id: 1, sender: 'Virtual Character', message: 'Good evening! Time to practice some language!' });
  }

  conversationMessages.push({ id: 2, sender: 'You', message: 'Hi, nice to meet you!' });

  const progressData = {
    level: 1,
    experience: 0,
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
    <Router>
      <div className="App">
        <div className="background-image"></div> {/* This div holds the background image */}
        <h1>Virtual Reality Language Learning Game</h1>
        <div className="container">
          <VRScene />
          <div className="sidebar">
            <Switch>
              <Route exact path="/conversation" render={() => <Conversation messages={conversationMessages} />} />
              <Route exact path="/progress" render={() => <ProgressTracker data={progressData} />} />
              <Route exact path="/settings" render={() => <Settings settings={settings} onSettingsChange={handleSettingsChange} />} />
              <Route exact path="/multiplayer" render={() => <MultiplayerMode onJoin={handleMultiplayerJoin} />} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
