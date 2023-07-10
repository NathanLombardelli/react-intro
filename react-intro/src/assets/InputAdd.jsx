/**
 * component React : Input + Button
 * @param props la balise de même nom dans app.jsx
 * @returns {JSX.Element} Élément JSX (React)
 */
export const InputAdd = (props) => {

    return (

        <div className="AddToDo">
            <input placeholder={props.placeHolder} id={"InputAdd"}></input>
            <button onClick={props.onClick}>{props.buttonText}</button>
        </div>
    );
};