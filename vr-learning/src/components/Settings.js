import React, { useState, useEffect } from 'react';

function Settings({ onSettingsChange }) {
  const [language, setLanguage] = useState('');
  const [difficulty, setDifficulty] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/settings')
      .then(response => response.json())
      .then(data => {
        setLanguage(data.settings.language);
        setDifficulty(data.settings.difficulty);
      })
      .catch(error => console.error('Error fetching settings:', error));
  }, []);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleSaveSettings = () => {
    // Save settings data to the server
    fetch('http://localhost:3000/settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ language, difficulty })
    })
    .then(response => response.json())
    .then(data => {
      // Invoke the callback function with the updated settings
      onSettingsChange({ language: data.language, difficulty: data.difficulty });
    })
    .catch(error => console.error('Error saving settings:', error));
  };

  return (
    <div className="Settings">
      <h2>Settings</h2>
      <div className="setting-item">
        <label htmlFor="language">Language:</label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Italian">Italian</option>
          {/* Add more languages as needed */}
        </select>
      </div>
      <div className="setting-item">
        <label htmlFor="difficulty">Difficulty:</label>
        <select id="difficulty" value={difficulty} onChange={handleDifficultyChange}>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <button onClick={handleSaveSettings}>Save</button>
    </div>
  );
}

export default Settings;
