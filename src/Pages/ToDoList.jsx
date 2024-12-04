import '../toDoList.css';
import { useState } from "react";

function ToDoList(){

    let taskArray = ["Go to the Systembolaget and buy some boxes of fairly decent wine.", "Pick the apples.", "Buy a few inches of rope.", "Take the axolotl to the bathhouse."];

    const [toDoArray, setToDoArray] = useState(taskArray);

    const [newTask, setNewTask] = useState();

    function addTaskHandler() {/* Removed the getElementByID, changed to setNewTask 241204*/
        if (newTask !== ""){

        setToDoArray(toDo => [...toDo, newTask]);
        setNewTask("");/* Clears the inputfield after adding the task 241204*/
        } 
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
        <div className="main-todo-container">
            <h3 className="quote">“It's the job that's never started as takes longest to finish.” - Sam Gamgee</h3>
            <h2>To-do list:</h2>
            <label className="visually-hidden" for="taskInput">Task Input</label>{/* Added label and "visually-hidden"-class for screenreaders 241204*/}
            <input
                type="text" 
                placeholder="Write a new task..." 
                name="taskInput"                 
                id="taskInput" 
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}/>{/* added so that the value is the variable newTask 241204*/}
            <button 
                className="add-btn" 
                onClick={addTaskHandler}>
                Add task
            </button>
            <ul className="toDoContainer">
                {toDoArray.map((task, index) => (
                    <li className="toDoList"key={index}> 
                        <div className="taskText">{task}</div> 
                        <div className="listBtn-container">
                            <button 
                                className="small-btn move-btn"
                                onClick={() => moveTaskUpHandler(index)}>
                                <i className="fa-solid fa-arrow-up"></i>
                            </button>
                            <button 
                                className="small-btn move-btn"
                                onClick={() => moveTaskDownHandler(index)}>
                                <i className="fa-solid fa-arrow-down"></i>
                            </button>
                            <button 
                                className="small-btn remove-btn" 
                                onClick={() => removeTaskHandler(index)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </li>))}
            </ul>
        </div>
    );

}

export default ToDoList;