import '../toDoList.css';
import { useState } from "react";

function ToDoList(){

    const [toDoArray, setToDoArray] = useState(["Go to the Systembolaget and buy some boxes of fairly decent wine.", "Pick the apples.", "Buy a few inches of rope.", "Take the axolotl to the bathhouse."]);

    function addTaskHandler() {
        const newTask = document.getElementById("taskInput").value;
        if (newTask !== ""){
        document.getElementById("taskInput").value = "";

        setToDoArray(toDo => [...toDo, newTask]);
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
            <input type="text" placeholder="Write a new task..." id="taskInput" />
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