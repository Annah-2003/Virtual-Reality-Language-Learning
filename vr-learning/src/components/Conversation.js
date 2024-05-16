import React, { useState, useEffect } from 'react';

function Conversation() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/conversations')
      .then(response => response.json())
      .then(data => setMessages(data.conversations))
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

  const sendMessage = () => {
    // Implement sending message functionality
  };

  return (
    <div className="Conversation">
      {/* Conversation UI */}
    </div>
  );
}

export default Conversation;
