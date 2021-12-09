import logo from './logo.svg';
import './App.css';
//Get useState and useEffect to use later
import React, {useState, useEffect} from "react";
//import {userData} from "./data";
import {users} from "./data.json";



//Importeer de Hello component van sayHello.js. Deze gebruik ik in de div hieronder
import Hello from "./sayHello";
import Tweet from "./Tweet";
import TweetCreator from "./TweetCreator";

function App() {

    //Fire this code every time a user gets added
    useEffect(() => {
        console.log(users);
    }, [users])

    //Later is het mogelijk om api data of json data in te lezen en in states om te zetten om uit te lezen op de pagina. Nu doe ik het hard coderen.
    //In deze state staat nu een array van objecten
    //Deze state wordt als props meegegeven bij de tweedcreator component. De tweetcreator component kan dan de array daardoor veranderen (items toevoegen)
    const [tweets, setTweets] = useState([
        {id: 0, name: 'Sam', message: "Hallo wereld!", likes: 3},
        {id: 1, name: 'Metten', message: "HOI", likes: 4},
        {id: 2, name: 'Tessa', message: "Ik praat niet met non gamers.", likes: 420},
        {id: 3, name: 'Tim', message: "New phone who dis?", likes: 69}]);

    //De 'api data' staat in de vorm van een array en kan met de map functie ingeladen worden op een manier dat het de juiste componenten aanmaakt met de juiste properties!
    //Key kan niet als property gebruikt worden omdat react deze nodig heeft om 100% functioneel te renderen. Daarom maak ik ook id aan met dezelfde waarde
    return (
        <div className="app">
            <div className="tweet-creator-container">
                <TweetCreator
                    tweets={tweets}
                    setTweets={setTweets}>
                </TweetCreator>
            </div>
            <div className="tweet-container">
                {tweets.map(tweet => (
                    <Tweet
                        tweets={tweets}
                        setTweets={setTweets}
                        key={tweet.id}
                        id={tweet.id}
                        name={tweet.name}
                        message={tweet.message}
                        likes={tweet.likes}>
                    </Tweet>
                ))}
            </div>
        </div>
    )
}


export default App;
