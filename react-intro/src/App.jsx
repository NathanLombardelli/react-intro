import './css/App.css'
import {InputAdd} from "./assets/InputAdd.jsx";
import {Title} from "./assets/Title.jsx";
import { useState } from 'react';
import {Todos} from "./assets/Todos.jsx";


/**
 * Se qui sera ajouter dans le HTML (voir main.jsx)
 * @returns {JSX.Element} Élément JSX (React)
 */
function App() {

    // Permet de mettre a jour sans recharger la page ?
    // c'est une liste de string (textes) qui permettra de créer les checkbox + text (Todos)
    const [components, setComponents] = useState(["Add a new Task"]); //["Add a new Task"] est optionel, c'est pour en mettre un de base.

    /**
     * Est appeler lors du onClick du button => crée les Todos (checkbox + text)
     */
    function addTodos() {

        const input = document.getElementById("InputAdd"); // récupération de l'input pour avoir accès a sa valeur qui correspondra au texte du Todos a Ajouter.
        if(input.value !== "" && input.value !== null){ //si la valeur n'est pas vide.
            setComponents([...components,input.value]); // la nouvelle liste reprend les anciens (...components) et ont ajoute la nouvelle valeur (input.value).
        }


    }

    // Élément JSX (React) qui sera renvoyer quand ont appel App (voir sans main.jsx)
    return (
    <>
        <Title text={"My Todo App"}/> {/*utilisation du composant qui se trouve dans Title.jsx (ne pas oublier l'import ici et l'export dans Title.jsx).*/}

        <div>
            {/*utilisation du composant qui se trouve dans InputAdd.jsx (ne pas oublier l'import ici et l'export dans InputAdd.jsx).*/}
            <InputAdd onClick={addTodos} placeHolder="Type a new todo" buttonText={"Add"} id={"InputAdd"}/>
            {components.map((item, i) => ( <Todos text={item} key={`Todos_${i}`} /> ))} {/* Création des Todos en fonction de la liste components*/}
        </div>
    </>
    );

}

export default App; //export de app pour pouvoir l'utiliser dans main.jsx



