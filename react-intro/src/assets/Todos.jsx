import '../css/Todos.css';

export const Todos = (props) => {

  return (

      <div className={"Todos"}>
        <input type={"checkbox"}/>
        <p>{props.text}</p>
      </div>
    );
}