import React,{useState} from "react";
import Task from "./Task";
//Receive the data as a prop
//From the prop, render all the tasks using map method
function TaskList({taskData}) {
 let tasks = taskData.TASKS
let tasksDisplay = tasks.map((element) =>{
  console.log(element)
  return(<Task key={element.text} handleDelete={handleDelete}  category={element.category} text={element.text} />)
})
const [allTasks,deleteTask] = useState(tasksDisplay)
function handleDelete(taskName){
let newTasks = tasks.filter((task) => {
  console.log(task.text)
 return task.text !== taskName
})
deleteTask(newTasks.map((element) =>{
  tasks = newTasks
  console.log(element)
  return(<Task key={element.text} handleDelete={handleDelete}  category={element.category} text={element.text} />)
}))
   }  


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */
      allTasks}
    </div>
  );
}

export default TaskList;
