//states zijn variabelen voor componenten en moeten eerst geimport worden bovenaan
import React, {useState} from "react";
import {users} from "./data.json";
import './App.css';


//props staat voor properties en kunnen meegeven worden bij het aanmaken van een tweet component (zie app.js)
function Tweet(props) {

    //Het maken van een state (variabele)
    //eerste parameter is de naam van de variabele, tweede is de functie naam om de variabele mee aan te passen, derde is de default value
    const [liked, setLiked] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [isGreen, setIsGreen] = useState(true);
    const [buttonText, setButtonText] = useState("Like");
    //properties zijn read only dus om ze te kunnen aanpassen moet je ze in een state zetten
    const [likes, setLikes] = useState(props.likes);

    //Functie van het huidige component om likes toe te voegen, classes toe te voegen en attributen toe te voegen
    const addLike = () => {
        if (!liked) {
            setLikes(likes + 1);
            //users[props.id].likes = likes + 1;
            setButtonText("Dislike");
        }
        else {
            setLikes(likes - 1);
            setButtonText("Like");
        }

        //Toggle tussen true en false met !state
        setLiked(!liked);
        //setDisabled(!disabled);
        setIsGreen(!isGreen);
    }

    const deleteTweet = (el) => {
        //Filter de tweets array en haal alle objecten eruit waarvan het id gelijk staat aan het id van deze specifieke component
        props.setTweets(props.tweets.filter((el) => el.id !== props.id))
    }

    //Classed worden in JSX toegevoegd met "className"
    //Geef de gray class die de achtergrond grijs maakt wanneer de state setIsGray true is
    //Er kunnen geen if statements gebruikt worden in JSX. Gebruik in plaats daarvan ternary operators (setIsGray? true situatie : false situatie)
    return (
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>{likes} likes</h3>
            <div>
                <button className={isGreen ? "green" : ""} disabled={disabled} onClick={addLike}>{buttonText}</button>
                <button onClick={deleteTweet}>Delete</button>
            </div>
        </div>
    )
}

export  default Tweet;