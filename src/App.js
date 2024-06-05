import React from "react";
import Users from './Users/Users';
import Pokemon from './Pokemons/Pokemons';
import YouTubeVideo from './VideoYoutube/VideoYoutube';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Users />
      <Pokemon />
    </div>
  );
}

export default App;
