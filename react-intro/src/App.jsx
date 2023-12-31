import './css/App.css'
import {InputAdd} from "./assets/InputAdd.jsx";
import {Title} from "./assets/Title.jsx";
import React, { useState,useEffect  } from 'react';
import {Todos} from "./assets/Todos.jsx";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const LSKEY = "MyTodoApp";

let todosStorage = '[]';
let eventsStorage = '[]';

console.log(window.localStorage.getItem(LSKEY + ".todos"));

if(window.localStorage.getItem(LSKEY + ".todos") != null) {
    todosStorage = window.localStorage.getItem(LSKEY + ".todos");
}
console.log(todosStorage);


console.log(window.localStorage.getItem(LSKEY + ".events"));

if(window.localStorage.getItem(LSKEY + ".events") != null) {
    eventsStorage = window.localStorage.getItem(LSKEY + ".events");
}
console.log(eventsStorage);



/**
 * Se qui sera ajouter dans le HTML (voir main.jsx)
 * @returns {JSX.Element} Élément JSX (React)
 */
function App() {

    // Permet de mettre a jour sans recharger la page ?
    // c'est une liste de string (textes) qui permettra de créer les checkbox + text (Todos)
    const [components, setComponents] = useState([...JSON.parse(todosStorage)]); //[...JSON.parse(todosStorage)] mets les components stocker localement au lancement  , c'est pour en mettre un de base.

    const [events, setEvents] = useState([...JSON.parse(eventsStorage)]); //[...JSON.parse(eventsStorage)] mets les evenements stocker localement au lancement  liste d'event pour le calendrier.

    const localizer = momentLocalizer(moment); // localizer (utile pour le calendar).

    // Save todos to localStorage every time components change.
    useEffect(() => {
        window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(components));
        window.localStorage.setItem(LSKEY + ".events", JSON.stringify(events));
    },[components]);


    /**
     * Est appeler lors du onClick du button => crée les Todos (checkbox + text)
     */
    function addTodos() {

        const input = document.getElementById("InputAdd"); // récupération de l'input pour avoir accès a sa valeur qui correspondra au texte du Todos a Ajouter.
        if(input.value !== "" && input.value !== null){ //si la valeur n'est pas vide.
            setComponents([...components,input.value]); // la nouvelle liste reprend les anciens (...components) et ont ajoute la nouvelle valeur (input.value).
        }

        const start = document.getElementById('InputFrom'); // input date From.
        const end = document.getElementById('InputTo'); // input date To.

        // creation de l'event (dans le calendar)
        let event = {
            start: new Date(start.value),
            end: new Date(end.value),
            title: input.value
        }

        //ajout de l'event au useState utiliser par le calendrier pour le mettre a jour.
        setEvents([...events,event]);

    }


    function removeTodos(posTodos){
        //supression composant.
        let resultComponents = [];

        for (let i = 0 ; i < components.length; i++){
            if(i !== posTodos){
                resultComponents.push(components[i]);
            }
        }

        setComponents([...resultComponents]);

        // suppression event dans calendrier.
        let resultEvents = [];

        for (let i = 0 ; i < events.length; i++){
            if(i !== posTodos){
                resultEvents.push(events[i]);
            }
        }

        setEvents([...resultEvents]);

    }


    // Élément JSX (React) qui sera renvoyer quand ont appel App (voir dans main.jsx)
    return (



        <BrowserRouter>

            <Title text={"My Todo App"}/> {/*utilisation du composant qui se trouve dans Title.jsx (ne pas oublier l'import ici et l'export dans Title.jsx).*/}

            <Link to="/list" className={"nav"}>My List</Link> <Link to="/calendar" className={"nav"}>My Calendar</Link> {/* les liens vers les différentes pages (to = href) */}

            <Routes>{/* definitions des différentes pages */}
                {/* page par défault (index ) */}
                <Route index path="/" element={
                    <div>
                        {/*utilisation du composant qui se trouve dans InputAdd.jsx (ne pas oublier l'import ici et l'export dans InputAdd.jsx).*/}
                        <InputAdd onClick={addTodos} placeHolder="Type a new todo" buttonText={"Add"} id={"InputAdd"}/>
                        {components.map((item, i) => ( <Todos text={item} key={`Todos_${i}`} onClick={() => removeTodos(i)} /> ))} {/* Création des Todos en fonction de la liste components*/}
                    </div>
                } />
                {/* page list */}
                    <Route index path="list" element={
                        <div>
                            {/*utilisation du composant qui se trouve dans InputAdd.jsx (ne pas oublier l'import ici et l'export dans InputAdd.jsx).*/}
                            <InputAdd onClick={addTodos} placeHolder="Type a new todo" buttonText={"Add"} id={"InputAdd"}/>
                            {components.map((item, i) => ( <Todos text={item} key={`Todos_${i}`} removeId={i} onClick={() => removeTodos(i)} /> ) )} {/* Création des Todos en fonction de la liste components*/}
                        </div>
                    } />
                {/* page calendar */}
                    <Route path="calendar" element={
                        <Calendar
                            localizer={localizer}
                            events={events} // useState pour mettre a jour les évènements
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 500 }}
                        />
                    }/>
            </Routes>
        </BrowserRouter>

    );

}


export default App; //export de app pour pouvoir l'utiliser dans main.jsx



