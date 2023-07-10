import './css/App.css'
import {InputAdd} from "./assets/InputAdd.jsx";
import {Title} from "./assets/Title.jsx";
import { useState } from 'react';
import {Todos} from "./assets/Todos.jsx";



function App() {

    const [components, setComponents] = useState(["Add a new Task"]);

    function addTodos() {

        const input = document.getElementById("InputAdd");
        if(input.value !== "" && input.value !== null){
            setComponents([...components,input.value]);
        }


    }

    return (
    <>
        <Title text={"My Todo App"}/>

        <div>

            <InputAdd onClick={addTodos} placeHolder="Type a new todo" buttonText={"Add"} id={"InputAdd"}/>
            {components.map((item, i) => ( <Todos text={item} key={`Todos_${i}`} /> ))}
        </div>
    </>
    );

}

export default App;



