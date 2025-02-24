import { useState } from 'react';
import { pingServer } from './grpc-client';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handlePing = async () => {
    try {
      const reply = await pingServer(message);
      setResponse(reply);
    } catch (err) {
      setResponse(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <h1>gRPC Ping Test</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter a message"
      />
      <button onClick={handlePing}>Ping</button>
      <h2>Response:</h2>
      <p>{response}</p>
    </div>
  );
}

export default App;