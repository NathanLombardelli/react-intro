import '../css/Todos.css';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * component React : Checkbox + text
 * @param props la balise de même nom dans app.jsx
 * @returns {JSX.Element} Élément JSX (React)
 */
export const Todos = (props) => {

    return (

      <div className={"Todos"}>
        <input type={"checkbox"}/>
        <p>{props.text}</p>
          <a><FontAwesomeIcon icon={faCircleXmark} className={"deleteBtn"} id={props.removeId} onClick={props.onClick}/></a>
      </div>
    );
}