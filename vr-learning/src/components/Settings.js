// Settings.js
import React, { useState } from 'react';


function Settings({ settings, onSettingsChange }) {
  const [language, setLanguage] = useState(settings.language);
  const [difficulty, setDifficulty] = useState(settings.difficulty);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleSaveSettings = () => {
    onSettingsChange({ language, difficulty });
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
