import React, {useState} from "react";
import {users} from "./data.json";
import './App.css';

function TweetCreator(props) {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const createTweet = (e) => {
        //Voorkomt het herladen van het scherm
        e.preventDefault();

        if (name.length < 1 || message.length < 1) {
            window.alert("Vul alle waardes in");
        }
        else {
            props.setTweets([
                ...props.tweets, {id: Math.random()*1000, name: name, message: message, likes: 0}
            ]);
            //Omdat de values van de input velden gelijk staan aan name en message, zullen deze elementen ook meteen aangepast worden
            setName("");
            setMessage("");
        }
    };

    //onChange event om de ingevoerde informatie meteen in een state te zetten en later te gebruiken
    return (
        <div className="tweet">
            <form>
                <h3>Name</h3>
                <input type="text" required placeholder="Name" onChange={e => setName(e.target.value)} value={name}/>
                <h3>Message</h3>
                <input type="text" required placeholder="Message" onChange={e => setMessage(e.target.value)} value={message}/>
                <br/>
                <button onClick={createTweet} >Post</button>
            </form>
        </div>
    )
}

export  default TweetCreator;