import logo from './logo.svg';
import './App.css';
import {  useEffect} from 'react'

function App() {

  useEffect(() => {
    fetch("/users")
    .then(res => res.json())
    .then(user => 
          console.log("current", user));
      },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1> Hello555 </h1>
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
    </div>
  );
}

export default App;
