import { useState, useEffect } from 'react';
import { useSocket } from '../context/SocketContext';

const ChatBox = () => {
  const socket = useSocket();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!socket) return;

    socket.on('receiveMessage', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off('receiveMessage');
  }, [socket]);

  const sendMessage = () => {
    if (message.trim() && socket) {
      socket.emit('sendMessage', { text: message, sender: 'Leonard' });
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>💬 Real-Time Chat</h2>
      <div style={{ border: '1px solid #ccc', padding: '1rem', height: '300px', overflowY: 'scroll' }}>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        style={{ width: '80%', marginTop: '1rem' }}
      />
      <button onClick={sendMessage} style={{ marginLeft: '1rem' }}>Send</button>
    </div>
  );
};

export default ChatBox;
