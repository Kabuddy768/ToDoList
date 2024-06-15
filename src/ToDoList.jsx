import { useState } from "react";

function ToDoList() {
  const [tasks, setTask] = useState(["Eat Breakfast", "Work", "Lunch meeting"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim !== "") {
      setTask((t)=>[...t,newTask])
      setNewTask("")
      
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_,i)=> i!==index)
    setTask(updatedTasks)
  }
  function moveTaskUp(index) {
    if (index>0) {
      const updatedTasks =[...tasks];
      ([updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]);
      setTask(updatedTasks);
    }
  }
  // function moveTaskUp(index) {
  //   if (index > 0) {
  //     const updatedTasks = [...tasks];
  //     ([updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]);
  //     setTask(updatedTasks);
  //   }
  // }
  
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
      setTask(updatedTask);
    }
  }
  return (
    <div className="to-do-list">
      <h2>To Do List</h2>
      <div>
        <input
          type="text"
          placeholder="Add a new Task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="addButton" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="deleteButton" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="moveButton" onClick={() => moveTaskUp(index)}>
              ☝
            </button>
            <button
              className="moveButton"
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
