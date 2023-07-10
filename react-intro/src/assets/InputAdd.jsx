export const InputAdd = (props) => {

    return (

        <div className="AddToDo">
            <input placeholder={props.placeHolder} id={"InputAdd"}></input>
            <button onClick={props.onClick}>{props.buttonText}</button>
        </div>
    );
};