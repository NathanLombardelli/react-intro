import '../css/Todos.css';

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
      </div>
    );
}