import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

//Importeer de Hello component van sayHello.js. Deze gebruik ik in de div hieronder
import Hello from "./sayHello";
import Tweet from "./Tweet";

function App() {

    //Later is het mogelijk om api data of json data in te lezen en in states om te zetten om uit te lezen op de pagina. Nu doe ik het hard coderen.
    //In deze state staat nu een array van objecten
    const [users, setUsers] = useState([
        {name: 'Sam', message: "Hallo wereld!", likes: 3},
        {name: 'Metten', message: "HOI", likes: 4},
        {name: 'Tessa', message: "Ik praat niet met non gamers.", likes: 420},
        {name: 'Tim', message: "New phone who dis?", likes: 69}
    ]);

    //De 'api data' staat in de vorm van een array en kan met de map functie ingeladen worden op een manier dat het de juiste componenten aanmaakt met de juiste properties!
    return (
        <div className="app">
            <h1>This is the app component</h1>
            <Hello></Hello>
            <div className="tweet-container">
                {users.map(user => (
                    <Tweet name={user.name} message={user.message} likes={user.likes}></Tweet>
                ))}
            </div>
        </div>
    )

        /*
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
      </div>
    );
     */
}


export default App;
