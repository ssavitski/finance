import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/ssavitski/finance/news')
      .then(res => {
        setNews(res.data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Add <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {news.map(novelty => {
            return <li>{novelty.name}</li>;
          })}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
