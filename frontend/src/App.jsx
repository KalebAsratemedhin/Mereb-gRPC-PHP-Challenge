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
    <div className='home '>
      <div className='container'>
        <h1>gRPC Ping Test</h1>
        <p style={{ marginBottom: "30px"}}>This application demos a php grpc server implemented using spiral/php-grpc. The grpc client setup with react communicates with the php server using an envoy.</p>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter a message"
          style={{ marginBottom: "30px", padding: "8px", fontSize: "25px", fontFamily: "Poppins", borderRadius: "5px", border: "1px solid gray"}}
        />
        <button onClick={handlePing}>Ping</button>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;