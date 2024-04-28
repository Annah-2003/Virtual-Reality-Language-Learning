import React from 'react';

function Conversation({ messages }) {
  const sendMessage = () => {
    const messageInput = document.querySelector('.input-container input');
    const message = messageInput.value;
    // Send the message to the server (e.g., db.json) using fetch or axios
    // Example using fetch:
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then(response => response.json())
      .then(data => {
        // Provide a response based on the user's action
        const wantsToLearnLanguage = window.confirm('Do you want to learn a new language?');
        if (wantsToLearnLanguage) {
          // Navigate to language learning page
          window.location.href = '/learn';
        } else {
          // Navigate to settings or multiplayer or other page
          // Modify the URL as needed
          window.location.href = '/settings';
        }
      })
      .catch(error => console.error('Error sending message:', error));
  };

  return (
    <div className="Conversation">
      <h2>Conversation</h2>
      <div className="message-container">
        {messages.map(message => (
          <div key={message.id} className="message">
            <strong>{message.sender}:</strong> {message.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input type="text" placeholder="Type your message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Conversation;
