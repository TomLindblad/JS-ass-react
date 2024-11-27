import '../toDoList.css';
import { useState } from "react";

function ToDoList(){

    const [toDoArray, setToDoArray] = useState(["Walk the walk", "Dig that hole", "Buy some rope"]);

    function addTaskHandler() {
        const newTask = document.getElementById("taskInput").value;
        document.getElementById("taskInput").value = "";

        setToDoArray(toDo => [...toDo, newTask]); 
    }

    function removeTaskHandler(index){
        setToDoArray(toDoArray.filter((_, i) => i !== index));
    }

    function moveTaskUpHandler(index){
        if (index > 0){
            const movedArray = [...toDoArray];
            [movedArray[index], movedArray[index - 1]] = [movedArray[index - 1], movedArray[index]]
            setToDoArray(movedArray);
        }
    }

    function moveTaskDownHandler(index){
        if (index !== toDoArray.length - 1){
            const movedArray = [...toDoArray];
            [movedArray[index], movedArray[index + 1]] = [movedArray[index + 1], movedArray[index]]
            setToDoArray(movedArray);
        }
    }


    return(
        <div>
            <h3 className="quote">“It's the job that's never started as takes longest to finish.” - Sam Gamgee</h3>
            <h3>To do:</h3>
            <ul className="toDoContainer">
                {toDoArray.map((task, index) => (
                    <li className="toDoList"key={index}> {task} 
                    <button 
                        className="regular-btn moveUp-btn"
                        onClick={() => moveTaskUpHandler(index)}>
                        Move up
                    </button>
                    <button 
                        className="regular-btn moveDown-btn"
                        onClick={() => moveTaskDownHandler(index)}>
                        Move down
                    </button>
                    <button 
                        className="regular-btn remove-btn" 
                        onClick={() => removeTaskHandler(index)}>
                        Remove
                    </button>
                    </li>))}
            </ul>
             <input type="text" placeholder="Insert your task" id="taskInput" />
             <button 
                className="regular-btn" 
                onClick={addTaskHandler}>
                Add task
            </button>
        </div>
    );

}

export default ToDoList;