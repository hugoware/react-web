import axios from 'axios';
import { useState } from 'react';

// styling
import './App.scss';

function App() {
  const [quote, setQuote] = useState();
  async function getMessage() {
    const result = await axios.get('/funny-quote');
    setQuote(result.data.quote);
  }

  return (
    <div className="app">

      <h4>Funny Quotes</h4>
      <blockquote>{quote}</blockquote>
      <button onClick={getMessage}>
        Get a new quote!
      </button>
      
    </div>
  );
}

export default App;
