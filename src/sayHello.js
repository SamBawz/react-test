//Import react van de node_module folder
import React from "react";

//Create a component
function Hello() {

    const sayHello = () => {
        window.alert("Hello world");
    }

    const buttonText = "Say hello"

    //Javascript code gaat altijd tussen {}

    //Nooit () bij de functie schrijven die je wilt aanroepen, anders wordt de functie meteen uitgevoerd bij het laden van de pagina.
    return (
        <div>
            <h3>This is the Hello component called inside the app component</h3>
           <button onClick={sayHello}>{buttonText}</button>
        </div>
    )
}

//Exporteer het component zodat deze later gebruikt kan worden als <Hello></Hello>
//Deze moet wel eerst geimporteerd worden (zie App.js)
export default Hello;