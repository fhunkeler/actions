
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHello = async () => {
      try {
        const res = await axios.get("http://localhost:3001/hello");
        setResponse(JSON.stringify(res.data));
        setError(null);
      } catch (e) {
        setResponse(null);
        setError(e.message);
      }
    };

    fetchHello();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Hello</h2>
        {response && (<pre>{response}</pre>)}
        {error && (<pre>{error}</pre>)}
      </header>
    </div>
  );
}

export default App;
