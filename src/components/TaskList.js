import React,{useState} from "react";
import Task from "./Task";
//Receive the data as a prop
//From the prop, render all the tasks using map method
function TaskList({taskData}) {
 let tasks = taskData.TASKS
let tasksDisplay = tasks.map((element) =>{
  console.log(element)
  return(<Task key={element.name} category={element.category} text={element.text} />)
})
const [allTasks,deleteTask] = useState(tasksDisplay)
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */
      tasksDisplay}
    </div>
  );
}

export default TaskList;
