// Conversation.js
import React from 'react';


function Conversation({ messages }) {
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
        <button>Send</button>
      </div>
    </div>
  );
}

export default Conversation;
