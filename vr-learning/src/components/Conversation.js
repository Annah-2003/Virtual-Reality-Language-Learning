import React, { useState, useEffect } from 'react';

function Conversation() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/conversations')
      .then(response => response.json())
      .then(data => setMessages(data.conversations || [])) // Ensure messages is always an array
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

  const sendMessage = () => {
    fetch('http://localhost:3000/conversations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newMessage }),
    })
      .then(response => response.json())
      .then(data => {
        // If the message was successfully sent, update the messages state
        setMessages([...messages, data.message]);
        // Clear the newMessage state
        setNewMessage('');
      })
      .catch(error => console.error('Error sending message:', error));
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <div className="Conversation">
      <h2>Conversation</h2>
      <div className="message-container">
        {messages && messages.map(message => (
          <div key={message.id} className="message">
            <strong>{message.sender}:</strong> {message.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Conversation;
